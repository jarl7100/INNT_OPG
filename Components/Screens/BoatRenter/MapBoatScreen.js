import { Text, FlatList, Alert, SafeAreaView, View, StyleSheet } from "react-native";
import { Button, Card } from 'react-native-paper';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Pocketbase from 'pocketbase';
import Style from '../../GlobalStyleSheet/Style.js';

const MapBoatScreen = ({ route }) => {
    const { harborName } = route.params;
    const [boats, setBoats] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        fetchBoats();
    }, [])

    const fetchBoats = async () => {
        const pb = new Pocketbase('https://pocketbaselucashunt.fly.dev');
        const data = await pb.collection('boatPosts').getList(1, 10, {
            sort: 'created',
            filter: `boatHarbour = "${harborName}"` 
        });
        console.log(data.items);
        setBoats(data.items);
    }

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
        <View style={Style.container}>
            <Text style={{ fontSize: 24, fontWeight: 'bold',}}>{harborName}</Text>
            {/* Her laver vi en flatlist som viser alle bådene i databasen */}
            <FlatList
            style={Style.flatListCards}
                data={boats}
                renderItem={BoatCards}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default MapBoatScreen;
