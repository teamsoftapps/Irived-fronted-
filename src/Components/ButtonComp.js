import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const ButtonComp = ({text = '', style = {}, textstyle = {}, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      style={{...styles.pressable, ...style}}>
      <Text style={{...styles.textstyle, ...textstyle}}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComp;

const styles = StyleSheet.create({
  pressable: {
    backgroundColor: '#4361EE',
    width: responsiveWidth(80),
    height: responsiveHeight(7.5),
    borderRadius: responsiveHeight(7),
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: responsiveWidth(4),
    justifyContent: 'center',
    marginBottom: responsiveHeight(4),
  },
  textstyle: {
    fontWeight: '600',
    color: 'white',
    fontSize: responsiveFontSize(2),
  },
});
