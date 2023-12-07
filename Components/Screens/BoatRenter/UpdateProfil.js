import React, { Component, useEffect, useState } from 'react'
import { View, Text, TextInput, ScrollView, StyleSheet, KeyboardAvoidingView } from 'react-native';

import PocketBase from 'pocketbase';
import { getID } from '../../utils/AuthService.js'

export default function UpdateProfile () {
        const [loading, setLoading] = useState(true);
        const [profile, setProfile] = useState({
            id: '',
            username: '',
            email: '',
            boatOwner: false,
            postal: 0,
            city: '',
            address: '',
            phone: 0,
            firstName: '',
            surname: '',

        });

        const pb = new PocketBase('https://pocketbaselucashunt.fly.dev');

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
        <View>

        </View>
    )


    
}

const styles = StyleSheet.create({ 
      text: {
        fontSize: 20,
        flex: 40,
        fontWeight: "300",
      },
      header: {
        fontSize: 25,
        fontWeight: "bold",
        marginLeft: -10,
      },
      input: {
        borderColor: "#4097ed",
        width: 90,
        borderBottomWidth: 1,
        flex: 60,
        paddingLeft: 5,
        height: 30,
      },
    });
