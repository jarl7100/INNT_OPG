import React from 'react';
import { View, Text } from 'react-native';
import { Card, Button } from 'react-native-paper';
import Style from '../../GlobalStyleSheet/Style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Divider } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

import { useEffect, useState } from 'react'

import PocketBase from 'pocketbase';
import { getID, setId, logout } from '../../utils/AuthService.js'

const ProfilBoatOwner = ({route}) => {
    
    const navigation = useNavigation();
    const [profile, setProfile] = useState([]);
    const [boat, setBoat] = useState([]);
    const pb = new PocketBase('https://pocketbaselucashunt.fly.dev');

    async function loguserout() {
        await logout();
        navigation.reset({
            index: 0,
            routes: [{name: 'Welcome'}],
          })}

    const getUserInformation = async () => {
        const ID = await getID()
        const record = await pb.collection('users').getOne(ID);
        setProfile(record)
   

    }

   async function getBoatInformation() {
        const ID = await getID()
        const filter = `boatOwner = '${ID}'`;
        try {
        const data = await pb.collection('boatPosts').getFirstListItem(filter);
        setBoat(data)
        } catch (error) {
            console.error('Error:', error);
            
        }
          
      }

      function navigateToBoatPost(boatID) {
        
        if(boatID === undefined) {
            navigation.navigate('Add Boat');
        } else {
        navigation.navigate('Boat Post', { boatID: boatID});
            }
      }
   

    useEffect(() => {
        getUserInformation();
        getBoatInformation();
        
    }, [route.params]);

    return (
        <View style={Style.profileOwnerContainer} >
            <View style={Style.profileOwnerCardViewer}>
                <Card style={Style.profilBoatOwnerCard} mode='contained'>
                    <Card.Title />
                    <Card.Content>
                        <Card.Cover source={{ uri: 'https://www.hmy.com/wp-content/uploads/2019/07/Glenn-Square-Headshot-900x900.jpg' }} style={Style.cardImageOwner} />
                        <Text style={Style.textCardOwnerTop}>
                            {profile.firstName} {profile.surname}
                        </Text>
                        <Text style={Style.textCardOwner}>
                            {<Ionicons name="boat-outline" size={20} />} {profile.harbor || 'Ikke angivet'}
                        </Text>
                        <Text style={Style.textCardOwner}>
                            {<Ionicons name="calendar" size={20} />} {profile.age || 'Ikke angivet'}
                        </Text>
                        <Text style={Style.textCardOwner}>
                            {<Ionicons name="call-outline" size={20} />} {profile.phone || 'Ikke angivet'}
                        </Text>
                        <Text style={Style.textCardOwner}>
                            {<Ionicons name="mail-outline" size={20} />} {profile.email || 'Ikke angivet'}
                        </Text>
                        <Button style={Style.profileEditbutton} mode="contained" onPress={() => navigation.navigate('Update Profile')}>
                            Edit Profile
                        </Button>
                        <Button style={Style.profileEditbutton} mode="contained" onPress={() => navigation.navigate('Insurance')}>
                            Insurance
                        </Button>
                        <Button style={Style.profileEditbutton2} mode="contained" onPress={() => loguserout()}>
                            Log out
                        </Button>
                    </Card.Content>
                </Card>
            </View>

            <View style={Style.profileOwnerCardViewer}>
                <Card style={Style.profilBoatOwnerCard} >
                    <Card.Content>
                        <Card style={Style.profilBoatOwnerInsideCard} onPress={() => navigateToBoatPost(boat.id)}>
                            <Card.Title title={boat > 0 ? "Your boat" : "Opret båd"} titleStyle={{ textAlign: 'center', fontSize: 20, color: "#4097ed", fontWeight: 'bold', marginBottom: -5 }} />
                            <Card.Content>
                                <Divider />
                                <Card.Cover style={Style.cardImagePost} source={{ uri: 'https://scdn.malibuboats.dev/cdn.pursuitboats.com/images/HomeNews/WOUNDER-70.webp' }} />
                                <Text style={Style.textCardOwnerTop1}>
                                    {boat.boatTitle || 'Ikke angivet'}
                                </Text>
                                <Text style={Style.textCardOwner2}>
                                    {<Ionicons name="location-outline" size={22} />} {boat.boatHarbour || 'Ikke angivet'}
                                </Text>
                                <Text style={Style.textCardOwner3}>
                                    {<Ionicons name="pricetag-outline" size={27} />} {boat.boatPrice || 'Ikke angivet'},- /uge
                                </Text>
                            </Card.Content>
                        </Card>
                        <Button style={Style.postEditbutton} mode="contained" onPress={() => navigation.navigate('Your Reviews')}>
                            {<Text style={Style.postEditButtonText}>Reviews</Text>}
                        </Button>
                    </Card.Content>
                </Card>
            </View>
            
        </View>
    );
};

export default ProfilBoatOwner;
