import 'react-native-gesture-handler';
import { Button } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Henter alle siderne der skal bruges i bunden af appen
import AddBoat from "../Screens/BoatOwner/AddBoat.js";
import YourReservation from '../Screens/BoatOwner/YourResevation.js';
import ProfilBoatOwner from '../Screens/BoatOwner/ProfilBoatOwner.js';
import ChatPage from '../Screens/General/ChatbotPage.js';


const Tab = createBottomTabNavigator();

export default function TabNavigatorBoatOwner() {
  const navigation = useNavigation();

  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarActiveTintColor: "blue",
      tabBarInactiveTintColor: "gray",
      tabBarStyle: [
        {
          display: "flex"
        },
        null
      ],
      // Her laver vi ikonerne til de forskellige sider i appen for boatowner
      tabBarIcon: ({ color, size }) => {
        if (route.name === 'ChatBot') {
          return (<Ionicons
            name="help-circle-outline"
            size={size}
            color={color}
          />
          );
        }
        else if (route.name === 'Add Boat') {
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
        else if (route.name === 'Your Reservations') {
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
    // Her laver vi de forskellige sider i appen for boatowner
    >
      <Tab.Screen name="Profile" component={ProfilBoatOwner}
           options={{
            headerRight: () => (
              <Button title="Help" onPress={() => navigation.navigate("Chatbot")} />
            ),
          }}/>
      <Tab.Screen name="Add Boat" component={AddBoat}
     options={{
      headerRight: () => (
        <Button title="Help" onPress={() => navigation.navigate("Chatbot")} />
      ),
    }} />
      <Tab.Screen name="Your Reservations" component={YourReservation}
       options={{
        headerRight: () => (
          <Button title="Help" onPress={() => navigation.navigate("Chatbot")} />
        ),
      }} />
    </Tab.Navigator>
  )
}


