import React, { Component, useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import PocketBase from "pocketbase";
import { getID, setId } from "../../utils/AuthService.js";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import LoadingScreen from "../LoadingScreen.js";


//Denne skærm er til at brugeren kan opdatere sin profil
export default function UpdateProfile() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  const [profile, setProfile] = useState({
    id: "",
    username: "",
    email: "",
    boatOwner: false,
    postal: 0,
    city: "",
    address: "",
    phone: 0,
    firstName: "",
    surname: "",
  });

  const pb = new PocketBase("https://pocketbaselucashunt.fly.dev");

  //Opdatere brugerens profil i pocketbase databasen når brugeren klikker på opdater profil knappen
  function updateProfile() {
    pb.collection("users").update(profile.id, profile);
    navigation.navigate("Profile", { reloadFlag: Date.now() });
  }


  //Henter brugerens informationer fra pocketbase databasen
  const getUserInformation = async () => {
    const ID = await getID();
    const record = await pb.collection("users").getOne(ID);
    setProfile(record);
    setLoading(false);
  };

  useEffect(() => {
    getUserInformation();
  }, []);

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={100}
      behavior="padding"
      style={{ flex: 1, backgroundColor: "white", padding: 10  }}
      enabled
    >
      {loading ? <LoadingScreen /> : 
      <>
     <View style={{padding: 20}}>
        <Text style={style.header}>Profil</Text>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}
        >
          <Text style={style.text}>Fornavn</Text>
          <TextInput
            style={style.input}
            value={profile.firstName}
            onChangeText={(firstName) =>
              setProfile({ ...profile, firstName: firstName })
            }
          />
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}
        >
          <Text style={style.text}>Efternavn</Text>
          <TextInput
            style={style.input}
            value={profile.surname}
            onChangeText={(surname) =>
              setProfile({ ...profile, surname: surname })
            }
          />
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}
        >
          <Text style={style.text}>Telefon</Text>
          <TextInput
            style={style.input}
            value={profile.phone.toString()}
            onChangeText={(phone) => setProfile({ ...profile, phone: phone })}
          />
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}
        >
          <Text style={style.text}>Adresse</Text>
          <TextInput
            style={style.input}
            value={profile.address}
            onChangeText={(address) =>
              setProfile({ ...profile, address: address })
            }
          />
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}
        >
          <Text style={style.text}>Postnummer</Text>
          <TextInput
            style={style.input}
            value={profile.postal.toString()}
            onChangeText={(postal) =>
              setProfile({ ...profile, postal: postal })
            }
          />
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}
        >
          <Text style={style.text}>By</Text>
          <TextInput
            style={style.input}
            value={profile.city}
            onChangeText={(city) => setProfile({ ...profile, city: city })}
          />
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}
        >
          <Text style={style.text}>Email</Text>
          <TextInput
            style={style.input}
            value={profile.email}
            onChangeText={(email) => setProfile({ ...profile, email: email })}
          />
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}
        >
          <Text style={style.text}>Brugernavn</Text>
          <TextInput
            style={style.input}
            value={profile.username}
            onChangeText={(username) =>
              setProfile({ ...profile, username: username })
            }
          />
        </View>
        <Button
        style={{
          borderRadius: 5,
          backgroundColor: "#4097ed",
          marginTop: 20,
        
          
        }}
        mode="elevated"
        onPress={() => {
          updateProfile();
        }}
      >
        <Text style={{fontSize: 20, color: "white", paddingVertical: 5}}>Opdater profil</Text>
      
      </Button>
      
        </View>
        </>
      }
  
    </KeyboardAvoidingView>
  );
}

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
