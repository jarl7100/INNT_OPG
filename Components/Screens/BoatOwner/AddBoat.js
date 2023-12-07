import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, StyleSheet, KeyboardAvoidingView } from "react-native";
import { Button, FAB } from "react-native-paper";
import PocketBase from "pocketbase";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";


// ...



import { getID } from "../../utils/AuthService.js";

const AddBoat = ({ navigation }) => {

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
    boatInflatableBoat: true,
    boatControlsystem: "",
  });

  

  const [dateStart, setDateStart] = useState(new Date());
  const [dateEnd, setDateEnd] = useState(new Date());

  function onChangeStartDate(event, selectedDate) {
    const currentDate = selectedDate;
    setDateStart(currentDate);
  }
  function onChangeEndDate(event, selectedDate) {
    const currentDate = selectedDate;
    setDateEnd(currentDate);
  }

  async function addBoatToPocketbase() {
    const pb = new PocketBase("https://pocketbaselucashunt.fly.dev");
    const id = await getID();
    console.log(id);
    setBoat(
      (boat.boatOwner = id),
      (boat.dateStart = dateStart),
      (boat.dateEnd = dateEnd)
    );
    console.log(boat);

    try {
      await pb.collection("boatPosts").create(boat);
      navigation.navigate("Profile");
    } catch (error) {
      console.error("Error:", error);
    }
  }

  
  return (
    <KeyboardAvoidingView
    keyboardVerticalOffset={100}
    behavior="padding"
    style={{ flex: 1, backgroundColor: "white" }}
    enabled>
     <ScrollView
        contentContainerStyle={{ padding: 20, backgroundColor: "white" }}
        keyboardShouldPersistTaps="handled"
      >
      <Text style={style.header}>Generelt</Text>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}
      >
        <Text style={style.text}>Navn</Text>
        <TextInput
          placeholder="Navn"
          style={style.input}
          value={boat.boatTitle}
          onChangeText={(newValue) => setBoat({ ...boat, boatTitle: newValue })}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={style.text}>Bådtype</Text>
        <Picker
          style={{ width: 200 }}
          selectedValue={boat.typeOfBoat}
          onValueChange={(itemValue, itemIndex) =>
            setBoat({ ...boat, typeOfBoat: itemValue })
          }
          itemStyle={{ fontSize: 20 }}
        >
          <Picker.Item label="Sejlbåd" value="sailboat" />
          <Picker.Item label="Speedbåd" value="speedboat" />
        </Picker>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={style.text}>Havn</Text>
        <Picker
          style={{ width: 200 }}
          selectedValue={boat.boatHarbour}
          onValueChange={(itemValue, itemIndex) =>
            setBoat({ ...boat, boatHarbour: itemValue })
          }
          itemStyle={{ fontSize: 20 }}
        >
          <Picker.Item label="Gilleleje" value="gilleleje" />
          <Picker.Item label="Skagen" value="skagen" />
        </Picker>
      </View>

      <View style={{ marginBottom: 100 }}>
        <Text style={style.header}>Beskrivelse</Text>
        <TextInput
          style={{
            height: 150,
            borderColor: "#4097ed",
            borderWidth: 1,
            borderRadius: 5,
            paddingLeft: 5,
            marginTop: 5,
          }}
          value={boat.boatDescription}
          multiline={true}
          numberOfLines={4}
          blurOnSubmit={true}
          placeHolder="Max 250 tegn"
          maxLength={250} // Set the maximum number of characters allowed
          placeholder="Max 250 tegn"
          onChangeText={(value) => {
            if (value.length <= 250) {
              // Limit to 250 characters
              setBoat({ ...boat, boatDescription: value });
            }
          }}
        />
      </View>

      <Text style={style.header}>Detaljer</Text>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}
      >
        <Text style={style.text}>Længde</Text>
        <TextInput
          placeholder="Bådens længde i fod"
          style={style.input}
          value={boat.boatLength}
          onChangeText={(newValue) => setBoat({ ...boat, boatLength: newValue })}
        />
      </View>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 30 }}
      >
        <Text style={style.text}>Rum</Text>
        <TextInput
          placeholder="Antallet af rum"
          style={style.input}
          value={boat.boatRooms}
          onChangeText={(newValue) => setBoat({ ...boat, boatRooms: newValue })}
        />
      </View>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 30 }}
      >
        <Text style={style.text}>Toiletter</Text>
        <TextInput
          placeholder="Antal toiletter"
          style={style.input}
          value={boat.boatBaths}
          onChangeText={(newValue) => setBoat({ ...boat, boatBaths: newValue })}
        />
      </View>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 30 }}
      >
        <Text style={style.text}>Byggeår</Text>
        <TextInput
          placeholder="Årstallet båden er bygget"
          style={style.input}
          value={boat.boatYear}
          onChangeText={(newValue) => setBoat({ ...boat, boatYear: newValue })}
        />
      </View>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 30 }}
      >
        <Text style={style.text}>Styresystem</Text>
        <TextInput
          placeholder="Styresystem"
          style={style.input}
          value={boat.boatControlsystem}
          onChangeText={(newValue) => setBoat({ ...boat, boatControlsystem: newValue })}
        />
      </View>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 30 }}
      >
        <Text style={style.text}>Tophastighed</Text>
        <TextInput
          placeholder="Tophastighed i knob"
          style={style.input}
          value={boat.boatTopSpeed}
          onChangeText={(newValue) => setBoat({ ...boat, boatTopSpeed: newValue })}
        />
      </View>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 30 }}
      >
        <Text style={style.text}>Model</Text>
        <TextInput
          placeholder="Model"
          style={style.input}
          value={boat.boatBrand}
          onChangeText={(newValue) => setBoat({ ...boat, boatBrand: newValue })}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={style.text}>Gummibåd</Text>
        <Picker
          style={{ width: 200 }}
          selectedValue={boat.boatInflatableBoat}
          onValueChange={(itemValue, itemIndex) =>
            setBoat({ ...boat, boatInflatableBoat: itemValue })
          }
          itemStyle={{ fontSize: 20 }}
        >
          <Picker.Item label="Ja" value="true" />
          <Picker.Item label="Nej" value="false" />
        </Picker>
      </View>

      <Text style={style.header}>Datoer</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: 10,
          alignItems: "center",
        }}
      >
        <Text style={style.text}>Start dato</Text>
        <DateTimePicker
          value={dateStart}
          mode={"date"}
          is24Hour={true}
          onChange={onChangeStartDate}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: 10,
          alignItems: "center",
          marginBottom: 50,
        }}
      >
        <Text style={style.text}>Slut dato</Text>
        <DateTimePicker
          value={dateEnd}
          mode={"date"}
          is24Hour={true}
          onChange={onChangeEndDate}
        />
      </View>

      
      <Text style={style.header}>Pris pr. Uge</Text>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 10, marginBottom: 75 }}
      >
        
        <Text style={style.text}>Pris</Text>
        <TextInput
          placeholder="Pris i kr."
          style={style.input}
          value={boat.boatPrice}
          onChangeText={(newValue) => setBoat({ ...boat, boatPrice: newValue })}
        />
      </View>

      <Button
        style={{
          borderRadius: 5,
          backgroundColor: "#4097ed",
          
          
        }}
        mode="elevated"
        onPress={() => {
          addBoatToPocketbase();
        }}
      >
        <Text style={{fontSize: 20, color: "white", paddingVertical: 5}}>Opret opslag</Text>
      
      </Button>

    </ScrollView>
    </KeyboardAvoidingView>
  );
};

const style = StyleSheet.create({
  text: {
    fontSize: 20,
    flex: 40,
    fontWeight: "300",
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: -10,
  },
  input: {
    borderColor: "#4097ed",
    width: 90,
    borderBottomWidth: 1,
    flex: 60,
    paddingLeft: 5,
    height: 30,
  },
});

export default AddBoat;

{
  
}
