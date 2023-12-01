import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// homescreen for boat owener// homescreen for boat owner


const HomeScreenBoatOwner = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the Home Screen!</Text>
            <Text style={styles.subtitle}>This is a demo page for boat owners.</Text>
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
    subtitle: {
        fontSize: 18,
        color: 'gray',
    },
});

export default HomeScreenBoatOwner;
