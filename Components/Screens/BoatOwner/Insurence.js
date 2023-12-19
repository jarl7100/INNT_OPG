import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { Button } from "react-native-paper";

// Denne skærm er til forsikringssiden for bådejere 
export default function Insurance() {
        return (
                <View style={styles.container}>
                        <Octicons name="shield-check" size={150} color="blue" />
                        <Text style={styles.title}>Forsikret</Text>
                        <Text style={styles.subtitle}>Din båd er forsikret imod:</Text>

                        <View style={styles.bulletContainer}>
                                <Text style={styles.bullet}>- Tyveri</Text>
                                <Text style={styles.bullet}>- Brand</Text>
                                <Text style={styles.bullet}>- Kollision</Text>
                                <Text style={styles.bullet}>- Hærværk</Text>
                                <Text style={styles.bullet}>- Naturkatastrofer</Text>
                        </View>

                        <Button style={styles.button}>Læs vilkår og betingelser</Button>
                </View>
        );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 16,
    },
    subtitle: {
        fontSize: 16,
        marginTop: 8,
    },
    bulletContainer: {
        marginTop: 16,
    },
    bullet: {
        fontSize: 16,
        marginBottom: 8,
    },
    button: {
        marginTop: 16,
    },
});
