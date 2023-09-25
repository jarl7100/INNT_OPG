import { Text, View, StyleSheet, Alert, Image} from 'react-native'
import {Button} from 'react-native-paper';
import React, { Component } from 'react'

export class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.Viewer}>

        <Text style={styles.Text}>Welcome to Nautical Rentals </Text>
        <Text style={styles.Text2}>Book a boat or loan out your boat today!</Text>
        <Image style={{width: 415, height: 400, top: 100, borderRadius: 20 }} source={{ uri: 'https://media1.giphy.com/media/d8VohwAKaDvO5m31iU/giphy.gif?cid=ecf05e47t5dfvz5ah1wlifzkgpvtcsw8q9261fz5jl5m2rpn&ep=v1_gifs_search&rid=giphy.gif&ct=g'}} />
        <Button style={styles.Button}  mode="contained" onPress={() => Alert.alert('This is a demo app  \n  \n In the full version you will be able to book a boat :)')}>
          Book a Boat
        </Button>
      </View>
    )
  }
}

export default HomeScreen

 const styles = StyleSheet.create({
  Text: {
    top: 60,
  alignItems: 'center',
  fontSize: 30,
  fontWeight: 'bold',
  },
  Text2: {
    top: 60,
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 20,
  },
  Viewer: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff',
  }, 
  Button: {
    bottom: -150,
    alignItems: 'center',
    fontSize: 35,
    fontWeight: 'bold',
  }
}); 