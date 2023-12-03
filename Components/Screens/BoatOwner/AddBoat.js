import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Button, FAB } from 'react-native-paper';
import PocketBase from 'pocketbase';

import Style from '../../GlobalStyleSheet/Style.js';

import { getID } from '../../utils/AuthService.js';

const AddBoat = ({ navigation }) => {
  
  const [boat, setBoat] = useState({
    boatTitle: 'test',
    boatBrand: 'test',
    boatPrice: 200,
    boatTopSpeed: 75,
    boatYear: 2000,
    boatImage: null,
    dateStart: new Date(),
    dateEnd: new Date(),
    typeOfBoat: 'sailboat',
    boatHarbour: 'gilleleje',
    boatLength: 0,
    boatOwner: '',
    boatDescription: 'test12321',
    boatLength: 20,
  });

 
 async function addBoatToPocketbase(){
  const pb = new PocketBase('https://pocketbaselucashunt.fly.dev');

  setBoat({...boat, boatOwner: await getID()})
    console.log(boat)
  
  try {
   

   
    await pb.collection('boatPosts').create(boat);
      
         } catch (error) {
        console.error('Error:', error);
      
      }
        
}
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
              addBoatToPocketbase();
            }}
          >
            {<Text style={Style.addBoatButtonText}> Add Boat </Text>}
          </Button>
        </View>
      </View>
    </View>
  );
};

export default AddBoat;