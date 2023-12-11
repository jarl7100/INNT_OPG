import * as React from 'react';

import { SafeAreaView, Image, Text} from 'react-native';
import { Button } from 'react-native-paper';
import MapView, { Marker, Callout } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

import Style from '../../GlobalStyleSheet/Style.js';


// Laver en map med nogle markører af både omkring Danmark
function Map() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={Style.mapContainer}>
            <MapView
                provider="google"
                style={Style.map}
                showsUserLocation
                initialRegion={{
                    latitude: 56,
                    longitude: 10,
                    latitudeDelta: 5,
                    longitudeDelta: 5,
                }}
            >
                {/* Here we create markers to show boats in different locations */}
                <Marker
                    coordinate={{ latitude: 56.127418, longitude: 12.308571 }}
                    onPress={() => navigation.navigate('Map Boat Screen', { harborName: 'gilleleje' })}
                />
                <Marker
                    coordinate={{ latitude: 57.71334, longitude: 10.59593 }}
                    onPress={() => navigation.navigate('Map Boat Screen', { harborName: 'skagen' })}
                />
            </MapView>
        </SafeAreaView>
    );
}

export default Map;