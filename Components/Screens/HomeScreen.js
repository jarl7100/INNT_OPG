import { Text, View, StyleSheet, Alert, Image} from 'react-native'
import {Button} from 'react-native-paper';
import React from 'react'
import { useNavigation } from '@react-navigation/native';

import styles from '../GlobalStyleScheet/Style.js'

// Her laver vi en home screen som viser en velkomst besked og en booking knap som i denne demo version viser en alert besked i stedet for at booke en båd
function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.Viewer}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.Text}>Welcome to Nautical Rentals </Text>
        <Text style={styles.Text2}>Book a boat or loan out your boat today!</Text>
      </View>
      <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
        <Image style={{width: 400, height: 300, borderRadius: 20 }} source={{ uri: 'https://media1.giphy.com/media/d8VohwAKaDvO5m31iU/giphy.gif?cid=ecf05e47t5dfvz5ah1wlifzkgpvtcsw8q9261fz5jl5m2rpn&ep=v1_gifs_search&rid=giphy.gif&ct=g'}} />
      </View>
      <View style={{flex: 1}}>
        <Button style={{marginTop: 20, marginLeft: 50, marginRight: 50, backgroundColor: 'blue'}}  mode="contained" onPress={() => Alert.alert('This is a demo app  \n  \n In the full version you will be able to book a boat :)')}>
          Book a Boat
        </Button>
        <Button style={{marginTop: 20, marginLeft: 50, marginRight: 50, backgroundColor: 'green'}}  mode="contained" onPress={() => navigation.navigate('Map')}>
         Map view
        </Button>
      </View>
    </View>
  )
}

export default HomeScreen
