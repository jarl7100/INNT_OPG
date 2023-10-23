import * as React from 'react';

import { SafeAreaView, Image, Text } from 'react-native';
import { Button } from 'react-native-paper';
import MapView, { Marker, Callout } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

import Style from '../GlobalStyleSheet/Style.js';


// Laver en map med nogle markører af både omkring Danmark
function Map() {
        return (
                <SafeAreaView style={Style.mapContainer}>
                    <MapView
                            provider="google"
                            style={Style.map}
                            showsUserLocation
                            // Vi sætter initial region til at være københavn
                            initialRegion={{
                                latitude: 55.6984,
                                longitude: 12.5859,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                        }}>
                        {/* Her laver vi en markører som viser en båd i tuborg Havn*/}
                        <Marker
                            coordinate={{ latitude: 55.726531, longitude: 12.587744 }}
                            title={"My Marker"}
                            description={"This is my marker"}
                        >
                           { /* Her laver vi en callout som viser information om båden når brugeren trykker på markeren*/}
                            <Callout>
                                <Text style={Style.calloutText}>
                                    Ocean glider
                                </Text>
                                <Text style={Style.calloutText}>
                                    Tuborg Havn
                                </Text>
                                <Text style={Style.calloutText}>
                                    price : 1500
                                </Text>
                                    <Image 
                                    source={{ uri: "https://media.istockphoto.com/id/171572077/photo/motorboat.jpg?s=612x612&w=0&k=20&c=zUAdKSUQX9WfftopvsFNSdRgJ7_yTH4qHbCIXLhXRBQ=" }} 
                                    style={Style.calloutImage} />
                                    { /* Knappen gør ikke noget endnu */}
                                    <Button
                                    style={Style.calloutButton}
                                    mode='contained'>
                                        Book Now
                                    </Button>
                            </Callout>
                        </Marker>

                        {/* Her laver vi en markører som viser en båd i Rungsted Havn*/}
                        <Marker
                            coordinate={{ latitude: 55.885258, longitude: 12.546178 }}
                        >
                            <Callout>
                                <Text style={Style.calloutText}>
                                Spirit of the ocean
                                </Text>
                                <Text style={Style.calloutText}>
                                    Rungsted Havn
                                </Text>
                                <Text style={Style.calloutText}>
                                    price : 10000
                                </Text>
                                    <Image 
                                    source={{ uri: "https://www.absoluteyachts.com/web/app/uploads/2022/05/Navetta-75-img-principale.jpg" }} 
                                    style={Style.calloutImage} />
                                    <Button
                                    style={Style.calloutButton}
                                    mode='contained'>
                                        Book Now
                                    </Button>
                            </Callout>
                        </Marker>

                        {/* Her laver vi nogle markører som viser en båd i Havneholmen bådplads*/}
                        <Marker
                            coordinate={{ latitude: 55.660833, longitude: 12.563056}}
                        >

                            <Callout>
                                <Text style={Style.calloutText}>
                                    Life of the sea
                                </Text>
                                <Text style={Style.calloutText}>
                                Havneholmen bådplads
                                </Text>
                                <Text style={Style.calloutText}>
                                    price : 400
                                </Text>
                                    <Image 
                                    source={{ uri: "https://danskmarinecenter.dk/media/4581/15727.jpg" }} 
                                    style={Style.calloutImage} />
                                    <Button
                                    style={Style.calloutButton}
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