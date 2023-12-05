import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Button, FAB } from 'react-native-paper';
import PocketBase from 'pocketbase';
import * as ImagePicker from 'expo-image-picker';
import Style from '../../GlobalStyleSheet/Style.js';

import { getID } from '../../utils/AuthService.js';

const AddBoat = ({ navigation }) => {

  const [boat, setBoat] = useState({
    boatTitle: '',
    boatBrand: '',
    boatPrice: 0,
    boatTopSpeed: 0,
    boatYear: 0,
    boatImage: null,
    dateStart: new Date(),
    dateEnd: new Date(),
    typeOfBoat: '',
    boatHarbour: '',
    boatLength: 0,
    boatOwner: '',
    boatDescription: '',
    boatLength: 0,
  });
  const [image, setImage] = useState(null);

  async function addBoatToPocketbase() {
    const pb = new PocketBase('https://pocketbaselucashunt.fly.dev');

    setBoat({ ...boat, boatOwner: await getID() })
    console.log(boat)
    try {
      await pb.collection('boatPosts').create(boat);

    } catch (error) {
      console.error('Error:', error);
    }
  }

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={Style.addBoatViewer1}>
      <Text style={Style.textAddBoat}>Upload billeder</Text>
      <FAB
        style={Style.fabButton}
        size="large"
        icon="plus"
        onPress={() => pickImage()}
      />
      <Text style={[Style.textAddBoat, {marginTop: 50}]}>Beskrivelse </Text>
      <TextInput
        style={[Style.textInputDescription, { width: '90%' }]}
        value={boat.boatImage}
        multiline={true}
        numberOfLines={4}
        maxLength={250} // Set the maximum number of characters allowed
        placeholder='Max 250 tegn'
        blurOnSubmit = {true}
        onChangeText={value => {
          if (value.length <= 250) { // Limit to 250 characters
            setBoat({ ...boat, boatImage: value });
          }
        }}
      />
      <Text style={[Style.textAddBoat, { marginTop: 20 }]}>Specifikationer</Text>
      <View style={Style.addBoatViewer2}>
        <View>
          <Text style={{ marginBottom: 12 }}>Længde: </Text>
          <Text style={{ marginBottom: 12 }}>Rum: </Text>
          <Text style={{ marginBottom: 12 }}>Antal bad: </Text>
          <Text style={{ marginBottom: 12 }}>Byggeår: </Text>
        </View>


        <View>
          <TextInput
            style={Style.textInput}
            value={boat.boatTitle}
            onChangeText={newValue => setBoat({ ...boat, boatTitle: newValue })}
          />
          <TextInput
            style={Style.textInput}
            value={boat.boatTitle}
            onChangeText={newValue => setBoat({ ...boat, boatTitle: newValue })}
          />
          <TextInput
            style={Style.textInput}
            value={boat.boatTitle}
            onChangeText={newValue => setBoat({ ...boat, boatTitle: newValue })}
          />
          <TextInput
            style={Style.textInput}
            value={boat.boatTitle}
            onChangeText={newValue => setBoat({ ...boat, boatTitle: newValue })}
          />
        </View>

        <View>
          <Text style={{ marginBottom: 12}}>Gummibåd: </Text>
          <Text style={{ marginBottom: 12}}>Styresystem: </Text>
          <Text style={{ marginBottom: 12}}>Tv: </Text>
          <Text style={{ marginBottom: 12}}>Model: </Text>
        </View>
        <View>
          <TextInput
            style={Style.textInput}
            value={boat.boatTitle}
            onChangeText={newValue => setBoat({ ...boat, boatTitle: newValue })}
          />
          <TextInput
            style={Style.textInput}
            value={boat.boatTitle}
            onChangeText={newValue => setBoat({ ...boat, boatTitle: newValue })}
          />
          <TextInput
            style={Style.textInput}
            value={boat.boatTitle}
            onChangeText={newValue => setBoat({ ...boat, boatTitle: newValue })}
          />
          <TextInput
            style={Style.textInput}
            value={boat.boatTitle}
            onChangeText={newValue => setBoat({ ...boat, boatTitle: newValue })}
          />
        </View>


        <View style={Style.addBoatViewerButton}>
        </View>
      </View>
      <Text style={Style.textAddBoat}>Beløb</Text>
      <TextInput
        style={{
          borderColor: '#4097ed',
          height: 30,
          width: "90%",
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 10,
          borderRadius: 10,
          marginRight: 10,
          fontSize: 24,
        }}
      />
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
  );
};

export default AddBoat;