import { SafeAreaView, TextInput, Button, Text, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import Slider from '@react-native-community/slider';
import PocketBase from 'pocketbase';
import { getID } from "../../utils/AuthService";
import { useNavigation } from "@react-navigation/native";


//Denne skærm er til at brugeren kan oprette en anmeldelse af en båd
export default function CreateReview({ route }) {
    const navigation = useNavigation();
    const pb = new PocketBase('https://pocketbaselucashunt.fly.dev');
    const [reviewText, setReviewText] = useState("");
    const [rating, setRating] = useState(3); // Default rating is 3

    //Henter bådens ejers id fra navigationen
    const { owner } = route.params;

    //Opretter anmeldelsen i pocketbase databasen når brugeren klikker på anmeld knappen
    async function handleReviewSubmit () {
        const id = await getID();
        const boatOwner = await pb.collection('users').getOne(id);
      
        
        const data = {
            "name": boatOwner.firstName + " " + boatOwner.surname,
            "ownerID": owner,
            "reviewText": reviewText,
            "reviewStars": rating,
        };
        
       await pb.collection('review').create(data);
         navigation.navigate('Map');
    };

    return (
        <SafeAreaView style={{padding: 10, flex: 1, backgroundColor: "white"}}>
            <View style={{margin: 20}}>
            <TextInput
                placeholder="Skriv anmeldelse"
                value={reviewText}
                onChangeText={(text) => setReviewText(text)}
                multiline
                style={{ height: 200, backgroundColor: "#fff", borderRadius: 5, paddingLeft: 5, borderColor: "#4097ed", borderWidth: 1 }}
            />

            <Slider
                minimumValue={1}
                maximumValue={5}
                step={1}
                value={rating}
                onValueChange={(value) => setRating(value)}
            />
            <Text style={style.text}>Rating: {rating} ⭐️</Text>

            <Button title="Anmeld" onPress={handleReviewSubmit} />
            </View>
        </SafeAreaView>
    );
}
const style = StyleSheet.create({
    text: {
      fontSize: 20,
    
      fontWeight: "300",
    },
    header: {
      fontSize: 25,
      fontWeight: "bold",
    },
  });
  