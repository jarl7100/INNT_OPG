import React from 'react';
import { View, Text, StyleSheet, Button, Pressable } from 'react-native';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const YourReservation = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>April</Text>
      <Card style={styles.Card}>
        <Card.Content>
          <Text style={styles.text}>🗿Person</Text>
          <Text style={styles.text}t>🗓️Reservation</Text>
        </Card.Content>
        <Card.Actions style={styles.Actions}>
        <Pressable style={styles.Button} onPress={() => navigation.navigate("Communication")}>
          <Text style={styles.text2}>Contact The Renter</Text>
        </Pressable>
        </Card.Actions>
      </Card>
      </View>
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
