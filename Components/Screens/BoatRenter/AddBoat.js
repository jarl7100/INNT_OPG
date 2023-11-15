import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Button, FAB } from 'react-native-paper';

import { db } from '../../../FirebaseConfig';
import { collection, addDoc} from 'firebase/firestore';

import Style from '../../GlobalStyleSheet/Style.js';

const AddBoat = ({ navigation }) => {
  const [boat, setBoat] = useState({
    boatTitle: '',
    boatBrand: '',
    boatPrice: '',
    boatTopSpeed: '',
    boatYear: '',
    boatImage: ''
  });

  /**
   * A function that adds a new boat to the database if all required fields are filled out.
   */
  const addBoatFunction = () => {
    if (Object.values(boat).every(value => value.length > 0)) {
      addDoc(collection(db, "boats"), boat)
        .then(() => {
          console.log("Document successfully written!");
          setBoat({
            boatTitle: '',
            boatBrand: '',
            boatPrice: '',
            boatTopSpeed: '',
            boatYear: '',
            boatImage: ''
          });
        })
        .catch((error) => console.error("Error writing document: ", error));
    }
  };

  return (
    <View style={Style.addBoatViewer1}>
      <Text style={Style.textAddBoat}>Add pictures of the Boat from your gallary </Text>
      <FAB
        style={Style.fabButton}
        size="large"
        icon="plus"
        onPress={() => console.log('Pressed')}
      />
      <Text style={Style.textAddBoat}>Or add a image URL </Text>
      <TextInput
        style={[Style.textInput, { width: '90%' }]}
        value={boat.boatImage}
        onChangeText={value => setBoat({...boat, boatImage: value})}
        placeholder="Boat Image URL"
      />
      <View style={Style.addBoatViewer2}>
        <TextInput
          style={Style.textInput}
          value={boat.boatTitle}
          onChangeText={newValue => setBoat({...boat, boatTitle: newValue})}
          placeholder="Boat Title"
        />
        <TextInput
          style={Style.textInput}
          value={boat.boatBrand}
          onChangeText={newValue => setBoat({...boat, boatBrand: newValue})}
          placeholder="Boat Brand"
        />
        <TextInput
          style={Style.textInput}
          value={boat.boatPrice}
          onChangeText={newValue => setBoat({...boat, boatPrice: newValue})}
          placeholder="Boat Price"
        />
        <TextInput
          style={Style.textInput}
          value={boat.boatTopSpeed}
          onChangeText={newValue => setBoat({...boat, boatTopSpeed: newValue})}
          placeholder="Boat Top Speed"
        />
        <TextInput
          style={Style.textInput}
          value={boat.boatYear}
          onChangeText={newValue => setBoat({...boat, boatYear: newValue})}
          placeholder="Boat Year"
        />
        <View style={Style.addBoatViewerButton}>
          <Button 
            style={Style.addBoatButton} 
            mode="elevated"
            onPress={() => {
              addBoatFunction();
              navigation.navigate("Boats");
            }}
          >
            Post
          </Button>
        </View>
      </View>
    </View>
  );
};

export default AddBoat;