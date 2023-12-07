import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import { Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { getID } from "../../utils/AuthService.js";
import PocketBase from "pocketbase";
import LoadingScreen from "../LoadingScreen.js";
import { Button } from "react-native-paper";

const YourReservation = () => {
  const [loading, setLoading] = useState(true); // Create a new state variable called 'loading' and initialize it to true
  const [reservations, setReservations] = useState([]); // Create a new state variable called 'reservations' and initialize it to an empty array [
  const pb = new PocketBase("https://pocketbaselucashunt.fly.dev");

  const navigation = useNavigation();

  function navigateToCommunication(renterID, ownerID) {
    navigation.navigate("Communication", { renter: renterID, owner: ownerID });
  }

  async function getReservations() {
    const id = await getID();
    const filter = `owner = '${id}'`;
    const data = await pb.collection("reservations").getList(1, 10, {
      sort: "startDate",
      filter: filter,
    });
    if (data.items.length === 0) {
      setReservations([
        {
          id: "1",
          renterName: "No reservations yet",
          startDate: "",
          endDate: "",
        },
      ]);
      setLoading(false);
    } else {
      setReservations(data.items);
      setLoading(false);
    }
  }

  useEffect(() => {
    getReservations();
  }, []);

  const renderItem = ({ item }) => {
    const endDate = new Date(item.endDate);
    const startDate = new Date(item.startDate);
    const options = { month: "short", day: "numeric", year: "numeric" };
    const endDateString = endDate.toLocaleDateString("da-DK", options);
    const startDateString = startDate.toLocaleDateString("da-DK", options);

    return (
      <View style={{ padding: 10 }}>
        <Card style={{backgroundColor: "#f9f9f9"}}>
          <Card.Content>
            <View>
              <Text style={style.header}>{item.renterName}</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 10, color: "green" }}>
              <Text style={{color: "green",  fontSize: 20, fontWeight: "300" }}>Afhentning: </Text>
              <Text style={style.text}>{startDateString}</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 10 }}>
              <Text style={{color: "red",  fontSize: 20, fontWeight: "300" }}>Aflevering: </Text>
              <Text style={style.text}>{endDateString}</Text>
            </View>
          </Card.Content>
       
            <View style={{flexDirection: "row", justifyContent: "center"}}>
            <Button
              style={{
                borderRadius: 5,
                backgroundColor: "#4097ed",
                margin: 20,
                paddingHorizontal: 50,
                
              }}
              mode="elevated"
              onPress={() => navigateToCommunication(item.renter, item.owner)}
            >
              <Text
                style={{ fontSize: 14, color: "white", paddingVertical: 1 }}
              >
                Kontakt Lejeren
              </Text>
            </Button>
            </View>
          
        </Card>
      </View>
    );
  };

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      {loading ? (
        <LoadingScreen />
      ) : (
        <FlatList
          data={reservations}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

const style = StyleSheet.create({
  text: {
    fontSize: 20, fontWeight: "300",
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
export default YourReservation;
