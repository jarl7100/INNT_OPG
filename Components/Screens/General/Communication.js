import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {useEffect, useState} from 'react';
import PocketBase from 'pocketbase';
import { getID } from '../../utils/AuthService.js';
import LoadingScreen from '../LoadingScreen.js';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    messageContainer: {
        padding: 10,
        marginVertical: 5,
        borderRadius: 10,
        maxWidth: '80%',
    },
    sentMessage: {
        backgroundColor: '#e6e6e6',
        alignSelf: 'flex-start',
        marginLeft: 10,
    },
    receivedMessage: {
        backgroundColor: '#007aff',
        alignSelf: 'flex-end',
        marginRight: 10,
    },
    messageText: {
        fontSize: 16,
        color: '#000',
    },
    sentMessageText: {
        color: '#000',
    },
    receivedMessageText: {
        color: '#fff',
    },
});

export default function Communication() {
        const pb = new PocketBase('https://pocketbaselucashunt.fly.dev');
        const [messages, setMessages] = useState([]);
        const [userId, setUserId] = useState('ep9rkfngvt7dchh')
        const [id, setId] = useState('p19k344eoibhbz9')
        const [loading, setLoading] = useState(true);

        async function getMessages() {
            const sentFilter = `messageSender = '${userId}' && messageReceiver = '${id}'`;
         
            const receivedFilter = `messageSender = '${id}' && messageReceiver = '${userId}'`;

            try {
                const sentMessages = await pb.collection("messages").getList(1, 10, {
                    sort: "-created",
                    filter: sentFilter,
                });

                const receivedMessages = await pb.collection("messages").getList(1, 10, {
                    sort: "-created",
                    filter: receivedFilter,
                });
                console.log(receivedMessages)
                const concat = [...sentMessages.items, ...receivedMessages.items]
                    .map((message) => ({
                        id: message.id,
                        text: message.message,
                        senderId: message.messageSender,
                        receiverId: message.messageReceiver,
                        createdDate: message.created,
                    }))
                    .sort((a, b) =>  new Date(b.createdDate) - new Date(a.createdDate));

                setMessages(concat);
                console.log(messages)
                setLoading(false);
            } catch (error) {
                console.error("Error:", error);
            }
        }

        useEffect(() => {
            getMessages()
                

               pb.collection('messages').subscribe('*', function (e) {
                   
                    getMessages();
            });
        }, []);


  

    return (
        <View style={styles.container}>
                { loading ? <LoadingScreen /> :
                        messages.map((message) => {
                                return (
                                        <View key={message.id} style={[styles.messageContainer, message.senderId === id ? styles.sentMessage : styles.receivedMessage]}>
                                                <Text style={[styles.messageText, message.senderId === id ? styles.sentMessageText : styles.receivedMessageText]}>{message.text}</Text>
                                        </View>
                                )
                        })
                }

        </View>
    );
}

