import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {images} from '../../utils';

const HeaderComponent = ({text = '', style = {}, textstyle = {}}) => {
  return (
    <View style={{...styles.container, ...style}}>
      <TouchableOpacity style={{}}>
        <Image
          source={images.back}
          style={{
            width: responsiveWidth(6),
            height: responsiveHeight(2.8),
            resizeMode: 'contain',
          }}
        />
      </TouchableOpacity>
      <View style={{flex: 1}}>
        <Text
          style={{
            ...styles.textstyle,
            ...textstyle,
          }}>
          {text}
        </Text>
      </View>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(10),
    paddingHorizontal: responsiveWidth(8),
    flexDirection: 'row',
    alignItems: 'center',
  },
  textstyle: {
    fontSize: responsiveFontSize(2.5),
    color: 'black',
    fontWeight: '600',
    textAlign: 'center',
  },
});
