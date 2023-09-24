import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Avatar, Button, Card } from 'react-native-paper';
import * as React from "react";
import app from "../FirebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import {db} from '../FirebaseConfig';
import { useState,useEffect } from 'react';
 
  
 
   
   
   

function BoatsScreen() {
    const fetchBoats = async () => {
       
        await getDocs(collection(db, "boats"))
            .then((querySnapshot)=>{               
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setBoats(newData);                
                console.log(boats, newData);
            })
       
    }
    const [boats, setBoats] = useState([]);
    useEffect(()=>{
        fetchBoats();
    }, [])

    return (
        <ScrollView contentContainerStyle={styles.container}>
            
            <Card style={styles.card} onPress={() => null}>
            <Card.Title title="Grand Yacht"/>
                <Card.Cover style={styles.cardcontent} source={{ uri: 'https://iqboatlifts.com/wp-content/uploads/2018/06/Yacht-vs-Boat-Whats-the-Difference-Between-the-Two-1024x571.jpg' }} />
                <Card.Content>
                    <Text style={{fontSize: 15, padding: 10}}>Price: 10.000 kr./Day</Text>
                </Card.Content>
            </Card>
 
            <Card style={styles.card}>
            <Card.Title title="Speed Boat"/>
                <Card.Cover style={styles.cardcontent} source={{ uri: 'https://features.boats.com/boat-content/files/2023/08/Screen-Shot-2023-08-17-at-2.25.03-PM.png?w=450&h=450' }} />
                <Card.Content>
                    <Text style={{fontSize: 15, padding: 10}}>Price: 1000 kr./Day</Text>
                </Card.Content>
            </Card>

            <Card style={styles.card}>
            <Card.Title title="Billionair Class"/>
                <Card.Cover style={styles.cardcontent} source={{ uri: 'https://images.boatsgroup.com/resize/1/94/31/7919431_20210907033259992_1_XLARGE.jpg' }} />
                <Card.Content>
                    <Text style={{fontSize: 15, padding: 10}}>Price: 100.000 kr./Day</Text>
                </Card.Content>
            </Card>
        </ScrollView>
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
        width: '90%',
        margin: 10,
    },
    text: {
        justifyContent: 'center',
        fontSize: 20,
    },
});