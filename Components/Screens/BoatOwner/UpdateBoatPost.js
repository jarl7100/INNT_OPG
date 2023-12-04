import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// Update boat post
const UpdateBoatPost = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Update Boat Post</Text>
            {/* Add your code here */}
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
        marginBottom: 16,
    },
});

export default UpdateBoatPost;
