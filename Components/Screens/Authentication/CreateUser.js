
import { View, Text, TextInput, ActivityIndicator, Switch, Image, KeyboardAvoidingView } from 'react-native';
import { Button } from 'react-native-paper';
import * as React from "react";
import { useEffect, useState } from "react";
import PocketBase from 'pocketbase';
import { storeToken} from "../../utils/AuthService.js";
import Style from '../../GlobalStyleSheet/Style.js';
import { useNavigation } from '@react-navigation/native';
import BoatImage from '../../../assets/_4d6f9277-f42c-42e3-b590-4c77d9537cca.jpeg';

//denne screen er til at brugeren kan oprette en profil

export default function CreateUser({}) {

  const pb = new PocketBase('https://pocketbaselucashunt.fly.dev');
  const [firstName, setFirstName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loadingState, setLoadingState] = useState(false);
  const [type, setType] = useState(false);
  const navigation = useNavigation();


  //funktione der tager den email, brugernavn og adgangskode som brugeren har indtastet og oprettet profilen, 
  //samt logger ind og gemmer oplysninger om brugeren i storage 
  async function createUser() {
    setLoadingState(true);
    const data = {
        firstName: firstName,
        surname: surname,
      phone: phone,
      email: email,
      boatOwner: type,
      emailVisibility: true,
      password: password,
      passwordConfirm: password,
    };
    
    try {
      //opretter brugeren
      await pb.collection('users').create(data);
    
      //Logger brugeren ind
      const authData = await pb.collection('users').authWithPassword(
        email,
        password
      );

      if (authData) {
        //bruger Utils Authservice funktion til at gemme information om brugeren
        storeToken({userToken: pb.authStore.token, userID: pb.authStore.model.id, boatOwner: pb.authStore.model.boatOwner.toString()});
        
        console.log(pb.authStore.model.boatOwner)
        setLoadingState(false);
        if (pb.authStore.model.boatOwner === false) {
          navigation.navigate('startScreenRenter');
        } else {
          
          navigation.navigate('startScreenOwner', { reloadFlag: Date.now() });
        }
      }
    } catch (error) {
      console.error('Error:', error);
      setLoadingState(false);
      alert('Der skete en fejl, prøv igen')
    }
  }

  return (
    <KeyboardAvoidingView
    style={Style.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
      <Image 
        source={BoatImage}
        style={[Style.logo, {width: 250, height: 200}]}
      />
      <TextInput
        style={Style.input}
        placeholder="Fornavn"
        onChangeText={setFirstName}
        value={firstName}
      />
      <TextInput
        style={Style.input}
        placeholder="Efternavn"
        onChangeText={setSurname}
        value={surname}
      />
      <TextInput
        style={Style.input}
        placeholder="Telefon"
        onChangeText={setPhone}
        value={phone}
      />
      <TextInput
        style={Style.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={[Style.input]}
        placeholder="Adgangskode"
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />

      <View/>
      <Text>Er du bådejer?</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={type ? "#fff" : "#f4f3f4"}
        onValueChange={() => setType(!type)}
        value={type}
      />
      <Button mode="contained" onPress={createUser} style={[Style.profileEditbutton, {backgroundColor: '#4097ed', marginBottom: 10}]}>
        Opret Profil
      </Button>
      {loadingState ? <ActivityIndicator size="large" color="#0000ff" /> : null}
      <Text> Har du allerede en profil? Log ind her</Text>
      <Button mode="contained" onPress={() => navigation.navigate('Log Ind')} style={Style.profileEditbutton}>
        Log Ind
      </Button>
      <View/>

    </KeyboardAvoidingView>
  );
}

