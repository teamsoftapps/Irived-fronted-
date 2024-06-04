import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {images} from '../../utils';
import {useNavigation} from '@react-navigation/native';

const HeaderComponent = ({text = '', style = {}, textstyle = {}}) => {
  const {goBack} = useNavigation();
  return (
    <View style={{...styles.container, ...style}}>
      <TouchableOpacity
        onPress={() => {
          goBack();
        }}
        style={{}}>
        <Image
          source={images.back}
          style={{
            width: responsiveWidth(4),
            height: responsiveWidth(4),
            resizeMode: 'contain',
          }}
        />
      </TouchableOpacity>
      <View style={{flex: 0.9}}>
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
