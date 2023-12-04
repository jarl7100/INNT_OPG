import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, Pressable, FlatList } from 'react-native';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { getID } from '../../utils/AuthService.js';
import PocketBase from 'pocketbase';
import LoadingScreen from '../LoadingScreen.js';

const YourReservation = () => {
  const [reservations, setReservations] = useState([]); // Create a new state variable called 'reservations' and initialize it to an empty array [
  const pb = new PocketBase('https://pocketbaselucashunt.fly.dev');

  const navigation = useNavigation();

  function navigateToCommunication(renterID, ownerID) {
    
    

    navigation.navigate('Communication', { renter: renterID, owner: ownerID });
  }

  async function getReservations () {
    const id = await getID();
    const filter = `owner = '${id}'`;
    const data = await pb.collection('reservations').getList(1, 10, {
        sort: 'startDate',
        filter: filter,
    });
    if(data.items.length === 0) {
      setReservations([{"id": "1", "renterName": "No reservations yet", "startDate": "", "endDate": ""}]);
    } else {
    setReservations(data.items);
    }
  }

  useEffect(() => {
    getReservations();
  }, []);


  const renderItem = ({ item }) => {
    const endDate = new Date(item.endDate);
    const startDate = new Date(item.startDate);
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    const endDateString = endDate.toLocaleDateString('da-DK', options);
    const startDateString = startDate.toLocaleDateString('da-DK', options);
  return (
    <View>
  
  <Card style={styles.Card}>
    <Card.Content>
      <Text style={styles.text}>🗿Person: {item.renterName}</Text>
    <Text style={styles.text}>🗓️Start: {startDateString}</Text>
      <Text style={styles.text}>🗓️End: {endDateString}</Text> 
    </Card.Content>
    <Card.Actions style={styles.Actions}>
    <Pressable style={styles.Button} onPress={() => navigateToCommunication(item.renter, item.owner)}>
      <Text style={styles.text2}>Contact The Renter</Text>
    </Pressable>
    </Card.Actions>
  </Card>
  </View>
)}


  return (
    <View style={styles.container}>

        {reservations.length === 0 ? (
                <LoadingScreen />
            ) : (
                <FlatList
                    data={reservations}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                />
            )}

      

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  Card: {
    alignSelf: 'center',
    width: "85%",
    backgroundColor: '#fff',
    marginBottom: 20,
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 30,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 13,
    textAlign: 'center', // Add this line to center the text
  },
  Actions: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  Button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingVertical: 8,
    borderRadius: 12,
    elevation: 3,
    backgroundColor: '#4097ed',
  },
  text2: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
  },
});

export default YourReservation;
