import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WrapperContainer from '../Components/WrapperContainer';
import HeaderComponent from '../Components/Headers/HeaderComponent';

const Checkout = () => {
  return (
    <WrapperContainer style={{flex: 1}}>
      <HeaderComponent text="Checkout" />
    </WrapperContainer>
  );
};

export default Checkout;

const styles = StyleSheet.create({});
