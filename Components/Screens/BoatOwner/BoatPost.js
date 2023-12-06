import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Style from '../../GlobalStyleSheet/Style.js';

const BoatPost = () => {
    const navigation = useNavigation();
    const deleteBoatPost = () => {
        console.log('delete')
        navigation.navigate("Profile");
    }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bavarian Yacht</Text>
      <Text style={styles.title1}>4,9 ⭐️</Text>
<Image source={{uri: 'https://scdn.malibuboats.dev/cdn.pursuitboats.com/images/HomeNews/WOUNDER-70.webp'}}
       style={styles.Image} />
      <Text style={styles.title2}>Speedbåd</Text>
      <Text style={styles.title3}>1500,-/uge</Text>
      <Text style={styles.title4}>📍Gilleleje, DK</Text>
      <Text style={styles.title5}>Beskrivelse</Text>
      <Text style={styles.title6}>Mauris eget eros cursus, pulvinar nisi eu, euismod ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed mauris orci, dapibus ut sodales ac, condimentum at elit. Nulla condimentum tempus nulla, vitae </Text>
      <Text style={[styles.title5, {marginTop: 10, marginBottom: 15,}]}>Specifikationer</Text>
      <View style={Style.addBoatViewer2}>
        <View>
          <Text style={{ marginBottom: 12 }}>Længde: </Text>
          <Text style={{ marginBottom: 12 }}>Rum: </Text>
          <Text style={{ marginBottom: 12 }}>Antal bad: </Text>
          <Text style={{ marginBottom: 12 }}>Byggeår: </Text>
        </View>
        <View>
          <Text style={{ marginBottom: 12 }}>... </Text>
          <Text style={{ marginBottom: 12 }}>... </Text>
          <Text style={{ marginBottom: 12 }}>... </Text>
          <Text style={{ marginBottom: 12 }}>... </Text>
        </View>

        <View>
          <Text style={{ marginBottom: 12}}>Gummibåd: </Text>
          <Text style={{ marginBottom: 12}}>Styresystem: </Text>
          <Text style={{ marginBottom: 12}}>Tv: </Text>
          <Text style={{ marginBottom: 12}}>Model: </Text>
        </View>
        <View>
          <Text style={{ marginBottom: 12 }}>...</Text>
          <Text style={{ marginBottom: 12 }}>...</Text>
          <Text style={{ marginBottom: 12 }}>...</Text>
          <Text style={{ marginBottom: 12 }}>...</Text>
        </View>
        </View>
      <View style={styles.container2}>

      <View style={{ flexDirection: "row" }}>
      <Pressable style={styles.postEditbutton} onPress={() => navigation.navigate("Update Boat Post")}>
        <Text style={Style.postEditButtonText}>Rediger</Text>
    </Pressable>
    <Pressable style={styles.postEditbutton} title='Andmeldser' onPress={() => navigation.navigate("Your Reviews")}>
        <Text style={Style.postEditButtonText}>Anmeldelser</Text>
    </Pressable>
    </View>
    <Pressable style={styles.postDeletebutton} title='Slet' onPress={() => deleteBoatPost()}>
        <Text style={Style.postEditButtonText}>Slet</Text>
    </Pressable>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
},
container2: {
    justifyContent: 'center',
    alignItems: 'center',
},
title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 30,
    position: 'absolute',
    top: 20,
    alignSelf: 'center',
},
title1: {
    fontSize: 20,
    marginBottom: 30,
    position: 'absolute',
    top: 24,
    right: 15,
    alignSelf: 'center',
},
Image: {
    width: 200,
    height: 120,
    alignSelf: 'right',
    marginLeft: 25,
    marginTop: 70,
    borderRadius: 20,
},
title2: {
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 30,
    position: 'absolute',
    top: 80,
    left: 235,
    alignSelf: 'center',
},
title3: {
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 30,
    position: 'absolute',
    top: 120,
    left: 235,
    alignSelf: 'center',
    color: '#4097ed',
},
title4: {
    fontSize: 15,
    marginBottom: 30,
    position: 'absolute',
    top: 150,
    left: 235,
    alignSelf: 'center',
    color: 'grey',
},
title5: {
    fontSize: 25,
    margin: 30,
    marginBottom: 10,
    fontWeight: 'bold',
    alignSelf: 'center-right',
},
title6: {
    fontSize: 15,
    width: "85%",
    alignSelf: 'center',
},
title7: {
    fontSize: 25,
    marginBottom: 30,
    fontWeight: 'bold',
    position: 'absolute',
    top: 410,
    left: 27,
    alignSelf: 'center',
},
title8: {
    fontSize: 15,
    marginBottom: 30,
    position: 'absolute',
    fontWeight: 'bold',
    width: "20%",
    top: 450,
    left: 27,
    alignSelf: 'center',
},
title9: {
    fontSize: 15,
    marginBottom: 30,
    position: 'absolute',
    fontWeight: 'bold',
    width: "20%",
    top: 480,
    left: 27,
    alignSelf: 'center',
},
title10: {
    fontSize: 15,
    marginBottom: 30,
    position: 'absolute',
    fontWeight: 'bold',
    width: "20%",
    top: 510,
    left: 27,
    alignSelf: 'center',
},
title11: {
    fontSize: 15,
    marginBottom: 30,
    position: 'absolute',
    fontWeight: 'bold',
    width: "20%",
    top: 540,
    left: 27,
    alignSelf: 'center',
},
title12: {
    fontSize: 15,
    marginBottom: 30,
    position: 'absolute',
    fontWeight: 'bold',
    top: 450,
    left: 210,
    alignSelf: 'center',
},
title13: {
    fontSize: 15,
    marginBottom: 30,
    position: 'absolute',
    fontWeight: 'bold',
    top: 480,
    left: 210,
    alignSelf: 'center',
},
title14: {
    fontSize: 15,
    marginBottom: 30,
    position: 'absolute',
    fontWeight: 'bold',
    top: 510,
    left: 210,
    alignSelf: 'center',
},
title15: {
    fontSize: 15,
    marginBottom: 30,
    position: 'absolute',
    fontWeight: 'bold',
    top: 540,
    left: 210,
    alignSelf: 'center',
},
postDeletebutton: {
    width: '90%',
    backgroundColor: '#d60419',
    borderRadius: 10, 
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 10,
    elevation: 3,
},
postEditbutton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    width: '42%',
    margin: 10,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#4097ed',
}
});

export default BoatPost;
