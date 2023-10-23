// importere en masse biblioteker som vi skal bruge til at lave vores profil side
import React, { Component } from 'react'

import { Image, ImageBackground, Text, View, SafeAreaView } from 'react-native'
import { Card, Button } from 'react-native-elements'

import Style from '../GlobalStyleSheet/Style.js'


export class Profile extends Component {
  render() {
    return (
      // SafeAreaView sørger for at indholdet ikke bliver skjult af statusbaren på iOS
      <SafeAreaView style={Style.profileContainer}>

        {/* Første sektion med profilbillede og navn */}
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
            Ben Thompson
          </Text>
          <Text style={Style.profileType}>
            Boat Renter
            </Text>
        </View>

        {/* Anden sektion med profiloplysninger */}
        <View style={Style.profileContainer}>
          <Card>
            <Card.Title h5>Profile details</Card.Title>
            <Card.Divider />
            <Text style={Style.profileInfo}>
              Name: Ben Thompson
            </Text>
            <Text style={Style.profileInfo}>
              Email: benthompson@fakeemail.com
            </Text>
            <Text style={Style.profileInfo}>
              Phone: 12345678
            </Text>
            <Text style={Style.profileInfo}>
              City of residence: Copenhagen
            </Text>
            <Text style={Style.profileInfo}>
              Address: 123 Fake Street
            </Text>
            <Text style={Style.profileInfo}>
              Number of boats rented: 4
            </Text>
            <Button title='Edit Profile' />
          </Card>
        </View>

      </SafeAreaView >
    )
  }
}

// Eksporter Profile som standard
export default Profile