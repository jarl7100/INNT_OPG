import * as React from "react";
import { Text, FlatList, Alert, SafeAreaView, View } from "react-native";
import { Button, Card } from 'react-native-paper';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import { collection, getDocs } from "firebase/firestore";
import { db } from '../../FirebaseConfig';

import Style from '../GlobalStyleScheet/Style.js';

// Her importerer vi alle bådene fra firestore databasen
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
    
    const navigation = useNavigation();

    let BoatCards = ({ item }) => {
        return (
            // Her Laver vi et kort til hver båd i databasen fra firestore
            <Card style={{padding: 5, margin:5}}>
                <Card.Title title={item.boatTitle} />
                <Card.Cover style={{paddingBottom: 5}} source={{ uri: item.boatImage }} />
                <Card.Content>
                    <Text style={{ fontSize: 15, paddingBottom: 5 }}>Price: {item.boatPrice} kr./Day</Text>
                    <Button mode="contained" buttonColor="#4f4bfa" onPress={() => 
                        Alert.alert(
                    'Name of boat:' + item.boatTitle + '\n' + "Price: " + item.boatPrice + " kr. per day " + '\n' + " Brand: " + item.boatBrand + '\n' + " Top Speed: " + item.boatTopSpeed + "km/h" + '\n' + "Model Year: " + item.boatYear )}> 
                        Learn more 
                        </Button>
                </Card.Content>
            </Card>
        )
    };
    return (
        <View>
        <SafeAreaView contentContainerStyle={Style.container}>
            {/* Her laver vi en flatlist som viser alle bådene i databasen */}
            <FlatList
            style={Style.card}
                data={boats}
                renderItem={BoatCards}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
        </View>
    );
}

export default BoatsScreen