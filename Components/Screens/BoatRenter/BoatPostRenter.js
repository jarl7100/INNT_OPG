import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {useState, useEffect} from 'react';
import PocketBase from 'pocketbase';
import LoadingScreen from '../LoadingScreen';
import { Button } from 'react-native-paper';

const BoatPostRenter = ({route}) => {
    const pb = new PocketBase('https://pocketbaselucashunt.fly.dev');
    const navigation = useNavigation();
    const [boat, setBoat] = useState([]);
    const [loading, setLoading] = useState(true);
    const { boatID } = route.params;
    const [averageStars, setAverageStars] = useState(0);

    async function getBoatInformation() {
        const record = await pb.collection('boatPosts').getOne(boatID);
        setBoat(record);
       
        const filter = `ownerID = '${record.boatOwner}'`;
        const stars = await pb
          .collection("review")
          .getFullList(200 /* batch size */, {
            sort: "-created",
            filter: filter,
          });
    
        let totalStars = 0;
        let count = 0;
        stars.forEach((star) => {
          totalStars += star.reviewStars;
          count++;
        });
    
        setAverageStars(count > 0 ? (totalStars / count).toFixed(1) : 0.0);
        setLoading(false);

    }

    useEffect(() => {
      getBoatInformation();
    }, [])




    return (
      <View style={{ flex: 1, backgroundColor: "white", padding: 10 }}>
        {loading ? (
          <LoadingScreen />
        ) : (
          <BoatPostCard boat={boat} averageStars={averageStars} />
        )}
      </View>
    );
};
function BoatPostCard({ boat, averageStars }) {
  const navigation = useNavigation();
  const pb = new PocketBase("https://pocketbaselucashunt.fly.dev");
  const deleteBoatPost = async () => {
    await pb.collection("boatPosts").delete(boat.id);
    navigation.navigate("Profile");
  };
  const options = { month: "short", day: "numeric" };
  const startDate = new Date(boat.dateStart).toLocaleDateString(
    "da-DK",
    options
  );
  const endDate = new Date(boat.dateEnd).toLocaleDateString("da-DK", options);

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View
        style={{ flexDirection: "row", flex: 1, alignItems: "top", margin: 10 }}
      >
        <View style={{}}>
          <Image
            style={{ height: 125, width: 200, borderRadius: 5 }}
            source={{
              uri: "https://scdn.malibuboats.dev/cdn.pursuitboats.com/images/HomeNews/WOUNDER-70.webp",
            }}
          />
        </View>

        <View style={{ flex: 1, marginLeft: 10 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "stretch",
            }}
          >
            <View style={{ marginTop: 15 }}>
              <Text style={style.header}>{boat.boatTitle}</Text>
            </View>
            <View style={{ marginTop: -10, marginRight: -10 }}>
              <Text style={style.text}>{averageStars} ⭐️</Text>
            </View>
          </View>
          <View style={{}}>
            <Text
              style={{
                fontSize: 25,
                fontWeight: "bold",
                color: "#4097ed",
                marginTop: 10,
              }}
            >
              {boat.boatPrice},-/uge
            </Text>
            <Text style={{ fontSize: 20, marginTop: 10 }}>
              📍{boat.boatHarbour}
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          alignContent: "center",
          justifyContent: "center",
          flexDirection: "row",
          flex: 1,
          marginVertical: 30,
        }}
      >
        <Text style={style.header}>
          📅 {startDate} - {endDate}
        </Text>
      </View>

      <View style={{ margin: 10, marginBottom: 50 }}>
        <Text style={style.header}>Beskrivelse</Text>
        <Text style={style.text}>{boat.boatDescription}</Text>
      </View>

      <View style={{ margin: 10, marginBottom: 50 }}>
        <Text style={style.header}>Detaljer</Text>
        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={style.text}>Længde</Text>
          </View>
          <View>
            <Text style={style.text}>{boat.boatLength} fod</Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 15,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={style.text}>Rum</Text>
          </View>
          <View>
            <Text style={style.text}>{boat.boatRooms} rum</Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 15,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={style.text}>Antal bad</Text>
          </View>
          <View>
            <Text style={style.text}>{boat.boatBaths} bad</Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 15,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={style.text}>Byggeår</Text>
          </View>
          <View>
            <Text style={style.text}>År {boat.boatYear}</Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 15,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={style.text}>Har Gummibåd</Text>
          </View>
          <View>
            <Text style={style.text}>
              {boat.boatInflatableBoat ? "Ja" : "Nej"}
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 15,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={style.text}>Styresystem</Text>
          </View>
          <View>
            <Text style={style.text}>{boat.boatControlsystem}</Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 15,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={style.text}>Tophastighed</Text>
          </View>
          <View>
            <Text style={style.text}>{boat.boatTopSpeed} knob</Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 15,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={style.text}>Model</Text>
          </View>
          <View>
            <Text style={style.text}>{boat.boatBrand}</Text>
          </View>
        </View>
      </View>

        <View style={{ flexDirection: "row", paddingBottom: 30 }}>
            <Button
                style={{
                borderRadius: 5,
                backgroundColor: "green",
                    flex: 50,
                    margin: 5
                }}
                mode="elevated"
                onPress={() =>
                navigation.navigate("Payment", { boatID: boat.id })
                }
            >
                <Text style={{ fontSize: 14, color: "white", paddingVertical: 1 }}>
                Reserver
                </Text>
            </Button>
            <Button
                style={{
                borderRadius: 5,
                backgroundColor: "#4097ed",
                flex: 50,
                margin: 5
                }}
                mode="elevated"
                onPress={() => navigation.navigate("Your Reviews", { ownerID: boat.boatOwner })}
            >
                <Text style={{ fontSize: 14, color: "white", paddingVertical: 1 }}>
                Anmeldelser
                </Text>
            </Button>
        </View>


    </ScrollView>
  );
}

const style = StyleSheet.create({
  text: {
    fontSize: 20,
    flex: 40,
    fontWeight: "300",
    marginLeft: 10,
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default BoatPostRenter;
