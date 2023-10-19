import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../Screens/HomeScreen.js";
import BoatsScreen from "../Screens/BoatsScreen.js";
import Profile from "../Screens/Profile";
import Ionicons from 'react-native-vector-icons/Ionicons';

// Her laver vi en bottom tab navigator som viser de forskellige sider i appen
const Tab = createBottomTabNavigator();

function Navigation() {
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
          // Her laver vi ikonerne til de forskellige sider i appen
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
            else if (route.name === 'Home') {
              return (
                  <Ionicons
                  name="home-outline"
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
          },
        })}
        // Her laver vi de forskellige sider i appen
        >
          <Tab.Screen name="Home" children={()=><HomeScreen/>} />
          <Tab.Screen name="Boats" children={()=><BoatsScreen/>} />
          <Tab.Screen name="Profile" children={()=><Profile/>} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}

export default Navigation