import 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack';

import BoatsScreen from "../Screens/BoatsScreen.js";
import Map from "../Screens/Map.js";

const Stack = createStackNavigator();

function StackNavigator() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Available rental boats" component={BoatsScreen} />
        <Stack.Screen name="Map" component={Map} />
      </Stack.Navigator>
    )
  }

export default StackNavigator;