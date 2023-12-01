import 'react-native-gesture-handler';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Henter alle siderne der skal bruges i bunden af appen
import AddBoat from "../Screens/BoatOwner/AddBoat.js";
import HomeScreenBoatOwner from '../Screens/BoatOwner/HomeScreen.js';

const Tab = createBottomTabNavigator();

export default function TabNavigatorBoatOwner() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreenBoatOwner} />
        <Tab.Screen name="AddBoat" component={AddBoat} />
      </Tab.Navigator>
    )
  }
  
  