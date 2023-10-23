import 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../Screens/HomeScreen.js';
import Map from "../Screens/Map.js";
import BoatsScreen from '../Screens/BoatsScreen.js';

const Stack = createStackNavigator();

function StackNavigator() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Map" component={Map} />
        <BoatsScreen name="Boat" component={BoatsScreen} />
      </Stack.Navigator>
    )
  }

export default StackNavigator;