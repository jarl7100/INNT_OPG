import { SafeAreaView, TextInput, Button, Text } from "react-native";
import React, { useState } from "react";
import Slider from '@react-native-community/slider';
import PocketBase from 'pocketbase';
import { getID } from "../../utils/AuthService";
import { useNavigation } from "@react-navigation/native";



export default function CreateReview() {
    const navigation = useNavigation();
    const pb = new PocketBase('https://pocketbaselucashunt.fly.dev');
    const [reviewText, setReviewText] = useState("");
    const [rating, setRating] = useState(3); // Default rating is 3

    async function handleReviewSubmit () {
        const id = await getID();
        const boatOwner = await pb.collection('users').getOne(id);
      
        //OBS ownerID skal laves om fra HARDCODED
        const data = {
            "name": boatOwner.firstName + " " + boatOwner.surname,
            "ownerID": "viyj33oq7d5dqj1",
            "reviewText": reviewText,
            "reviewStars": rating,
        };
        
       await pb.collection('review').create(data);
         navigation.navigate('Map');
    };

    return (
        <SafeAreaView>
            <TextInput
                placeholder="Write your review"
                value={reviewText}
                onChangeText={(text) => setReviewText(text)}
                multiline
                style={{ height: 200, padding: 10, backgroundColor: "#fff" }}
            />

            <Slider
                minimumValue={1}
                maximumValue={5}
                step={1}
                value={rating}
                onValueChange={(value) => setRating(value)}
            />
            <Text>Rating: {rating}</Text>

            <Button title="Submit" onPress={handleReviewSubmit} />
        </SafeAreaView>
    );
}
