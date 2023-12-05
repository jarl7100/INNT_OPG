import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-paper';
import BoatImage from '../../../assets/_a9353717-061c-455a-860e-c8845db39c85.jpeg';
import { useNavigation } from '@react-navigation/native';

import Style from '../../GlobalStyleSheet/Style';

const StartScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image source={BoatImage} style={{ width: 250, height: 200 }} />
            <Text style={styles.title}>B O A T</Text>
            <Text style={styles.subtitle}>Best Of All Time</Text>
            <View>
                <Button
                    mode="contained"
                    onPress={() => navigation.navigate('Opret profil')}
                    style={[Style.profileEditbutton, {width: 300, marginTop: 30}]}
                >
                    Opret Profil
                </Button>
                <Button
                    mode="contained"
                    onPress={() => navigation.navigate('Log Ind')}
                    style={[Style.profileEditbutton, {marginTop: 15}]}
                >
                    Log Ind
                </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 15,
    color: 'gray',
  },
});

export default StartScreen;
