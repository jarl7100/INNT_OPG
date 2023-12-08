import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import { Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { getID } from "../../utils/AuthService.js";
import PocketBase from "pocketbase";
import LoadingScreen from "../LoadingScreen.js";
import { Button } from "react-native-paper";

const Resevations = () => {
    const navigation = useNavigation();

    return (
        <View style={style.container}>
            <Text style={style.header}>
            Tidligere reservationer
                </Text>
     <View style={{ padding: 10 }}>
        <Card style={{backgroundColor: "#f9f9f9"}}>
        <Card.Content>
            <View>
                <Text style={style.header}>
                    { "Ikke fundet"}
                </Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 10, color: "green" }}>
                <Text style={{ color: "green", fontSize: 20, fontWeight: "300" }}>Afhentning: </Text>
                <Text style={style.text}>Ikke angivet</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 10 }}>
                <Text style={{ color: "red", fontSize: 20, fontWeight: "300" }}>Afleveret: </Text>
                <Text style={style.text}>Ikke angivet</Text>
            </View>
        </Card.Content>
       
            <View style={{flexDirection: "row", justifyContent: "center"}}>
            <Button
              style={{
                borderRadius: 5,
                backgroundColor: "#4097ed",
                margin: 5,
                marginBottom: 20,
                marginTop: 20,
                marginLeft: 20,
              }}
              
              mode="elevated"
              onPress={() => navigation.navigate("Communication")}
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
                margin: 5,
                marginBottom: 20,
                marginTop: 20,
                marginRight: 20,
              }}
              
              mode="elevated"
              onPress={() => navigation.navigate("Create Review")}
            >
                
              <Text
                style={{ fontSize: 14, color: "white", paddingVertical: 1 }}
              >
                Give Feedback
              </Text>
            </Button>
            </View>
          
        </Card>
      </View>

                <Text style={style.header}>
                     Fremtidige reservationer
                </Text>
     <View style={{ padding: 10 }}>
        <Card style={{backgroundColor: "#f9f9f9"}}>
        <Card.Content>
            <View>
                <Text style={style.header}>
                    { "Ikke fundet"}
                </Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 10, color: "green" }}>
                <Text style={{ color: "green", fontSize: 20, fontWeight: "300" }}>Afhentning: </Text>
                <Text style={style.text}>Ikke angivet</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 10 }}>
                <Text style={{ color: "red", fontSize: 20, fontWeight: "300" }}>Aflevering: </Text>
                <Text style={style.text}>Ikke angivet</Text>
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
              onPress={() => navigation.navigate("Communication")}
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
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20, fontWeight: "300",
      },
      header: {
        fontSize: 25,
        fontWeight: "bold",
      },
});

export default Resevations;
