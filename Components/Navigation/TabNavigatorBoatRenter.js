import 'react-native-gesture-handler';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Henter alle siderne der skal bruges i bunden af appen
import BoatsScreen from "../Screens/BoatRenter/BoatsScreen.js";
import Profile from "../Screens/BoatRenter/Profile.js";
import HomeScreen from '../Screens/BoatRenter/HomeScreen.js';
import Map from '../Screens/BoatRenter/Map.js';
import Resevations from '../Screens/BoatRenter/Resevations.js';

const Tab = createBottomTabNavigator();

function TabNavigator() {
    const navigation = useNavigation();
    return (
      <Tab.Navigator  screenOptions={({ route }) => ({
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: [
          {
            display: "flex"
          },
          null
        ],
        // Her laver vi ikonerne til de forskellige sider i appen for boat renter
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Boats') {
            return (<Ionicons
              name="boat-outline"
              size={size}
              color={color}
            />
            );
          }
          else if (route.name === 'Home') {
            return (
              <Ionicons
                name="home-outline"
                size={size}
                color={color}
              />
            );
          }
            else if (route.name === 'Map') {
                return (
                <Ionicons
                    name="map-outline"
                    size={size}
                    color={color}
                />
                );
            }
          
          else if (route.name === 'Profile') {
            return (
              <Ionicons
                name="person-outline"
                size={size}
                color={color}
              />
            );
          }
          else if (route.name === 'Resevations') {
            return (
              <Ionicons
                name="calendar-outline"
                size={size}
                color={color}
              />
            );
          }
        },
      })}

      // Her laver vi de forskellige sider i appen for boat renter
      >

        <Tab.Screen name="Home"  component={HomeScreen}
          options={{
            headerRight: () => (
              <Button title="Help" onPress={() => navigation.navigate("Chatbot")} />
            ),
          }}/>
        <Tab.Screen name="Boats" component={BoatsScreen}
          options={{
            headerRight: () => (
              <Button title="Help" onPress={() => navigation.navigate("Chatbot")} />
            ),
          }}/>
        <Tab.Screen name="Resevations" component={Resevations} 
          options={{
            headerRight: () => (
              <Button title="Help" onPress={() => navigation.navigate("Chatbot")} />
            ),
          }}/>
        <Tab.Screen name="Map" component={Map} 
          options={{
            headerRight: () => (
              <Button title="Help" onPress={() => navigation.navigate("Chatbot")} />
            ),
          }}/>
        <Tab.Screen name="Profile" component={Profile} 
          options={{
            headerRight: () => (
              <Button title="Help" onPress={() => navigation.navigate("Chatbot")} />
            ),
          }}/>
      </Tab.Navigator>
    )
  }

export default TabNavigator;