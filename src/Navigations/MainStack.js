import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomStack from './BottomStack';
import NavigationStrings from './NavigationStrings';
import Notification from '../Screens/Notification';
import Favourites from '../Screens/Favourites';
import ProductList from '../Screens/ProductList';
import Review from '../Screens/Review';
import Filter from '../Screens/Filter';
import Cart from '../Screens/Cart';
import Productdetail from '../Screens/Productdetail';
import PersonalInfo from '../Screens/PersonalInfo';
import Search from '../Screens/Search';
import Checkout from '../Screens/Checkout';

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
      <Stack.Screen
        name={NavigationStrings.FAVOURITES}
        component={Favourites}
      />
      <Stack.Screen
        name={NavigationStrings.PRODUCTS_LIST}
        component={ProductList}
      />
      <Stack.Screen name={NavigationStrings.REVIEW} component={Review} />
      <Stack.Screen name={NavigationStrings.Filter} component={Filter} />

      <Stack.Screen name={NavigationStrings.Cart} component={Cart} />
      <Stack.Screen
        name={NavigationStrings.PRODUCT_DETAILS}
        component={Productdetail}
      />

      <Stack.Screen
        name={NavigationStrings.PERSONAL_INFO}
        component={PersonalInfo}
      />
      <Stack.Screen name={NavigationStrings.SEARCH} component={Search} />
      <Stack.Screen name={NavigationStrings.CHECKOUT} component={Checkout} />
    </Stack.Navigator>
  );
};

export default MainStack;

const styles = StyleSheet.create({});
