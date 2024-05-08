import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
// import { colors, images } from '../utils';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
// import FontFamily from '../../styles/FontFamily';

const TinputWlabel = ({
  // text = 'asasa',
  // value,
  // onChangeText,
  // onPress = () => {},
  // secureTextEntry = false,
  // showImage,
  // inputstyle = {},
  // placeholder = 'sasa',
}) => {
  return (
    <View style={styles.txt_input }>
    {/* <View style={[styles.txt_input, inputstyle]}> */}
      <View style={{flex: 1}}>
        <Text
          style={{
            // color: colors.secondary,
            fontSize: 13,
            marginTop: responsiveHeight(1),
            // fontFamily: FontFamily.regular,
          }}>
          {/* {text} */}
          {"hello"}
        </Text>

        <TextInput
          placeholder={"ali"}
          // placeholder={placeholder}
          placeholderTextColor={'white'}
          style={styles.text_Input}
          // value={value}
          value={"ali"}
          // secureTextEntry={secureTextEntry}
          // onChangeText={onChangeText}
        />
      </View>

      {/* {!!showImage && (
        <TouchableOpacity
        //  onPress={onPress}
         >
          <Image
            tintColor={'white'}
            // source={showImage}
            resizeMode="contain"
            style={styles.imagestyle}
          />
        </TouchableOpacity>
      )} */}
    </View>
  );
};

export default TinputWlabel;

const styles = StyleSheet.create({
  txt_input: {
    // backgroundColor: colors.primary,
    height: responsiveHeight(8),
    borderWidth: responsiveWidth(0.2),
    borderColor: 'white',
    width: responsiveWidth(88),
    borderRadius: responsiveWidth(2),
    paddingHorizontal: responsiveWidth(5),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',

    overflow: 'hidden',
  },
  text_Input: {
    color: 'white',
    right: responsiveWidth(1),
    fontSize: responsiveFontSize(1.5),
    paddingRight: responsiveWidth(3),
    height: responsiveHeight(5),
    // fontFamily: FontFamily.regular,
  },
  imagestyle: {
    height: responsiveWidth(4),
    width: responsiveWidth(4),
  },
});
