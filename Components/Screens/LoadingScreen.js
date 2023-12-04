import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

//Denne komponent bruges hver gang der er Async data, hvor den vises indtil daten er hentet
const LoadingScreen = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#0000ff" />
     
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

});

export default LoadingScreen;

