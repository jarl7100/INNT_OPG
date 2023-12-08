import * as React from "react";
import { Text, FlatList, Alert, SafeAreaView, View } from "react-native";
import { Button, Card } from 'react-native-paper';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import { collection, getDocs } from "firebase/firestore";
import { db } from '../../../FirebaseConfig';

import Style from '../../GlobalStyleSheet/Style.js';

// Her importerer vi alle bådene fra firestore databasen
function BoatsScreen() {
    const navigation = useNavigation();
    const fetchBoats = async () => {

        // Her henter vi alle bådene fra firestore databasen
        await getDocs(collection(db, "boats"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setBoats(newData);
            })

    }
    // Her laver vi en useState som vi bruger til at gemme alle bådene i
    const [boats, setBoats] = useState([]);
    useEffect(() => {
        fetchBoats();
    }, [])
    

    let BoatCards = ({ item }) => {
        return (
            // Her Laver vi et kort til hver båd i databasen fra firestore
            <Card style={Style.boatCard} onPress={() => navigation.navigate("Boat Post Renter")}>

                {/* Her viser vi informationen som hentes fra Firebase i et "Card" */}
                <Card.Title title={item.boatTitle} />
                <Card.Cover style={Style.boatCardImage} source={{ uri: item.boatImage }} />
                <Card.Content>
                    <Text style={Style.boatCardText}>Price: {item.boatPrice} kr./Day</Text>

                       {/* Her gives der lidt mere information om båden fra firebase*/}
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
            style={Style.flatListCards}
                data={boats}
                renderItem={BoatCards}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
        </View>
    );
}

export default BoatsScreen