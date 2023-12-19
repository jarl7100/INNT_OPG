import {
    Text,
    FlatList,
    Alert,
    SafeAreaView,
    View,
    StyleSheet,
    RefreshControl
  } from "react-native";
  import { Button, Card } from "react-native-paper";
  import { useState, useEffect } from "react";
  import { useNavigation } from "@react-navigation/native";
  import Pocketbase from "pocketbase";
  import Style from "../../GlobalStyleSheet/Style.js"
  import LoadingScreen from "../LoadingScreen.js";
  
  //Denne skærm er til at brugeren kan se alle opslagene for både
  const BoatsScreen = ({ route }) => {

    //Henter filter og datoer fra route
    const { filter, dateStart, dateEnd } = route.params || { filter: "", dateStart: "", dateEnd: "" };
    const [searching, setSearching] = useState(true);
    const [errorSearching, setErrorSearching] = useState("");
    const [boats, setBoats] = useState([]);
    const navigation = useNavigation();
    const [refreshing, setRefreshing] = useState(true);
    
  
    useEffect(() => {
      
      fetchBoats();
    }, [route]);
  
    //Henter alle opslagene for både fra pocketbase databasen
    const fetchBoats = async () => {
    setBoats([]);
    setErrorSearching("");
    setRefreshing(false);
      const pb = new Pocketbase("https://pocketbaselucashunt.fly.dev");
      try {

        //Hvis der er et filter og datoer så henter den opslagene der matcher filteret og datoerne
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

          //Hvis der ikke er nogen både der matcher filteret og datoerne så viser den en fejlbesked
          if (filteredPosts.length === 0) {
            setErrorSearching("Der er ingen både der matcher din søgning!");
        
            } else {
                setBoats(filteredPosts);
            }
          setSearching(false);
        } 
        //Hvis der ikke er et filter og datoer så henter den alle opslagene for både
        else {
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
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={fetchBoats} />
          }
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
  