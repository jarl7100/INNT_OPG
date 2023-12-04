import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import LoadingScreen from '../LoadingScreen';
import PocketBase from 'pocketbase';
import { getID } from '../../utils/AuthService.js';
import { useNavigation } from '@react-navigation/native';

export default function YourReviews() {
    const navigation = useNavigation();
    const pb = new PocketBase('https://pocketbaselucashunt.fly.dev');
    const [reviews, setReviews] = useState([]);

    async function fetchReviews() {
        const id = await getID();
        try {
            const filter = `ownerID = '${id}'`;
            const data = await pb.collection('review').getList(1, 10, {
                sort: '-created',
                filter: filter,
            });
            console.log(data);
            setReviews(data.items); // Update the state with the 'items' property of the data object
        } catch (error) {
            console.error('Error fetching reviews:', error);
        }
    }

    useEffect(() => {
        fetchReviews();
    }, []);

    const renderItem = ({ item }) => (
        <View style={styles.reviewContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.description}>{item.reviewText}</Text>
            <Text style={styles.rating}>Rating: {item.reviewStars}</Text>
        </View>
    );

    return (
        <View>
            <Text>Your Reviews</Text>
            {reviews.length === 0 ? (
                <LoadingScreen />
            ) : (
                <FlatList
                    data={reviews}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    reviewContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#f2f2f2',
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        fontSize: 16,
        marginBottom: 5,
    },
    rating: {
        fontSize: 14,
        color: 'gray',
    },
});
