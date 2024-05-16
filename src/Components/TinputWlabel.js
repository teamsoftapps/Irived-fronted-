import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { FontFamily } from '../utils';

const TinputWlabel = ({
  header = '',
  containerstyle = {},
  onChangeText,
  value,
  imagee,
  secureTextEntry = false,
  imageOnpress,
}) => {
  return (
    <View style={{ ...styles.container, ...containerstyle }}>
      <View style={{ flex: 1 }}>
        <Text style={styles.headertext}>{header}</Text>
        <TextInput
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
          value={value}
          style={{
            paddingRight: responsiveWidth(4),
            color: '#FFF',
            fontSize: responsiveFontSize(1.6),
            fontFamily: FontFamily.Regular,
          }}
        />
      </View>
      <TouchableOpacity onPress={imageOnpress}>
        <Image
          source={imagee}
          style={{
            width: responsiveWidth(4),
            height: responsiveHeight(4),
            resizeMode: 'contain',
            tintColor: '#fff',
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default TinputWlabel;

const styles = StyleSheet.create({
  container: {
    borderColor: '#fff',
    height: responsiveHeight(8),
    borderRadius: responsiveHeight(1),
    borderWidth: responsiveHeight(0.1),
    paddingHorizontal: responsiveWidth(4),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
  },
  headertext: {
    color: '#d7d7d7',
    top: responsiveHeight(1),
    fontFamily: FontFamily.Medium,
    fontSize: responsiveFontSize(1.7),
  },
});
