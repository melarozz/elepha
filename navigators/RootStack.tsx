
import React, {FC} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Register from '../screens/Register';
import Welcome from '../screens/Welcome';
import Reset from '../screens/Reset';
import Login from '../screens/Login';
import EditProfile from "../screens/EditProfile";
import TabScreens from './../navigators/TabScreens';
import Feedback from "../screens/Feedback";

export type RootStackParamList = {
  Welcome: undefined;
  Rec: undefined;
  Login: undefined;
  Reset: undefined;
  Register: undefined;
  Profile: undefined;
  EditProfile: undefined;
  Feedback: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootStack: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Rec"
          component={TabScreens}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Reset"
          component={Reset}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={TabScreens}
          options={{ headerShown: false }}
        />
        <Stack.Screen
            name="EditProfile"
            component={EditProfile}
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name="Feedback"
            component={Feedback}
            options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
