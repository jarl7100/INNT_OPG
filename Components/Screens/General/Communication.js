import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, Button, KeyboardAvoidingView } from 'react-native';
import PocketBase from 'pocketbase';
import LoadingScreen from '../LoadingScreen';


//Denne skærm er til at brugeren kan kommunikere med en anden bruger
export default function Communication({ route }) {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const { renter, owner } = route.params;

  //sender beskeden til pocketbase databasen, og henter derefter alle beskederne igen
    async function sendMessage() {
        const pb = new PocketBase('https://pocketbaselucashunt.fly.dev');
        const data = {
            message: message,
            messageReceiver: renter,
            messageSender: owner,
        }
        await pb.collection('messages').create(data);
        setMessage('');
        getMessages();
    }

    //Henter alle beskederne fra pocketbase databasen, mellem de to brugere
    async function getMessages() {
        const pb = new PocketBase('https://pocketbaselucashunt.fly.dev');
        const filter = `(messageReceiver = '${renter}' || messageSender = '${renter}') && (messageReceiver = '${owner}' || messageSender = '${owner}')`;
        const data = await pb.collection('messages').getList(1, 50, {
            sort: '-created',
            filter: filter,
        });
        
        if (data.items.length === 0) {
            setMessages([{"id": "1", "message": "No messages yet", "messageReceiver": renter, "messageSender": owner}]);
        } else {
        setMessages(data.items);
        }
    }
   
    useEffect(() => {
        getMessages();
    }, [])

    const renderItem = ({ item }) => {
        const messageStyle = item.messageReceiver === renter ? styles.sentMessage : styles.receivedMessage;
        return (
          <View style={[styles.messageContainer, messageStyle]}>
            <Text style={styles.messageText}>{item.message}</Text>
          </View>
        );
      };
    
      return (
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
          {messages.length === 0 ? (
            <LoadingScreen />
          ) : (
            <FlatList
              data={messages}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderItem}
              contentContainerStyle={styles.messageList}
              inverted // Scrolls messages from bottom to top
            />
          )}
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.horizontal} >
            <TextInput
              style={styles.textInput}
              placeholder="Write a message"
              onChangeText={(text) => setMessage(text)}
              value={message}
            />
            <Button title="Send" onPress={() => sendMessage()} />
          </KeyboardAvoidingView>
        </KeyboardAvoidingView>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        
      },
      messageList: {
        flexGrow: 1,
        paddingHorizontal: 10
      },
      messageContainer: {
        borderRadius: 8,
        padding: 10,
        marginVertical: 5,
        maxWidth: '80%',
        
      },
      receivedMessage: {
        backgroundColor: 'darkgray', // Background color for received messages
        alignSelf: 'flex-start',
         // Align received messages to the left
      },
      sentMessage: {
        backgroundColor: '#4097ed', // Background color for sent messages
        alignSelf: 'flex-end',
        color: 'white',
         // Align sent messages to the right
      },
      messageText: {
        fontSize: 16,
        color: 'white',
      },
      horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: 'gray',
      },
      textInput: {
        flex: 1,
        marginRight: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 8,
      },
    });