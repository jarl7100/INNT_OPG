import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import PocketBase from "pocketbase";
import { Button, FAB } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";


import Style from "../../GlobalStyleSheet/Style.js";

const UpdateBoatPost = ({ route }) => {
    const navigation = useNavigation();
  const pb = new PocketBase("https://pocketbaselucashunt.fly.dev");
  const [boat, setBoat] = useState([]);
  const { boatID } = route.params;
  

  async function getBoatInformation() {
    const filter = `id = '${boatID}'`;
    try {
      const data = await pb.collection("boatPosts").getFirstListItem(filter);
      setBoat(data);
      
    } catch (error) {
      console.error("Error:", error);
    }
  }

    async function updateBoatPost() {
        const record = await pb.collection('boatPosts').update(boatID, boat);
       
        navigation.navigate("Profile");
    }

  useEffect(() => {
    getBoatInformation();
  }, []);
  return (
<View>
      <Text style={[Style.textAddBoat, { marginTop: 10 }]}>Generelt </Text>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <Text>Title:</Text>
        <TextInput
          style={Style.textInput}
          value={boat.boatTitle}
          onChangeText={(newValue) => setBoat({ ...boat, boatTitle: newValue })}
        />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <Text>Båd type:</Text>
        <TextInput
          style={Style.textInput}
          value={boat.boatHarbour}
          onChangeText={(newValue) => setBoat({ ...boat, boatHarbour: newValue })}
        />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <Text>Båd havn:</Text>
        <TextInput
          style={Style.textInput}
          value={boat.typeOfBoat}
          onChangeText={(newValue) => setBoat({ ...boat, typeOfBoat: newValue })}
        />
      </View>

      <Text style={[Style.textAddBoat, { marginTop: 50 }]}>Beskrivelse </Text>
      <TextInput
        style={[Style.textInputDescription, { width: "90%" }]}
        value={boat.boatDescription}
        multiline={true}
        numberOfLines={4}
        maxLength={250} // Set the maximum number of characters allowed
        placeholder="Max 250 tegn"
        onChangeText={(value) => {
          if (value.length <= 250) {
            // Limit to 250 characters
            setBoat({ ...boat, boatDescription: value });
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
          updateBoatPost()
        }}
      >
        {<Text style={Style.addBoatButtonText}> Opdater bådoopslag </Text>}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});

export default UpdateBoatPost;
