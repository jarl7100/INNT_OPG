import { StyleSheet, Text, View, ScrollView, FlatList, Alert, SafeAreaView } from "react-native";
import { Avatar, Button, Card } from 'react-native-paper';
import * as React from "react";
import app from "../FirebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { db } from '../FirebaseConfig';
import { useState, useEffect } from 'react';


function BoatsScreen() {
    const fetchBoats = async () => {

        await getDocs(collection(db, "boats"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setBoats(newData);
            })

    }
    const [boats, setBoats] = useState([]);
    useEffect(() => {
        fetchBoats();
    }, [])

    let BoatCards = ({ item }) => {
        return (
            <Card style={{padding: 5, margin:5}}>
                <Card.Title title={item.title} />
                <Card.Cover style={{paddingBottom: 5}} source={{ uri: item.imageUrl }} />
                <Card.Content>
                    <Text style={{ fontSize: 15, paddingBottom: 5 }}>Price: {item.price} kr./Day</Text>
                    <Button mode="contained" buttonColor="#4f4bfa" onPress={() => 
                        Alert.alert(' Name of boat: ' + item.title + '\n' + "Price: " + item.price + " kr. per day " + '\n' + " Brand: " + item.brand + '\n' + " Top Speed: " + item.topSpeed + "km/h" + '\n' + "Model Year: " + item.year )}> 
                        Learn more 
                        </Button>
                </Card.Content>
            </Card>
        )
    };
    return (
        <SafeAreaView contentContainerStyle={styles.container}>
            <FlatList
            style={styles.card}
                data={boats}
                renderItem={BoatCards}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    );
}

export default BoatsScreen

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    card:
    {
        padding: 5,
        width: '95%',
        margin: 10,
    },
    text: {
        justifyContent: 'center',
        fontSize: 20,
    },
});