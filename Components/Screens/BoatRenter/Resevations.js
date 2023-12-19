import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, ScrollView, RefreshControl } from "react-native";
import { Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { getID } from "../../utils/AuthService.js";
import PocketBase from "pocketbase";
import LoadingScreen from "../LoadingScreen.js";
import { Button } from "react-native-paper";

const Resevations = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true); // Create a new state variable called 'loading' and initialize it to true
  const [oldReservations, setOldReservations] = useState([]); // Create a new state variable called 'reservations' and initialize it to an empty array [
  const [futureReservations, setFutureReservations] = useState([]); // Create a new state variable called 'reservations' and initialize it to an empty array [
    const [refreshing, setRefreshing] = useState(true);


  async function getReservations() {
    const pb = new PocketBase("https://pocketbaselucashunt.fly.dev");
    const id = await getID();
    const filter = `renter = '${id}'`;

    const data = await pb.collection("reservations").getList(1, 10, {
      sort: "startDate",
      filter: filter,
    });

    if (data.items.length > 0) {
      const today = new Date();
      const futureReservations = data.items.filter(
        (item) => new Date(item.endDate) > today
      );
      const oldReservations = data.items.filter(
        (item) => new Date(item.endDate) < today
      );

      setFutureReservations(futureReservations);
      setOldReservations(oldReservations);

      setRefreshing(false);
      setLoading(false);
    } else {
      setRefreshing(false);
      setLoading(false);
    }
  }

  useEffect(() => {
    getReservations();
  }, []);

  function navigateToCommunication(renterID, ownerID) {
    navigation.navigate("Communication", { renter: ownerID, owner: renterID });
  }

  const renderFutureReservations = ({ item }) => {
    const endDate = new Date(item.endDate);
    const startDate = new Date(item.startDate);
    const options = { month: "short", day: "numeric", year: "numeric" };
    const endDateString = endDate.toLocaleDateString("da-DK", options);
    const startDateString = startDate.toLocaleDateString("da-DK", options);

    return (
      <View style={{ padding: 10 }}>
        <Card style={{ backgroundColor: "#f9f9f9", paddingHorizontal: 20 }}>
          <Card.Content>
          <View style={{flexDirection: "row", justifyContent: "space-between"}}>
              <Text
                style={{ fontSize: 25, fontWeight: "bold", marginBottom: 10, marginLeft: -10 }}
              >
                {item.boatName}
              </Text>
              <Text
                style={{ fontSize: 25, fontWeight: "bold", marginBottom: 10, color: "orange", marginRight: -10 }}
              >
                {item.amount} kr.
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginTop: 10,
                color: "green",
              }}
            >
              <Text style={{ color: "green", fontSize: 20, fontWeight: "300" }}>
                Afhentning:{" "}
              </Text>
              <Text style={style.text}>{startDateString}</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginTop: 10,
              }}
            >
              <Text style={{ color: "red", fontSize: 20, fontWeight: "300" }}>
                Aflevering:{" "}
              </Text>
              <Text style={style.text}>{endDateString}</Text>
            </View>
          </Card.Content>

          <View style={{ flexDirection: "row", justifyContent: "center" }}>
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
                Kontakt
              </Text>
            </Button>
          </View>
        </Card>
      </View>
    );
  };

  const renderOldReservations = ({ item }) => {
    const endDate = new Date(item.endDate);
    const startDate = new Date(item.startDate);
    const options = { month: "short", day: "numeric", year: "numeric" };
    const endDateString = endDate.toLocaleDateString("da-DK", options);
    const startDateString = startDate.toLocaleDateString("da-DK", options);

    return (
      <View style={{ padding: 10 }}>
        <Card style={{ backgroundColor: "#f9f9f9", paddingHorizontal: 20 }}>
          <Card.Content>
            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
              <Text
                style={{ fontSize: 25, fontWeight: "bold", marginBottom: 10, marginLeft: -10 }}
              >
                {item.boatName}
              </Text>
              <Text
                style={{ fontSize: 25, fontWeight: "bold", marginBottom: 10, color: "orange", marginRight: -10 }}
              >
                {item.amount} kr.
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginTop: 10,
                color: "green",
              }}
            >
              <Text style={{ color: "green", fontSize: 20, fontWeight: "300" }}>
                Afhentning:{" "}
              </Text>
              <Text style={style.text}>{startDateString}</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginTop: 10,
              }}
            >
              <Text style={{ color: "red", fontSize: 20, fontWeight: "300" }}>
                Aflevering:{" "}
              </Text>
              <Text style={style.text}>{endDateString}</Text>
            </View>
          </Card.Content>

          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Button
              style={{
                borderRadius: 5,
                backgroundColor: "#4097ed",
                marginVertical: 20,
                marginHorizontal: 5,
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
            <Button
              style={{
                borderRadius: 5,
                backgroundColor: "green",
                marginVertical: 20,
                marginHorizontal: 5,
              }}
              mode="elevated"
              onPress={() =>
                navigation.navigate("Create Review", { owner: item.owner })
              }
            >
              <Text
                style={{ fontSize: 14, color: "white", paddingVertical: 1 }}
              >
                Anmeld
              </Text>
            </Button>
          </View>
        </Card>
      </View>
    );
  };

  return (
    <ScrollView style={{ backgroundColor: "white", flex: 1, padding: 20 }}
    refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={getReservations} />
    }
    >
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          {futureReservations.length === 0 && oldReservations.length === 0 ? (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={style.text}>Du har ingen reservationer</Text>
            </View>
          ) : (
            <>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={style.header}>Reservationer </Text>
                {futureReservations.length === 0 && (
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text style={style.text}>
                      Du har ingen fremtidige reservationer
                    </Text>
                  </View>
                )}
                {futureReservations.length > 0 && (
                  <>
                    <FlatList
                      data={futureReservations}
                      keyExtractor={(item) => item.id.toString()}
                      renderItem={renderFutureReservations}
                    />
                  </>
                )}
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 20,
                  marginBottom: 50,
                }}
              >
                <Text style={style.header}>Tidligere reservationer </Text>
                {oldReservations.length === 0 && (
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text style={style.text}>
                      Du har ingen tidligere reservationer
                    </Text>
                  </View>
                )}
                {oldReservations.length > 0 && (
                  <>
                    <FlatList
                      data={oldReservations}
                      keyExtractor={(item) => item.id.toString()}
                      renderItem={renderOldReservations}
                    />
                  </>
                )}
              </View>
            </>
          )}
        </>
      )}
    </ScrollView>
  );
};

const style = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "300",
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default Resevations;
