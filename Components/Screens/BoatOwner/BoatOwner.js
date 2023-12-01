// importere en masse biblioteker som vi skal bruge til at lave vores profil side
import React, { Component, useEffect, useState } from 'react'

import { Image, ImageBackground, Text, View, SafeAreaView } from 'react-native'
import { Card } from 'react-native-elements'
import PocketBase from 'pocketbase';
import { getID, setId } from '../../utils/AuthService.js'
import LoadingScreen from '../LoadingScreen.js'
import { Button } from 'react-native-paper';
import { logout } from '../../utils/AuthService.js';
import { useNavigation } from '@react-navigation/native';

import Style from '../../GlobalStyleSheet/Style.js'

export default function Profile({}) {
  const [profile, setProfile] = useState([]);
  const pb = new PocketBase('https://pocketbaselucashunt.fly.dev');
    const navigation = useNavigation();

    async function logoutFunction() {
        await logout();
        //skal fikses helt
        navigation.navigate('Opret profil');
        console.log('logged out')
        }


  const getUserInformation = async () => {

   
    const ID = await getID()
    const record = await pb.collection('users').getOne(ID);
    setProfile(record)
    console.log(record)
    
}
 
    

    useEffect(() => {
      getUserInformation();
    }, []);

    return (
      // SafeAreaView sørger for at indholdet ikke bliver skjult af statusbaren på iOS
      
      

      <SafeAreaView style={Style.profileContainer}>
       
              {profile.length === 0 ? <LoadingScreen /> :
              <>
        <View style={Style.profileContainer}>
          <ImageBackground 
          style={Style.profilImageBackground} 
          source={{ uri: 'https://www.un.org/sites/un2.un.org/files/field/image/2022/06/silas-baisch-oczvgbqcjky-unsplash.jpg' }} 
          />
          <Image 
          style={Style.profileImage} 
          source={{ uri: 'https://cdn.denisonyachtsales.com/wp-content/uploads/2022/08/Denison-Team-Member-Website-Profile-Headshot-210-Tom-Robertson.png' }} 
          />
          <Text style={Style.profileName}>
          {profile.firstName} {profile.surname}
          </Text>
          <Text style={Style.profileType}>
            {profile.boatOwner ? 'Boat Owner' : 'Boat Renter'}
            </Text>
        </View>

        <View style={Style.profileContainer}>
          <Card>
            <Card.Title h5>Profile details</Card.Title>
            <Card.Divider />
         
            <Text style={Style.profileInfo}>
              Email: {profile.email}
            </Text>
            <Text style={Style.profileInfo}>
              Phone: {profile.phone}
            </Text>
            <Text style={Style.profileInfo}>
              City of residence: {profile.city || 'Ikke angivet'}
            </Text>
            <Text style={Style.profileInfo}>
              Address: {profile.address || 'Ikke angivet'}
            </Text>
    
            <Button icon="pencil" mode="contained" onPress={() => navigation.navigate('Update Profile')} style={Style.logoutbutton1}>
              Edit profile
           </Button>
           <Button icon="exit-to-app" mode="contained" onPress={logoutFunction} style={Style.logoutbutton2}>
              Log Out
           </Button>
          </Card>
        </View>
        </>
    }
      </SafeAreaView >
    )
  }


