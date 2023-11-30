import 'react-native-gesture-handler';

// Henter createStackNavigator fra react-navigation/stack
import { createStackNavigator } from '@react-navigation/stack';

// Henter alle siderne der skal bruges i stacken 
import HomeScreen from '../Screens/BoatRenter/HomeScreen.js';
import Map from "../Screens/BoatRenter/Map.js";
import CreateUser from '../Screens/Authentication/CreateUser.js';
import Login from '../Screens/Authentication/Login.js';
import TabNavigator from './BottomTabNavigator.js';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    // Her laver vi en stack navigator som bruges til at navigere mellem siderne i appen
    <Stack.Navigator>
      <Stack.Screen
        name="Opret profil"
        component={CreateUser}
      />
      <Stack.Screen
        name="Log Ind"
        component={Login}
      />
      <Stack.Screen
        name="Startscreen"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default StackNavigator;