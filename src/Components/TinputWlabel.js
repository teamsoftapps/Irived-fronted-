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
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const TinputWlabel = ({}) => {
  return (
    <View style={styles.txt_input}>
      <View style={{flex: 1}}>
        <Text
          style={{
            fontSize: 13,
            marginTop: responsiveHeight(1),
          }}>
          {'hello'}
        </Text>

        <TextInput
          placeholder={'ali'}
          placeholderTextColor={'white'}
          style={styles.text_Input}
          value={'ali'}
        />
      </View>
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
