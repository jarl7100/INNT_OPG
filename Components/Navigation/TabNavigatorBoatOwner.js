import 'react-native-gesture-handler';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Henter alle siderne der skal bruges i bunden af appen
import AddBoat from "../Screens/BoatOwner/AddBoat.js";
import Profile from "../Screens/BoatRenter/Profile.js";
import HomeScreenBoatOwner from '../Screens/BoatOwner/HomeScreen.js';
import YourReviews from '../Screens/BoatOwner/YourReviews.js';
import YourReservation from '../Screens/BoatOwner/YourResevation.js';
import ProfilBoatOwner from '../Screens/BoatOwner/ProfilBoatOwner.js';


const Tab = createBottomTabNavigator();

export default function TabNavigatorBoatOwner() {
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
          if (route.name === 'Home') {
            return (<Ionicons
              name="home-outline"
              size={size}
              color={color}
            />
            );
          }
          else if (route.name === 'AddBoat') {
            return (
              <Ionicons
                name="add-outline"
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
          else if (route.name === 'YourReservation') {
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
      // Her laver vi de forskellige sider i appen
      >
        <Tab.Screen name="Profile"  component={ProfilBoatOwner}/>
        <Tab.Screen name="AddBoat" component={AddBoat} />
        <Tab.Screen name="YourReservation" component={YourReservation} />
      </Tab.Navigator>
    )
  }

  
  