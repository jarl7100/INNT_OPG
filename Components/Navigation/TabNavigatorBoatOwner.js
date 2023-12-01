import 'react-native-gesture-handler';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Henter alle siderne der skal bruges i bunden af appen
import AddBoat from "../Screens/BoatOwner/AddBoat.js";
import HomeScreenBoatOwner from '../Screens/BoatOwner/HomeScreen.js';

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
        },
      })}
      // Her laver vi de forskellige sider i appen
      >

        <Tab.Screen name="Home"  component={HomeScreenBoatOwner}/>
        <Tab.Screen name="AddBoat" component={AddBoat} />
      </Tab.Navigator>
    )
  }

  
  