import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Screens/Login';

import Signup from '../Screens/Signup';
import NavigationStrings from './NavigationStrings';

const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* <Stack.Screen
        name={NavigationStrings.ON_BOARDING}
        component={Onboarding}
      /> */}
      <Stack.Screen name={NavigationStrings.LOG_IN} component={Login} />
      <Stack.Screen name={NavigationStrings.SIGN_UP} component={Signup} />
    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
