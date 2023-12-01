import 'react-native-gesture-handler';

// Henter createStackNavigator fra react-navigation/stack
import { createStackNavigator } from '@react-navigation/stack';

// Henter alle siderne der skal bruges i stacken 
import HomeScreen from '../Screens/BoatRenter/HomeScreen.js';
import Map from "../Screens/BoatRenter/Map.js";
import CreateUser from '../Screens/Authentication/CreateUser.js';
import Login from '../Screens/Authentication/Login.js';
import TabNavigatorBoatRenter from './TabNavigatorBoatRenter.js';
import TabNavigatorBoatOwner from './TabNavigatorBoatOwner.js';
import { Tab } from 'react-native-elements';

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
        name="startScreenRenter"
        component={TabNavigatorBoatRenter}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="startScreenOwner"
        component={TabNavigatorBoatOwner}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default StackNavigator;