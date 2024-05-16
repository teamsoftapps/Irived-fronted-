import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthStack from './src/Navigations/AuthStack';
import MainStack from './src/Navigations/MainStack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const App = () => {
  const [state, setstate] = useState(false);
  return (
    <NavigationContainer>
      {!state ? <AuthStack /> : <MainStack />}
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
