import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, KeyboardAvoidingView, ActivityIndicator } from 'react-native';
import axios from 'axios';

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [loadingState, setLoadingState] = useState(false);


  const sendMessage = async () => {
    if (inputMessage.trim() === '') return;
    setLoadingState(true);
    try {
      const options = {
        method: 'POST',
        url: 'https://open-ai21.p.rapidapi.com/conversationgpt',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': 'bcaf8936f1msh77011aedadd187fp1a619fjsnba022f655b69',
          'X-RapidAPI-Host': 'open-ai21.p.rapidapi.com',
        },
        data: {
          messages: [
            {
              role: 'user',
              content: inputMessage,
            },
          ],
          web_access: false,
          system_prompt: '',
          temperature: 0.9,
          top_k: 5,
          top_p: 0.9,
          max_tokens: 256,
        },
      };

      const response = await axios.request(options);
      console.log('Full API Response:', response.data.result);

      const botReply = response.data.result || 'Bot response not available';

      setMessages([...messages, { role: 'user', content: inputMessage }, { role: 'bot', content: botReply }]);
      setInputMessage('');
      setLoadingState(false);
    } catch (error) {
      console.error(error);
      setLoadingState(false);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', justifyContent: item.role === 'user' ? 'flex-end' : 'flex-start' }}>
            <View
              style={{
                backgroundColor: item.role === 'bot' ? '#e0e0e0' : '#b3e0ff',
                borderRadius: 8,
                padding: 8,
                margin: 4,
              }}
            >
              <Text style={{ textAlign: 'left' }}>{item.content}</Text>
            </View>
          </View>
        )}
      />
            {loadingState ? <ActivityIndicator size="large" color="#0000ff" /> : null}
      <KeyboardAvoidingView style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          style={{ flex: 1, borderWidth: 1, borderRadius: 8, padding: 8 }}
          value={inputMessage}
          onChangeText={(text) => setInputMessage(text)}
          placeholder="Type your message..."
        />
        <Button title="Send" onPress={sendMessage}
        />
      </KeyboardAvoidingView>
    </View>
  );
};

export default ChatPage;
