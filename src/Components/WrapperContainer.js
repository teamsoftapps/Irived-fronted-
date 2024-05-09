import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const WrapperContainer = ({style = {}, children}) => {
  return (
    <View style={{...styles.container, ...style}}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      <SafeAreaView style={{flex: 1}}>{children}</SafeAreaView>
    </View>
  );
};

export default WrapperContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
