import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BoatsScreen from "./Components/BoatsScreen";
import Profile from "./Components/Profile";
import Ionicons from 'react-native-vector-icons/Ionicons';



const Tab = createBottomTabNavigator();

function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: [
        {
          display: "flex"
        },
          null
          ],
          tabBarIcon: ({ color, size }) => {
           if (route.name === 'Boats') {
              return (
                  <Ionicons
                    name="boat-outline"
                      size={size}
                      color={color}
                  />
              );
            }
            else{
              return (
                  <Ionicons
                      name="person-outline"
                      size={size}
                      color={color}
                  />
              );
            }
          },
        })}
        >
          <Tab.Screen name="Boats" children={()=><BoatsScreen/>} />
          <Tab.Screen name="Profile" children={()=><Profile/>} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}

export default App