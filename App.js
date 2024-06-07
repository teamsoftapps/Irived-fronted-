import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthStack from './src/Navigations/AuthStack';
import MainStack from './src/Navigations/MainStack';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import authSlice from './src/Store/Slices/authSlice';
import Extra from './src/Screens/Extra';

const Stack = createNativeStackNavigator();
const App = () => {
  const isAuth = useSelector(state => state.auth?.isAuthenticated);
  console.log(isAuth, ' auth');
  const [state, setstate] = useState();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name='Extra' component={Extra}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
