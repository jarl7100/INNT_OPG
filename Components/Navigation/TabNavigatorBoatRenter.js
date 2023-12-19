import 'react-native-gesture-handler';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Henter alle siderne der skal bruges i bunden af appen
import BoatsScreen from "../Screens/BoatRenter/BoatsScreen.js";
import Profile from "../Screens/BoatRenter/Profile.js";
import HomeScreen from '../Screens/BoatRenter/HomeScreen.js';
import Map from '../Screens/BoatRenter/Map.js';
import Resevations from '../Screens/BoatRenter/Resevations.js';
import ChatPage from '../Screens/General/ChatbotPage.js';

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
        // Her laver vi ikonerne til de forskellige sider i appen bådlejer
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
          if (route.name === 'ChatBot') {
            return (<Ionicons
              name="help-circle-outline"
              size={size}
              color={color}
            />
            );
          }
        },
      })}

      // Her laver vi de forskellige sider i appen for bådlejer
      >

        <Tab.Screen name="Home"  component={HomeScreen}/>
        <Tab.Screen name="Boats" component={BoatsScreen}/>
        <Tab.Screen name="Resevations" component={Resevations} />
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="ChatBot" component={ChatPage} />
      </Tab.Navigator>
    )
  }

export default TabNavigator;