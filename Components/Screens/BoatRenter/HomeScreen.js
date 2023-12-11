import { SafeAreaView, StyleSheet, Text, View, Button, ScrollView } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import Slider from "@react-native-community/slider";
import DateTimePicker from "@react-native-community/datetimepicker";

import PocketBase from 'pocketbase';

const pb = new PocketBase("https://pocketbaselucashunt.fly.dev");

export default function SearchScreen() {
    const navigation = useNavigation();
    //disse states bruges til at gemme den data brugeren indtaster
    const [harbour, setHarbour] = useState("skagen");

    const [maxPrice, setMaxPrice] = useState(1000);
    const [typeOfBoat, setTypeOfBoat] = useState("sailboat");
    const [dateStart, setDateStart] = useState(new Date());
    const [dateEnd, setDateEnd] = useState(new Date());

  //denne funktion bruges til at nulstille søgningen
  function resetSearch() {
    setSearchResult([]);
    setErrorSearching('');
  }

  //Denne funktion bruges til at sætte startdatoen
  const onChangeStart = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDateStart(currentDate);
  };
  
  //Denne funktion bruges til at sætte slutdatoen
  const onChangeEnd = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDateEnd(currentDate);
  };


  async function search() {
    const filter = `typeOfBoat = '${typeOfBoat}' && boatHarbour = '${harbour}' && boatPrice <= '${maxPrice}'`;
    const formattedStartDate = dateStart.toISOString();
    const formattedEndDate = dateEnd.toISOString();
    navigation.navigate('Boats', { filter, dateStart: formattedStartDate, dateEnd: formattedEndDate });
  }

  return (
    <ScrollView style={{  backgroundColor: "#fff", padding: 40}}>


      <View style={{flex: 1, marginBottom: 40}}>
        <Text style={style.header}>Pris</Text>
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>

        <Text style={style.text}>Maks. Pris pr. uge: {maxPrice}</Text>
        <Slider
          style={{ width: 200 }}
          value={maxPrice}
          onValueChange={setMaxPrice}
          maximumValue={10000}
          minimumValue={0}
          step={100}
        />
        </View>
      </View>

      <Text style={style.header}>Havn</Text>
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Picker
        style={{ width: 200 }}
        selectedValue={harbour}
        onValueChange={(itemValue, itemIndex) => setHarbour(itemValue)}
      >
        <Picker.Item label="Gilleleje Havn" value="gilleleje" />
        <Picker.Item label="Skagen Havn" value="skagen" />
      </Picker>
</View>

<Text style={style.header}>Bådtype</Text>
      <View style={{flex: 1, marginBottom: 40, justifyContent: "center", alignItems: "center"}}>
      <Picker
        style={{  width: 200 }}
        selectedValue={typeOfBoat}
        onValueChange={(itemValue, itemIndex) => setTypeOfBoat(itemValue)}
      >
        <Picker.Item label="Motorbåd" value="speedboat" />
        <Picker.Item label="Sejlbåd" value="sailboat" />
      </Picker>

  </View>

  <Text style={style.header}>Datoer</Text>
  <View style={{flex: 1, justifyContent: "center", alignItems: "center", flexDirection: "row", marginBottom: 40, marginTop: 20}}>
        <DateTimePicker
          value={dateStart}
          mode={"date"}
          is24Hour={true}
          onChange={onChangeStart}
        />
        <DateTimePicker
          value={dateEnd}
          mode={"date"}
          is24Hour={true}
          onChange={onChangeEnd}
        />

      </View>
      <View style={{marginBottom: 60}}>
      <Button title="Søg" onPress={search} />
      </View>

    </ScrollView>
  );
}

const style = StyleSheet.create({
  text: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: "300",

  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: -10
  },
});
