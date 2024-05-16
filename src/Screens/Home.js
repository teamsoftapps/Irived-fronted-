import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import WrapperContainer from '../Components/WrapperContainer';
import {FontFamily, images} from '../utils';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import TextInputComp from '../Components/Headers/TextInputComp';
import {useNavigation} from '@react-navigation/native';
import NavigationStrings from '../Navigations/NavigationStrings';

const Home = () => {
  const navigation = useNavigation();
  return (
    <WrapperContainer style={{flex: 1, paddingHorizontal: responsiveWidth(6)}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: responsiveHeight(2),
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: responsiveHeight(2),
          }}>
          <Image
            source={images.user1}
            style={{
              width: responsiveWidth(17),
              height: responsiveWidth(17),
              borderRadius: responsiveWidth(17),
            }}
          />
          <View>
            <Text
              style={{
                fontFamily: FontFamily.Medium,
                fontSize: responsiveFontSize(2),
                color: 'gray',
              }}>
              Deliver to
            </Text>
            <Text
              style={{
                fontSize: responsiveFontSize(2.2),
                color: '#000',
                fontFamily: FontFamily.Bold,
              }}>
              Times Square
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: responsiveHeight(2),
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(NavigationStrings.NOTIFICATION);
            }}
            activeOpacity={0.9}
            style={styles.circleButton}>
            <Image source={images.bell} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.9} style={styles.circleButton}>
            <Image source={images.cart} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>

      <TextInputComp
        style={{marginTop: responsiveHeight(2)}}
        placeholder="Search products"
      />

      <Text style={styles.cate}>Categories</Text>
    </WrapperContainer>
  );
};

export default Home;

const styles = StyleSheet.create({
  circleButton: {
    width: responsiveWidth(12),
    height: responsiveWidth(12),
    backgroundColor: '#fff',
    elevation: responsiveWidth(1),
    borderRadius: responsiveWidth(15),
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: responsiveWidth(7),
    height: responsiveHeight(7),
    resizeMode: 'contain',
  },
  cate: {
    fontSize: responsiveFontSize(2.5),
    fontFamily: FontFamily.Bold,
    color: '#000',
    marginTop: responsiveHeight(4),
  },
});
