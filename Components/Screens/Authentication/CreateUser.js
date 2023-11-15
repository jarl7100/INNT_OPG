
import { View, Text, TextInput, Button, ActivityIndicator, Switch } from 'react-native';
import * as React from "react";
import { useEffect, useState } from "react";
import PocketBase from 'pocketbase';
import { storeToken} from "../../utils/AuthService.js";

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
       
    
        setLoadingState(false);
      }
    } catch (error) {
      console.error('Error:', error);
      setLoadingState(false);
    }
  }

  return (
    <View >
      <Text >Opret profil</Text>
        <TextInput
            placeholder="Fornavn"
            onChangeText={setFirstName}
            value={firstName}
      
        />
        <TextInput
            placeholder="Efternavn"
            onChangeText={setSurname}
            value={surname}
            
        />
        <TextInput
            placeholder="Telefon"
            onChangeText={setPhone}
            value={phone}
            />

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
      <Text>Er du bådejer?</Text>
              <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={ type ? "#fff" : "#f4f3f4"}
                    
                    onValueChange={()=>setType(!type)}
                    value={type}
                />

      <Button title="Opret profil" onPress={createUser} />
      {loadingState ? <ActivityIndicator size="large" color="#0000ff" /> : null}
      

    </View>
  );
}