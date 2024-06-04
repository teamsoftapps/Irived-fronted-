import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Orders from '../Screens/Orders';
import Message from '../Screens/Message';
import Profile from '../Screens/Profile';
import NavigationStrings from './NavigationStrings';
import {images} from '../utils';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Bottom = createBottomTabNavigator();
const BottomStack = () => {
  return (
    <Bottom.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarLabelPosition: 'below-icon',
        tabBarStyle: {
          borderTopRightRadius: responsiveHeight(1),
          borderTopLeftRadius: responsiveHeight(1),
          height: responsiveHeight(8),
          borderColor: '#fff',
        },
      }}>
      <Bottom.Screen
        name={NavigationStrings.HOME}
        component={Home}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                bottom: responsiveHeight(0.7),
                color: focused ? '#4361EE' : 'gray',
                fontWeight: focused ? '500' : '',
              }}>
              Home
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <Image
              source={images.home}
              resizeMode="contain"
              style={{
                height: responsiveHeight(3),
                width: responsiveHeight(3),
                tintColor: focused ? '#4361EE' : '',
              }}
            />
          ),
        }}
      />
      <Bottom.Screen
        name={NavigationStrings.ORDERS}
        component={Orders}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                bottom: responsiveHeight(0.7),
                color: focused ? '#4361EE' : 'gray',
                fontWeight: focused ? '500' : '',
              }}>
              Orders
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <Image
              source={images.orders}
              resizeMode="contain"
              style={{
                height: responsiveHeight(3),
                width: responsiveHeight(3),
                tintColor: focused ? '#4361EE' : '',
              }}
            />
          ),
        }}
      />
      <Bottom.Screen
        name={NavigationStrings.MESSAGE}
        component={Message}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                bottom: responsiveHeight(0.7),
                color: focused ? '#4361EE' : 'gray',
                fontWeight: focused ? '500' : '',
              }}>
              Message
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <Image
              source={images.message}
              resizeMode="contain"
              style={{
                height: responsiveHeight(3),
                width: responsiveHeight(3),
                tintColor: focused ? '#4361EE' : '',
              }}
            />
          ),
          tabBarStyle: {display: 'none'},
        }}
      />
      <Bottom.Screen
        name={NavigationStrings.PROFILE}
        component={Profile}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                bottom: responsiveHeight(0.7),
                color: focused ? '#4361EE' : 'gray',
                fontWeight: focused ? '500' : '',
              }}>
              Profile
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <Image
              source={images.profile}
              resizeMode="contain"
              style={{
                height: responsiveHeight(3),
                width: responsiveHeight(3),
                tintColor: focused ? '#4361EE' : '',
              }}
            />
          ),
        }}
      />
    </Bottom.Navigator>
  );
};

export default BottomStack;

const styles = StyleSheet.create({});
