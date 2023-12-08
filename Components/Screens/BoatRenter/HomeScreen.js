import { Text, View, Alert, Image } from 'react-native'
import { Button } from 'react-native-paper';
import React from 'react'
import { useNavigation } from '@react-navigation/native';

import Style from '../../GlobalStyleSheet/Style.js'

// Her laver vi en home screen som viser en velkomst besked og en booking knap som i denne demo version viser en alert besked i stedet for at booke en båd
function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={Style.homeViewer}>
      <View style={Style.homeViewer2}>
        <Text style={Style.homeText}>
          Welcome to B O A T
        </Text>
        <Text style={Style.homeText2}>
          Book a boat or loan out your boat today!
        </Text>
      </View>

      <View style={Style.homeViewerImage}>

        {/* En gif en båd*/}
        <Image style={Style.homeImage}
          source={{ uri: 'https://media1.giphy.com/media/d8VohwAKaDvO5m31iU/giphy.gif?cid=ecf05e47t5dfvz5ah1wlifzkgpvtcsw8q9261fz5jl5m2rpn&ep=v1_gifs_search&rid=giphy.gif&ct=g' }}
        />

      </View>
      <View style={Style.homeViewerButton}>


        <Button
          style={Style.homeButton}
          mode="contained"
          onPress={() => navigation.navigate("Boats")}>
          Book a Boat
        </Button>
        {/* Tager brugeren til "Map" siden */}
        <Button
          style={Style.homeButton}
          mode="contained"
          onPress={() => navigation.navigate('Map')}>
          Map view
        </Button>
      </View>
    </View>
  )
}

export default HomeScreen
