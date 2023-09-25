import React, { Component } from 'react'
import {Image, ImageBackground, Linking, Platform, ScrollView, StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { Avatar, Button} from 'react-native-paper';
import { Card, Icon } from 'react-native-elements'

export class Profile extends Component {
  render() {
    return (
      <SafeAreaView  style={styles.container}>
        <View style={styles.container}>
        <ImageBackground style={{width: 430, height: 230, top: 0, borderRadius: 20 }} source={{ uri: 'https://www.un.org/sites/un2.un.org/files/field/image/2022/06/silas-baisch-oczvgbqcjky-unsplash.jpg'}} />
        <Image style={{width: 150, height: 150, top: -100, borderRadius: 400, borderWidth: 3, borderColor: '#fff' }} source={{ uri: 'https://cdn.denisonyachtsales.com/wp-content/uploads/2022/08/Denison-Team-Member-Website-Profile-Headshot-210-Tom-Robertson.png'}} />
        <Text style={{fontSize: 30, fontWeight: 'bold', top: -100}}>Ben Thompson</Text>
        <Text style={{fontSize: 20, top: -100}}>Boat Renter</Text>
        </View>

        <Card>
        <Card.Title h5>Profile details</Card.Title>
        <Card.Divider />
        <Text style={{fontSize: 15, top: 10}}></Text>
        <Text style={{fontSize: 20, fontWeight: 'bold', top: 20}}>

        </Text>
        </Card>
      </SafeAreaView >
    )
  }
}

export default Profile

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#fff',
        flex: 1,
    },
});