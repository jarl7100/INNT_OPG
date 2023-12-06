import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Button, FAB } from 'react-native-paper';
import PocketBase from 'pocketbase';

import Style from '../../GlobalStyleSheet/Style.js';

import { getID } from "../../utils/AuthService.js";

const AddBoat = ({ navigation }) => {

  //mangler datovælger
  const [boat, setBoat] = useState({
    boatTitle: "",
    boatBrand: "",
    boatPrice: 0,
    boatTopSpeed: 0,
    boatYear: 0,
    boatImage: null,
    dateStart: new Date(),
    dateEnd: new Date(),
    typeOfBoat: "sailboat",
    boatHarbour: "gilleleje",
    boatLength: 0,
    boatOwner: "",
    boatDescription: "",
    boatLength: 0,
    boatRooms: 0,
    boatBaths: 0,
    boatInflatableBoat: "",
    boatControlsystem: "",
  });


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
  return (
    <View style={Style.addBoatViewer1}>
      <Text style={Style.textAddBoat}>Upload billeder</Text>
      <FAB
        style={Style.fabButton}
        size="large"
        icon="plus"
        onPress={() => console.log('Pressed')}
      />
      <Text style={[Style.textAddBoat, {marginTop: 50}]}>Beskrivelse </Text>
      <TextInput
        style={[Style.textInputDescription, { width: "90%" }]}
        value={boat.boatDescription}
        multiline={true}
        numberOfLines={4}
        maxLength={250} // Set the maximum number of characters allowed
        placeholder='Max 250 tegn'
        onChangeText={value => {
          if (value.length <= 250) { // Limit to 250 characters
            setBoat({ ...boat, boatImage: value });
          }
        }}
      />
      <Text style={[Style.textAddBoat, { marginTop: 20 }]}>
        Specifikationer
      </Text>
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
            value={boat.boatLength}
            onChangeText={(newValue) =>
              setBoat({ ...boat, boatLength: newValue })
            }
          />
          <TextInput
            style={Style.textInput}
            value={boat.boatRooms}
            onChangeText={(newValue) =>
              setBoat({ ...boat, boatRooms: newValue })
            }
          />
          <TextInput
            style={Style.textInput}
            value={boat.boatBaths}
            onChangeText={(newValue) =>
              setBoat({ ...boat, boatBaths: newValue })
            }
          />
          <TextInput
            style={Style.textInput}
            value={boat.boatYear}
            onChangeText={(newValue) =>
              setBoat({ ...boat, boatYear: newValue })
            }
          />
        </View>

        <View>
          <Text style={{ marginBottom: 12 }}>Gummibåd: </Text>
          <Text style={{ marginBottom: 12 }}>Styresystem: </Text>
          <Text style={{ marginBottom: 12 }}>Tophastighed: </Text>
          <Text style={{ marginBottom: 12 }}>Model: </Text>
        </View>
        <View>
          <TextInput
            style={Style.textInput}
            value={boat.boatInflatableBoat}
            onChangeText={(newValue) =>
              setBoat({ ...boat, boatInflatableBoat: newValue })
            }
          />
          <TextInput
            style={Style.textInput}
            value={boat.boatControlsystem}
            onChangeText={(newValue) =>
              setBoat({ ...boat, boatControlsystem: newValue })
            }
          />
          <TextInput
            style={Style.textInput}
            value={boat.boatTopSpeed}
            onChangeText={(newValue) =>
              setBoat({ ...boat, boatTopSpeed: newValue })
            }
          />
          <TextInput
            style={Style.textInput}
            value={boat.boatBrand}
            onChangeText={(newValue) =>
              setBoat({ ...boat, boatBrand: newValue })
            }
          />
        </View>

        <View style={Style.addBoatViewerButton}></View>
      </View>
      <Text style={Style.textAddBoat}>Beløb</Text>
      <TextInput
        style={{
          borderColor: "#4097ed",
          height: 30,
          width: "90%",
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 10,
          borderRadius: 10,
          marginRight: 10,
          fontSize: 24,
        }}
        value={boat.boatPrice}
        onChangeText={(newValue) => setBoat({ ...boat, boatPrice: newValue })}
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
