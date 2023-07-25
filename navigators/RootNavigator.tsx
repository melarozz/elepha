import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from './types';
import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Reset from "../screens/Reset";
import TabScreens from "./TabScreens";

const RootStack = createNativeStackNavigator<RootStackParamList>();

const screenOptions = {
    title: 'Elepha Health',
    headerShown: false,
};

const RootNavigator: FC = () => {
    return (
        <RootStack.Navigator>
            <RootStack.Screen
                options={screenOptions}
                name="Welcome"
                component={Welcome}
            />
            <RootStack.Screen
                options={screenOptions}
                name="Login"
                component={Login}
            />
            <RootStack.Screen
                options={screenOptions}
                name="Profile"
                component={TabScreens}
            />
            <RootStack.Screen
                options={screenOptions}
                name="Rec"
                component={TabScreens}
            />
            <RootStack.Screen
                options={screenOptions}
                name="Register"
                component={Register}
            />
            <RootStack.Screen
                options={screenOptions}
                name="Reset"
                component={Reset}
            />
        </RootStack.Navigator>
    );
};

export default RootNavigator;


