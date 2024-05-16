import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {images} from '../../utils';

const HeaderComponent = ({
  top_text = '',
  text_container_style = {},
  bottom_text,
  style = {},
  top_text_style = {},
  bottom_text_style = {},
  icon = 'back',
}) => {
  return (
    <View style={{...styles.container, ...style}}>
      <TouchableOpacity style={{}}>
        <Image
          source={images[icon]}
          style={{
            width: responsiveWidth(6),
            height: responsiveHeight(4),
            resizeMode: 'contain',
          }}
        />
      </TouchableOpacity>
      <View style={{flex: 1, ...text_container_style}}>
        <Text
          style={{
            ...styles.top_text_style,
            ...top_text_style,
          }}>
          {top_text}
        </Text>
        <Text
          style={{
            ...styles.bottom_text_style,
            ...bottom_text_style,
          }}>
          {bottom_text}
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
  top_text_style: {
    fontSize: responsiveFontSize(2.5),
    color: 'black',
    fontWeight: '600',
    marginLeft: responsiveWidth(4),
  },
  bottom_text_style: {
    fontSize: responsiveFontSize(2),
    marginLeft: responsiveWidth(4),
    color: 'grey',
    fontWeight: '400',
    textAlign: 'left',
  },
});
