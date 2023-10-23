import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Button, FAB } from 'react-native-paper';
import Style from '../GlobalStyleScheet/Style.js';
import { db } from '../../FirebaseConfig';
import { collection, addDoc} from 'firebase/firestore';

const AddBoat = ({ navigation }) => {
  const [boat, setBoat] = useState({
    boatTitle: '',
    boatBrand: '',
    boatPrice: '',
    boatTopSpeed: '',
    boatYear: '',
    boatImage: ''
  });

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
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
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
      <View style={{ width: '100%', paddingHorizontal: 20, alignItems: 'center', flex: 1, justifyContent: 'center' }}>
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
        <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: 20 }}>
          <Button 
            style={{ width: '80%' }} 
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