import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {FontFamily, images} from '../../utils';

const TextInputComp = ({placeholder = '', style = {}, editable = true}) => {
  return (
    <View style={{...styles.container, ...style}}>
      <Image
        source={images.search}
        style={{
          width: responsiveWidth(6),
          height: responsiveHeight(4),
          resizeMode: 'contain',
          tintColor: 'gray',
        }}
      />
      <TextInput
        editable={editable}
        style={{
          flex: 1,
          fontSize: responsiveFontSize(2),
          fontFamily: FontFamily.Medium,
        }}
        placeholder={placeholder}
      />
    </View>
  );
};

export default TextInputComp;

const styles = StyleSheet.create({
  container: {
    borderColor: '#fff',
    height: responsiveHeight(8),
    borderRadius: responsiveHeight(5),
    borderWidth: responsiveHeight(0.1),
    paddingHorizontal: responsiveWidth(4),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    gap: responsiveHeight(2),
  },
});
