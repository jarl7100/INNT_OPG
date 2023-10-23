import 'react-native-gesture-handler';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Henter alle siderne der skal bruges i bunden af appen
import BoatsScreen from "../Screens/BoatsScreen.js";
import AddBoat from "../Screens/AddBoat.js";
import Profile from "../Screens/Profile.js";
import HomeScreen from '../Screens/HomeScreen.js';
import Map from '../Screens/Map.js';

const Tab = createBottomTabNavigator();

function TabNavigator() {
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
        // Her laver vi ikonerne til de forskellige sider i appen
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
          else if (route.name === 'Add Boat') {
            return (
              <Ionicons
                name="add-circle-outline"
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
        },
      })}
      // Her laver vi de forskellige sider i appen
      >
        <Tab.Screen name="Home"  component={HomeScreen}/>
        <Tab.Screen name="Boats" component={BoatsScreen}/>
        <Tab.Screen name="Add Boat" component={AddBoat} />
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    )
  }

export default TabNavigator;