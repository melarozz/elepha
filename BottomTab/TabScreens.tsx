import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Headphones from "./Headphones";
import Grid from "./Grid";
const Tab = createBottomTabNavigator();
const TabScreens = () => {
  return(
    <Tab.Navigator> 
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Headphones" component={Headphones}/>
      <Tab.Screen name="Grid" component={Grid}/>
    </Tab.Navigator>
  )
}

export default TabScreens;
