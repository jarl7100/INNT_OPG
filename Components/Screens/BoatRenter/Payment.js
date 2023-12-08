import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";
import { useState, useEffect } from "react";
import { getID } from "../../utils/AuthService.js";
import PocketBase from "pocketbase";
import DateTimePicker from "@react-native-community/datetimepicker";
import LoadingScreen from "../LoadingScreen.js";

const Payment = ({ route }) => {
  const [loading, setLoading] = useState(false); // Create a new state variable called 'loading' and initialize it to true
  const { boatID } = route.params;
  const [weeks, setWeeks] = useState(1); // Create a new state variable called 'reservations' and initialize it to an empty array [
  const pb = new PocketBase("https://pocketbaselucashunt.fly.dev");
    const [cardnumber, setCardnumber] = useState("");
    const [cardholder, setCardholder] = useState("");
    const [expiration, setExpiration] = useState("");
    const [cvc, setCvc] = useState("");


  const navigation = useNavigation();
  const [boat, setBoat] = useState([]);
  async function getBoatInformation() {
    const record = await pb.collection("boatPosts").getOne(boatID);
    setBoat(record);
  }

async function makeReservation() {
    setLoading(true);
    const id = await getID();

    try {
        const user = await pb.collection("users").getOne(id);
        const name = user.firstName + " " + user.surname;

        
    
      
        const data = {
            startDate: dateStart,
            endDate: dateEnd,
            renter: id,
            owner: boat.boatOwner,
            renterName: name,
            boatName: boat.boatTitle,
            amount: boat.boatPrice * weeks || boat.boatPrice,
        };
        const record = await pb.collection("reservations").create(data);
        navigation.navigate("Resevations");
        setLoading(false);
    } catch (error) {
        console.error("Error:", error);
        setLoading(false);
    }
}

  useEffect(() => {
    getBoatInformation();
  }, []);

  const [dateStart, setDateStart] = useState(new Date());
  const [dateEnd, setDateEnd] = useState(new Date());

  function onChangeStartDate(event, selectedDate) {
    const currentDate = selectedDate;
    setDateStart(currentDate);
    const timeDiff = Math.abs(dateEnd.getTime() - dateStart.getTime());
    setWeeks(Math.ceil(timeDiff / (1000 * 60 * 60 * 24 * 7)))
  }
  function onChangeEndDate(event, selectedDate) {
    const currentDate = selectedDate;
    setDateEnd(currentDate);
    const timeDiff = Math.abs(dateEnd.getTime() - dateStart.getTime());
    setWeeks(Math.ceil(timeDiff / (1000 * 60 * 60 * 24 * 7)))
  }

  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
        <Text style={style.header}>Betalingsinformation</Text>

        <View
        style={{
            flexDirection: "row",
            marginLeft: 10,
            marginTop: 10,
           
            }}
        >
        <Text style={style.textTwo}>Kortholder</Text>
        <TextInput
            placeholder="Kortholder"
            style={style.input}
            value={cardholder}
            onChangeText={(newValue) => setCardholder(newValue)}
            />
        </View>
        <View
        style={{
            flexDirection: "row",
            marginLeft: 10,
            marginTop: 10,
       
            }}
        >
        <Text style={style.textTwo}>Kortnummer</Text>
        <TextInput
            placeholder="Kortnummer"
            style={style.input}
            value={cardnumber}
            onChangeText={(newValue) => setCardnumber(newValue)}
            />
        </View>

        <View
        style={{
            flexDirection: "row",
            marginLeft: 10,
            marginTop: 10,
          
            }}
        >
        <Text style={style.textTwo}>Udløbsdato</Text>
        <TextInput
            placeholder="Udløbsdato"
            style={style.input}
            value={expiration}
            onChangeText={(newValue) => setExpiration(newValue)}
            />
        </View>
        <View
        style={{
            flexDirection: "row",
            marginLeft: 10,
            marginTop: 10,
            marginBottom: 50,
           
            }}
        >
        <Text style={style.textTwo}>CVC</Text>
        <TextInput
            placeholder="CVC"
            style={style.input}
            value={cvc}
            onChangeText={(newValue) => setCvc(newValue)}
            />
        </View>

        <Text style={style.header}>Tilgængelighed</Text>
        <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: 10,
          alignItems: "center",
        }}
      >
        <Text style={style.text}>Fra</Text>
        <Text style={style.text}>{dateStart.toLocaleDateString()}</Text>
        </View>
        <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: 10,
          alignItems: "center",
          marginBottom: 50
        }}
      >
        <Text style={style.text}>Til</Text>
        <Text style={style.text}>{dateEnd.toLocaleDateString()}</Text>
        </View>


      <Text style={style.header}>Vælg datoer</Text>
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
        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
      <Text style={style.text}>Antal uger: {weeks}</Text>
      <Text style={style.header}>Total: {weeks * boat.boatPrice} kr.</Text>
      </View>
      <Button
        style={{
          borderRadius: 5,
          backgroundColor: "green",
          marginVertical: 20,
         
        }}
        mode="elevated"
        onPress={() => makeReservation()}
      >


        <Text style={{ fontSize: 14, color: "white", paddingVertical: 1 }}>
          Betal
        </Text>
      </Button>
      
      {loading ? <LoadingScreen /> : null}
    </View>
  );
};

const style = StyleSheet.create({
  text: {
    fontSize: 20,
   
    fontWeight: "300",
  },

  textTwo: {
    fontSize: 20,
    flex: 40,
    fontWeight: "300",
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
    
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
export default Payment;
