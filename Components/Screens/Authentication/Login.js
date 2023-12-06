import { View, Text, TextInput, ActivityIndicator, Image, KeyboardAvoidingView } from 'react-native';
import { Button } from 'react-native-paper';
import { storeToken} from "../../utils/AuthService.js";
import * as React from "react";
import { useEffect, useState } from "react";
import PocketBase from 'pocketbase';
import { useNavigation } from '@react-navigation/native';
import Style from '../../GlobalStyleSheet/Style.js';
import BoatImage from '../../../assets/_4d6f9277-f42c-42e3-b590-4c77d9537cca.jpeg';


//Denne skærm er til at brugeren kan logge ind hvis han allerede har en konto

export default function Login({}) {
  
  const pb = new PocketBase('https://pocketbaselucashunt.fly.dev');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loadingState, setLoadingState] = useState(false);
  const navigation = useNavigation();


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

        setLoadingState(false);
        if (pb.authStore.model.boatOwner === false) {
          navigation.reset({
            index: 0,
            routes: [{name: 'startScreenRenter'}],
          })
        } else {
          navigation.reset({
            index: 0,
            routes: [{name: 'startScreenOwner'}],
          })
        }
      }
    } catch (error) {
      //kan i fremtiden laves så brugeren får besked om at der er sket en fejl
      console.error('Error:', error);
      setLoadingState(false);
      alert('Forkert email eller adgangskode');
    }
  }

  return (
    <KeyboardAvoidingView    
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}     
    style={Style.container}>
      <Image 
    source={BoatImage}
    style={[Style.logo, {width: 200, height: 170}]}
  />
        <TextInput 
        style={Style.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
       
      />
      <TextInput
        style={Style.input}
        placeholder="Adgangskode"
        onChangeText={setPassword}
        value={password}
      
        secureTextEntry={true}
      />

      <Button onPress={loginUser} mode="contained" style={[Style.profilBoatOwnerCard]}>
      Log ind
      </Button>

      {/* //Tenary operator der viser en loading bar hvis loadingstate er true */}
      {loadingState ? <ActivityIndicator size="large" color="#0000ff" /> : null}
      

    </KeyboardAvoidingView>
  );
}

