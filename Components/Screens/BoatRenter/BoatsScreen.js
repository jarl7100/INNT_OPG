import * as React from "react";
import { Text, FlatList, Alert, SafeAreaView, View, StyleSheet } from "react-native";
import { Button, Card } from 'react-native-paper';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Pocketbase from 'pocketbase';
import Style from '../../GlobalStyleSheet/Style.js';


function BoatsScreen() {
    const navigation = useNavigation();
    const fetchBoats = async () => {

        const pb = new Pocketbase('https://pocketbaselucashunt.fly.dev');
        const data = await pb.collection('boatPosts').getList(1, 10, {
            sort: 'created',
        });
        setBoats(data.items);

    }

    const [boats, setBoats] = useState([]);
    useEffect(() => {
        fetchBoats();
    }, [])
    

    let BoatCards = ({ item }) => {
        return (

            <Card style={Style.boatCard} onPress={() => navigation.navigate("Boat Post Renter", { boatID: item.id })}>

        
                <Card.Title  title={item.boatTitle}/>
                <Card.Cover style={Style.boatCardImage} source={{ uri: "https://scdn.malibuboats.dev/cdn.pursuitboats.com/images/HomeNews/WOUNDER-70.webp" }} />
                <Card.Content>
                    <Text style={Style.boatCardText}>Pris: {item.boatPrice} kr./Dag</Text>

            
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

const style = StyleSheet.create({
    text: {
      fontSize: 20,
      flex: 40,
      fontWeight: "300",
    },
    header: {
      fontSize: 25,
      fontWeight: "bold",
      
    },
    input: {
      borderColor: "#4097ed",
      width: 90,
      borderBottomWidth: 1,
      flex: 60,
      paddingLeft: 5,
      height: 30,
    },
  });

export default BoatsScreen