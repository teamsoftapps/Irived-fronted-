import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomStack from './BottomStack';
import NavigationStrings from './NavigationStrings';
import Notification from '../Screens/Notification';

const Stack = createNativeStackNavigator();
const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={NavigationStrings.BOTTOM_STACK}
        component={BottomStack}
      />
      <Stack.Screen
        name={NavigationStrings.NOTIFICATION}
        component={Notification}
      />
    </Stack.Navigator>
  );
};

export default MainStack;

const styles = StyleSheet.create({});
