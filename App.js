import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './Components/Navigation/BottomTabNavigator.js';

export default function App() {
  // Vi holder App.js så simpel som muligt og bruger TabNavigator.js til at navigere mellem siderne i appen
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}