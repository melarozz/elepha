import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {BottomTabBarProps, createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Rec from '../screens/Rec';
import Profile from '../screens/Profile';
import Feedback from "../screens/Feedback";

const Tab = createBottomTabNavigator();

const CustomTabBar = ({ state, navigation }: BottomTabBarProps) => {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route: { key: string|number; name: string; }, index: React.Key|null|undefined) => {
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key as string,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        let iconName;
        if (route.name === 'Home4') {
          iconName = 'account';
        } else if (route.name === 'Home2') {
          iconName = 'headphones';
        } else if (route.name === 'Home3') {
          iconName = 'view-grid';
        }

        return (
          <TouchableOpacity
            key={index}
            style={[
              styles.tabItem,
              { backgroundColor: isFocused ? 'rgba(101, 136, 138, 1)' : 'rgba(117, 157, 159, 1)'},
            ]}
            onPress={onPress}
          >
            <Icon name={iconName as string} color={isFocused ? '#FFFFFF' : '#FFFFFF'} size={24} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const TabScreens = () => {
  return (
    <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
      <Tab.Screen name="Home4" component={Profile} options={{ headerShown: false}} />
      <Tab.Screen name="Home2" component={Rec} options={{ headerShown: false }} />
      <Tab.Screen name="Home3" component={Feedback} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    height: 80,
    borderTopWidth: 0,
    backgroundColor: 'rgba(117, 157, 159, 1)',
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginHorizontal: 30,
    marginVertical: 20,

  },
});

export default TabScreens;
