import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, ScrollView } from "react-native";
import LoadingScreen from "../LoadingScreen";
import PocketBase from "pocketbase";
import { getID } from "../../utils/AuthService.js";
import { useNavigation } from "@react-navigation/native";

export default function YourReviews() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const pb = new PocketBase("https://pocketbaselucashunt.fly.dev");
  const [reviews, setReviews] = useState([]);

  async function fetchReviews() {
    const id = await getID();
    try {
      const filter = `ownerID = '${id}'`;
      const data = await pb.collection("review").getList(1, 10, {
        sort: "-created",
        filter: filter,
      });
      console.log(data);
      setReviews(data.items);
      setLoading(false); // Update the state with the 'items' property of the data object
    } catch (error) {
      console.error("Error fetching reviews:", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchReviews();
  }, []);

  const renderItem = ({ item }) => {
    let color = "black";
    if (item.reviewStars < 3) {
      color = "red";
    } else if (item.reviewStars < 4) {
      color = "orange";
    } else {
      color = "green";
    }
  return (
    <View style={{ margin: 10, backgroundColor: "#f9f9f9", borderRadius: 5, padding: 10 }}>
      <Text style={{ margin: 10, fontSize: 25, fontWeight: "bold" }}>
        {item.name}
      </Text>
    <View style={{flex: 1, flexDirection: "row", justifyContent: "center"}}>
      <Text style={{fontSize: 20, fontWeight: "300"}}>
        {item.reviewText}
      </Text>
      </View>
      <Text
        style={
            {
          color: color,
          fontSize: 20,
          fontWeight: "300",
          margin: 10,
          textAlign: "right"
        }}
      >
        Rating: {item.reviewStars}
      </Text>
    </View>
)};

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      {loading ? (
        <LoadingScreen />
      ) : (
        <FlatList
          data={reviews}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      )}
    </View>
  );
}

const style = StyleSheet.create({
  text: {
    fontSize: 20,

    fontWeight: "300",
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
