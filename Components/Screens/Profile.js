import React, { Component } from 'react'

import { Image, ImageBackground, Text, View, SafeAreaView } from 'react-native'
import { Card, Button } from 'react-native-elements'

import styles from '../GlobalStyleSheet/Style.js'

// Her laver vi en profil side som viser brugerens profil billede, navn, email, telefon nummer, by, adresse og antal både lejet
export class Profile extends Component {
  render() {
    return (
      <SafeAreaView style={styles.profileContainer}>
  
        <View style={styles.profileContainer}>
          <ImageBackground style={{ width: 430, height: 230, top: 0, borderRadius: 20 }} source={{ uri: 'https://www.un.org/sites/un2.un.org/files/field/image/2022/06/silas-baisch-oczvgbqcjky-unsplash.jpg' }} />
          <Image style={{ width: 150, height: 150, top: -100, borderRadius: 400, borderWidth: 3, borderColor: '#fff' }} source={{ uri: 'https://cdn.denisonyachtsales.com/wp-content/uploads/2022/08/Denison-Team-Member-Website-Profile-Headshot-210-Tom-Robertson.png' }} />
          <Text style={{ fontSize: 30, fontWeight: 'bold', top: -100 }}>Ben Thompson</Text>
          <Text style={{ fontSize: 20, top: -100 }}>Boat Renter</Text>
        </View>

        <View style={styles.profileContainer}>
          <Card>
            <Card.Title h5>Profile details</Card.Title>
            <Card.Divider />
            <Text style={{ marginBottom: 10 }}>
              Name: Ben Thompson
            </Text>
            <Text style={{ marginBottom: 10 }}>
              Email: benthompson@fakeemail.com
            </Text>
            <Text style={{ marginBottom: 10 }}>
              Phone: 12345678
            </Text>
            <Text style={{ marginBottom: 10 }}>
              City of residence: Copenhagen
            </Text>
            <Text style={{ marginBottom: 10 }}>
              Address: 123 Fake Street
            </Text>
            <Text style={{ marginBottom: 10 }}>
              Number of boats rented: 4
            </Text>
            <Button title='Edit Profile' />
          </Card>
        </View>

      </SafeAreaView >
    )
  }
}

export default Profile