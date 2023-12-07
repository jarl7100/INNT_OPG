import { View, Text, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Pocketbase from 'pocketbase';
import { useEffect, useState } from 'react'
import LoadingScreen from '../LoadingScreen';

const BoatPost = ({ route }) => {
    const { boatID } = route.params;
    const [boat, setBoat] = useState([]);
    const [averageStars, setAverageStars] = useState(0);
    const pb = new Pocketbase('https://pocketbaselucashunt.fly.dev');


    async function getBoatInformation() {
        const record = await pb.collection('boatPosts').getOne(boatID);
        setBoat(record)

        const filter = `ownerID = '${record.boatOwner}'`;
        const stars = await pb.collection('review').getFullList(200 /* batch size */, {
            sort: '-created',
            filter: filter,
        });

        let totalStars = 0;
        let count = 0;
        stars.forEach(star => {
            totalStars += star.reviewStars;
            count++;
        });
       
      setAverageStars(count > 0 ? (totalStars / count).toFixed(1) : 0.0)
        console.log('Average Stars:', averageStars);
    }


 
    


    useEffect(() => {
        getBoatInformation();
   
    }, [])
  return (
    <View style={styles.container}>
          {boat.length === 0 ? <LoadingScreen /> : <BoatPostCard boat={boat} averageStars={averageStars}/>}  
    </View>
  );
};


function BoatPostCard({boat, averageStars}) {
    const navigation = useNavigation();
    const pb = new Pocketbase('https://pocketbaselucashunt.fly.dev');
    const deleteBoatPost = async () => {
        await pb.collection('boatPosts').delete(boat.id);
        navigation.navigate("Profile");
    }
    const options = { month: 'short', day: 'numeric' };
    const startDate = new Date(boat.dateStart).toLocaleDateString('da-DK', options);
    const endDate = new Date(boat.dateEnd).toLocaleDateString('da-DK', options);

    return (
        <>
        <Text style={styles.title}>{boat.boatTitle}</Text>
      <Text style={styles.title1}>{averageStars} ⭐️</Text>
<Image source={{uri: 'https://scdn.malibuboats.dev/cdn.pursuitboats.com/images/HomeNews/WOUNDER-70.webp'}}
       style={styles.Image} />
       <Text style={styles.title2}>{boat.boatTitle}</Text>
      <Text style={styles.title3}>{boat.boatPrice},-/uge</Text>
      <Text style={styles.title4}>📍{boat.boatHarbour}</Text>
        <Text style={styles.title16}>📅{startDate} - {endDate}</Text>
      <Text style={styles.title5}>Beskrivelse</Text>
      <Text style={styles.title6}>{boat.boatDescription}</Text>
      <Text style={styles.title7}>Specifikationer</Text>
      <Text style={styles.title8}>Længde: {boat.boatLength}</Text>
      <Text style={styles.title9}>Rum: {boat.boatRooms}</Text>
      <Text style={styles.title10}>Antal bad: {boat.boatBaths}</Text>
      <Text style={styles.title11}>Byggeår: {boat.boatYear}</Text>
      <Text style={styles.title12}>Gummibåd: {boat.boatInflatableBoat ? 'Ja' : 'Nej'}</Text>
      <Text style={styles.title13}>Styresystem: {boat.boatControlsystem}</Text>
      <Text style={styles.title14}>Tophastighed: {boat.boatTopSpeed}</Text>
      <Text style={styles.title15}>Model: {boat.boatBrand}</Text>
      <View style={styles.container2}>
    <Button style={styles.postDeletebutton} mode="contained" onPress={() => deleteBoatPost()}>
        Slet
    </Button>
    </View>
    <Button style={styles.postEditbutton} mode="contained" onPress={() => navigation.navigate('Update Boat Post', { boatID: boat.id})}>
        Rediger opslag
    </Button>
    <Button style={styles.postReviewsbutton} mode="contained" onPress={() => navigation.navigate("Your Reviews")}>
        Anmeldelser
    </Button>
    </>
    )
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
},
container2: {
    flex: 1,
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
    top: 115,
    left: 235,
    alignSelf: 'center',
    color: '#4097ed',
},
title4: {
    fontSize: 15,
    marginBottom: 30,
    position: 'absolute',
    top: 145,
    left: 230,
    alignSelf: 'center',
    color: 'grey',
},
title16: {
    fontSize: 15,
    marginBottom: 30,
    position: 'absolute',
    top: 170,
    left: 235,
    alignSelf: 'center',
    color: 'grey',
},
title5: {
    fontSize: 25,
    marginBottom: 30,
    fontWeight: 'bold',
    position: 'absolute',
    top: 220,
    left: 27,
    alignSelf: 'center',
},
title6: {
    fontSize: 15,
    marginBottom: 30,
    position: 'absolute',
    width: "85%",
    top: 255,
    left: 27,
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
    position: 'absolute',
    bottom: 50,
    backgroundColor: '#d60419',
    borderRadius: 10, 
},
postEditbutton: {
    width: '42%',
    position: 'absolute',
    bottom: 100,
    backgroundColor: '#4097ed',
    borderRadius: 10, 
    marginLeft: 20,
},
postReviewsbutton: {
    width: '42%',
    position: 'absolute',
    bottom: 100,
    backgroundColor: '#4097ed',
    borderRadius: 10, 
    marginLeft: 207,
},
});
export default BoatPost;