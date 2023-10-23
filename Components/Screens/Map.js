import * as React from 'react';
import { StyleSheet, SafeAreaView, Image, TouchableOpacity, Text } from 'react-native';
import { Button } from 'react-native-paper';
import MapView, { Marker, Callout } from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

function Map() {
    const navigation = useNavigation();
        return (
                <SafeAreaView style={styles.container}>
                    <MapView
                            provider="google"
                            style={styles.map}
                            showsUserLocation
                            // Vi sætter initial region til at være københavn
                            initialRegion={{
                                latitude: 55.6984,
                                longitude: 12.5859,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                        }}>
                        <Marker
                            coordinate={{ latitude: 55.726531, longitude: 12.587744 }}
                            title={"My Marker"}
                            description={"This is my marker"}
                        >
                            <Callout>
                                <Text style={{textAlign: 'center'}}>
                                    Ocean glider
                                </Text>
                                <Text style={{textAlign: 'center'}}>
                                    Tuborg Havn
                                </Text>
                                <Text style={{textAlign: 'center'}}>
                                    price : 1500
                                </Text>
                                    <Image source={{ uri: "https://media.istockphoto.com/id/171572077/photo/motorboat.jpg?s=612x612&w=0&k=20&c=zUAdKSUQX9WfftopvsFNSdRgJ7_yTH4qHbCIXLhXRBQ=" }} style={{ width: 100, height: 100, alignSelf: 'center' }} />
                                    <Button
                                    style={{marginTop: 10}}
                                    mode='contained'>
                                        Book Now
                                    </Button>
                            </Callout>
                        </Marker>

                        <Marker
                            coordinate={{ latitude: 55.885258, longitude: 12.546178 }}
                        >
                            <Callout>
                                <Text style={{textAlign: 'center'}}>
                                Spirit of the ocean
                                </Text>
                                <Text style={{textAlign: 'center'}}>
                                    Rungsted Havn
                                </Text>
                                <Text style={{textAlign: 'center'}}>
                                    price : 10000
                                </Text>
                                    <Image source={{ uri: "https://www.absoluteyachts.com/web/app/uploads/2022/05/Navetta-75-img-principale.jpg" }} style={{ width: 100, height: 100, alignSelf: 'center' }} />
                                    <Button
                                    style={{marginTop: 10}}
                                    mode='contained'>
                                        Book Now
                                    </Button>
                            </Callout>
                        </Marker>

                        <Marker
                            coordinate={{ latitude: 55.660833, longitude: 12.563056}}
                        >
                            <Callout>
                                <Text style={{textAlign: 'center'}}>
                                    Life of the sea
                                </Text>
                                <Text style={{textAlign: 'center'}}>
                                    Havneholmen båd plads
                                </Text>
                                <Text style={{textAlign: 'center'}}>
                                    price : 400
                                </Text>
                                    <Image source={{ uri: "https://danskmarinecenter.dk/media/4581/15727.jpg" }} style={{ width: 100, height: 100, alignSelf: 'center' }} />
                                    <Button
                                    style={{marginTop: 10}}
                                    mode='contained'>
                                        Book Now
                                    </Button>
                            </Callout>
                        </Marker>

                    </MapView>
                </SafeAreaView>
        );
}

export default Map;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
});
