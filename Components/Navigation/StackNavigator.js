import 'react-native-gesture-handler';

// Henter createStackNavigator fra react-navigation/stack
import { createStackNavigator } from '@react-navigation/stack';

// Henter alle siderne der skal bruges i stacken 
import StartScreen from '../Screens/General/StartScreen.js';
import CreateUser from '../Screens/Authentication/CreateUser.js';
import Login from '../Screens/Authentication/Login.js';
import TabNavigatorBoatRenter from './TabNavigatorBoatRenter.js';
import TabNavigatorBoatOwner from './TabNavigatorBoatOwner.js';
import BoatPost from '../Screens/BoatOwner/BoatPost.js';
import YourReviews from '../Screens/BoatOwner/YourReviews.js';
import Communication from '../Screens/General/Communication.js';
import Insurance from '../Screens/BoatOwner/Insurence.js';
import UpdateBoatPost from '../Screens/BoatOwner/UpdateBoatPost.js';
import UpdateProfile from '../Screens/BoatOwner/UpdateProfile.js';
import BoatPostRenter from '../Screens/BoatRenter/BoatPostRenter.js';
import Payment from '../Screens/BoatRenter/Payment.js';
import CreateReview from '../Screens/BoatRenter/CreateReview.js';
import ChatPage from '../Screens/General/ChatbotPage.js';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    // Her laver vi en stack navigator som bruges til at navigere mellem siderne i appen
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={StartScreen}
        options={{ headerShown: false }}
      />
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
      <Stack.Screen
        name="Boat Post"
        component={BoatPost}
      />
      <Stack.Screen
        name="Boat Post Renter"
        component={BoatPostRenter}
      />
      <Stack.Screen
        name="Your Reviews"
        component={YourReviews}
      />
      <Stack.Screen
        name="Communication"
        component={Communication}
      />
      <Stack.Screen
        name="Insurance"
        component={Insurance}
      />
      <Stack.Screen
        name="Update Boat Post"
        component={UpdateBoatPost}
      />
      <Stack.Screen
        name="Update Profile"
        component={UpdateProfile}
      />
      <Stack.Screen
        name="Payment"
        component={Payment}
      />
      <Stack.Screen
        name="Create Review"
        component={CreateReview}
      />
      <Stack.Screen
        name="Chatbot"
        component={ChatPage}
      />
    </Stack.Navigator>
  );
}

export default StackNavigator;