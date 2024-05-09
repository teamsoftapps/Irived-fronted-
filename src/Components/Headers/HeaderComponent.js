import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {images} from '../../utils';

const HeaderComponent = ({text = ''}) => {
  return (
    <View style={styles.topbar}>
      <TouchableOpacity style={{}}>
        <Image
          source={images.back}
          style={{width: responsiveWidth(6), height: responsiveHeight(2.5)}}
        />
      </TouchableOpacity>
      <View style={{flex: 1}}>
        <Text
          style={{
            fontSize: responsiveFontSize(2.5),
            color: 'black',
            fontWeight: '600',
            textAlign: 'center',
          }}>
          Cart
        </Text>
      </View>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  topbar: {
    height: responsiveHeight(10),
    paddingHorizontal: responsiveWidth(8),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
