import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BoatPostRenter = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Boat Post Renter</Text>
      {/* Add your components and logic here */}
        <Button title="Go to Payment" onPress={() => navigation.navigate("Payment")} />
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

export default BoatPostRenter;
