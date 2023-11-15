import { View, Text, TextInput, Button, ActivityIndicator } from 'react-native';
import { storeToken} from "../../utils/AuthService.js";
import * as React from "react";
import { useEffect, useState } from "react";
import PocketBase from 'pocketbase';



//Denne skærm er til at brugeren kan logge ind hvis han allerede har en konto

export default function Login({}) {
  
  const pb = new PocketBase('https://pocketbaselucashunt.fly.dev');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loadingState, setLoadingState] = useState(false);


  async function loginUser() {
    //Starter med at sætter loadingstate til true så brugeren ved at der bliver arbejdet på at logge ind
    setLoadingState(true);

    //Logger kunden ind med email og password
    try {
      const authData = await pb.collection('users').authWithPassword(
        email,
        password
      );

      if (authData) {
        storeToken({userToken: pb.authStore.token, userID: pb.authStore.model.id, boatOwner: pb.authStore.model.boatOwner.toString()});
        console.log(authData);
        setLoadingState(false);
      }
    } catch (error) {
      //kan i fremtiden laves så brugeren får besked om at der er sket en fejl
      console.error('Error:', error);
      setLoadingState(false);
    }
  }

  return (
    <View >
      <Text >Log Ind</Text>
      <TextInput
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
       
      />
      <TextInput
        placeholder="Adgangskode"
        onChangeText={setPassword}
        value={password}
      
        secureTextEntry={true}
      />
      <Button title="Log ind" onPress={loginUser} />

      {/* //Tenary operator der viser en loading bar hvis loadingstate er true */}
      {loadingState ? <ActivityIndicator size="large" color="#0000ff" /> : null}
      

    </View>
  );
}

