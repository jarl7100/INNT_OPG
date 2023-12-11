import {
    Text,
    FlatList,
    Alert,
    SafeAreaView,
    View,
    StyleSheet,
  } from "react-native";
  import { Button, Card } from "react-native-paper";
  import { useState, useEffect } from "react";
  import { useNavigation } from "@react-navigation/native";
  import Pocketbase from "pocketbase";
  import Style from "../../GlobalStyleSheet/Style.js"
  import LoadingScreen from "../LoadingScreen.js";
  
  
  const BoatsScreen = ({ route }) => {
    const { filter, dateStart, dateEnd } = route.params || { filter: "", dateStart: "", dateEnd: "" };
    const [searching, setSearching] = useState(true);
    const [errorSearching, setErrorSearching] = useState("");
    const [boats, setBoats] = useState([]);
    const navigation = useNavigation();
    
    useEffect(() => {
      
      fetchBoats();
    }, [route]);
  
    const fetchBoats = async () => {
    setBoats([]);
    setErrorSearching("");
      const pb = new Pocketbase("https://pocketbaselucashunt.fly.dev");
      try {
        if (filter !== "") {
       
          const resultList = await pb.collection("boatPosts").getList(1, 10, {
            sort: "-created",
            filter: filter,
            expand: "starred"
          });
        
          const startDate = new Date(dateStart);
            const endDate = new Date(dateEnd);
  
          const filteredPosts = resultList.items.filter((post) => {
            const resultDateStart = new Date(post.dateStart);
            const resultDateEnd = new Date(post.dateEnd);
    
            return startDate >= resultDateStart && endDate <= resultDateEnd;
          });
          console.log(filteredPosts);
          if (filteredPosts.length === 0) {
            setErrorSearching("Der er ingen både der matcher din søgning!");
        
            } else {
                setBoats(filteredPosts);
            }
          setSearching(false);
        } else {
            const resultList = await pb.collection("boatPosts").getList(1, 10, {
                sort: "-created",
            })
            setBoats(resultList.items);
            setSearching(false);
        }
        } catch (error) {
          console.error("Error:", error);
          setSearching(false);
        }
    };
  
    let BoatCards = ({ item }) => {
      return (
        <Card
          style={Style.boatCard}
          onPress={() =>
            navigation.navigate("Boat Post Renter", { boatID: item.id })
          }
        >
          <Card.Title title={item.boatTitle} />
          <Card.Cover
            style={Style.boatCardImage}
            source={{
              uri: "https://scdn.malibuboats.dev/cdn.pursuitboats.com/images/HomeNews/WOUNDER-70.webp",
            }}
          />
          <Card.Content>
            <Text style={Style.boatCardText}>Pris: {item.boatPrice} kr./Dag</Text>
          </Card.Content>
        </Card>
      );
    };
  
    return (
      <View style={Style.container}>
          {searching ? <LoadingScreen /> : (
              <>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>{errorSearching}</Text>
        <FlatList
          style={Style.flatListCards}
          data={boats}
          renderItem={BoatCards}
          keyExtractor={(item) => item.id}
        />
        </>
        )}
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
    },
  });
  
  export default BoatsScreen;
  