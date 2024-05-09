import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {images} from '../../utils';

const HeaderComponent = () => {
  return (
    <View style={styles.topbar}>
      <TouchableOpacity>
        <Image
          source={images.back}
          style={{width: responsiveWidth(6), height: responsiveHeight(2.5)}}
        />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: responsiveFontSize(2.5),
          color: 'black',
          fontWeight: '600',
          textAlign: 'center',
          flex: 1,
          backgroundColor: 'red',
        }}>
        Notification
      </Text>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  topbar: {
    paddingHorizontal: responsiveWidth(8),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
