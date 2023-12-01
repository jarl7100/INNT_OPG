// importere en masse biblioteker som vi skal bruge til at lave vores profil side
import React, { Component, useEffect, useState } from 'react'

import { Image, ImageBackground, Text, View, SafeAreaView, Modal, TextInput, StyleSheet } from 'react-native'
import { Card } from 'react-native-elements'
import PocketBase from 'pocketbase';
import { getID, setId } from '../../utils/AuthService.js'
import LoadingScreen from '../LoadingScreen.js'
import { Button } from 'react-native-paper';
import { logout } from '../../utils/AuthService.js';
import { useNavigation } from '@react-navigation/native';

import Style from '../../GlobalStyleSheet/Style.js'

export default function UpdateProfile () {
        const [profile, setProfile] = useState([]);
        const [modalVisible, setModalVisible] = useState(false);
        const pb = new PocketBase('https://pocketbaselucashunt.fly.dev');
          const navigation = useNavigation();
          const [updateInfo, setUpdateInfo] = useState('');
          const [updateType, setUpdateType] = useState('');


          const handleUpdate = (type) => {
            setModalVisible(true);
            setUpdateType(type);
          };

          async function handleSave () {
            const id = await getID();
            console.log(updateInfo, updateType, id)
            const data = {
                [updateType]: updateInfo,
            }
            const record = await pb.collection('users').update(id, data);

            setUpdateInfo('');
            getUserInformation();
            setModalVisible(false);
          };
      
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
        <SafeAreaView>
                    {profile.length === 0 ? <LoadingScreen /> :
                <>
            <Text>Update Profile</Text>

            <View style={{flexDirection: 'row',  justifyContent: 'center', alignItems: 'center',}}>
                <Text>Fornavn: {profile.firstName || 'ikke opgivet'}</Text>
                <Button title="Update" onPress={() => handleUpdate('firstName')}>Skift</Button>
            </View>      

            <View style={{flexDirection: 'row',  justifyContent: 'center', alignItems: 'center',}}>
                <Text>Efternavn: {profile.surname || 'ikke opgivet'}</Text>
                <Button title="Update" onPress={() => handleUpdate('surname')}>Skift</Button>
            </View>  

            <View style={{flexDirection: 'row',  justifyContent: 'center', alignItems: 'center',}}>
                <Text>Telefon: {profile.phone || 'ikke opgivet'}</Text>
                <Button title="Update" onPress={() => handleUpdate('phone')}>Skift</Button>
            </View>

            <View style={{flexDirection: 'row',  justifyContent: 'center', alignItems: 'center',}}>
                <Text>Email: {profile.email || 'ikke opgivet'}</Text>
                <Button title="Update" onPress={() => handleUpdate('email')}>Skift</Button>
            </View>

            <View style={{flexDirection: 'row',  justifyContent: 'center', alignItems: 'center',}}>
                <Text>City: {profile.city || 'ikke opgivet'}</Text>
                <Button title="Update" onPress={() => handleUpdate('city')}>Skift</Button>
            </View>

            <View style={{flexDirection: 'row',  justifyContent: 'center', alignItems: 'center',}}>
                <Text>Address: {profile.address || 'ikke opgivet'}</Text>
                <Button title="Update" onPress={() => handleUpdate('address')}>Skift</Button>
            </View>

            <View style={{flexDirection: 'row',  justifyContent: 'center', alignItems: 'center',}}>
                <Text>Zip: {profile.postal || 'ikke opgivet'}</Text>
                <Button title="Update" onPress={() => handleUpdate('postal')}>Skift</Button>
            </View>




                <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalView}>
          <TextInput
            style={styles.input}
            value={updateInfo}
            onChangeText={(text) => setUpdateInfo(text)}
            placeholder="Enter new"
          />

          <Button title="Save" onPress={handleSave}>Save</Button>
          <Button title="Cancel" onPress={() => setModalVisible(false)}>Cancel</Button>
        </View>
      </Modal>

          
            
            
         
        </>
}
        </SafeAreaView>
    )


    
}

const styles = StyleSheet.create({
    infoContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20,
    },
    modalView: {
      margin: 50,
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 20,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    input: {
      height: 40,
      width: '80%',
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 20,
      paddingHorizontal: 10,
    },
  });