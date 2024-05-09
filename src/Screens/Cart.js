import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import WrapperContainer from '../Components/WrapperContainer';

const products = [
  {
    id: 1,
    name: 'Blueberry Blast',
    price: '',
    image: '',
    description: '',
  },
];
const Cart = () => {
  return (
    <WrapperContainer>
      <Text>Cart</Text>
    </WrapperContainer>
  );
};

export default Cart;
const styles = StyleSheet.create({});
