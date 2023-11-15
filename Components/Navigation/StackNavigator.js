import 'react-native-gesture-handler';

// Henter createStackNavigator fra react-navigation/stack
import { createStackNavigator } from '@react-navigation/stack';

// Henter alle siderne der skal bruges i stacken 
import HomeScreen from '../Screens/BoatRenter/HomeScreen.js';
import Map from "../Screens/BoatRenter/Map.js";

const Stack = createStackNavigator();

function StackNavigator() {
    return (
        // Her laver vi en stack navigator som bruges til at navigere mellem siderne i appen
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Map" component={Map} />
      </Stack.Navigator>
    )
  }

export default StackNavigator;