import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Orders from '../Screens/Orders';
import Message from '../Screens/Message';
import Profile from '../Screens/Profile';
import NavigationStrings from './NavigationStrings';

const Bottom = createBottomTabNavigator();
const BottomStack = () => {
  return (
    <Bottom.Navigator screenOptions={{headerShown: false}}>
      <Bottom.Screen name={NavigationStrings.HOME} component={Home} />
      <Bottom.Screen name={NavigationStrings.ORDERS} component={Orders} />
      <Bottom.Screen name={NavigationStrings.MESSAGE} component={Message} />
      <Bottom.Screen name={NavigationStrings.PROFILE} component={Profile} />
    </Bottom.Navigator>
  );
};

export default BottomStack;

const styles = StyleSheet.create({});
