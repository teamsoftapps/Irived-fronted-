import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import WrapperContainer from '../Components/WrapperContainer';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {FontFamily, images} from '../utils';

const Shops = [
  {
    shopimg: images.vapshop,
    title: 'Classic City Vapes',
    locationimg: images.location,
    location: '456 Oak Avenue,Metroville',
    fav: images.fav_selected,
    notfav: images.fav_unselected,
  },
  {
    shopimg: images.vapshop1,
    title: 'Vapor Emporium',
    locationimg: images.location,
    location: '123 Main Street, Cityville',
    fav: images.fav_selected,
    notfav: images.fav_unselected,
  },
  {
    shopimg: images.store,
    title: 'Vape Haven',
    locationimg: images.location,
    location: '123 Main Street, Cityville',
    fav: images.fav_selected,
    notfav: images.fav_unselected,
  },
];
const FavShop = () => {
  return (
    <WrapperContainer style={{flex: 1}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{
          marginTop: responsiveHeight(2),
          paddingHorizontal: responsiveWidth(6),
        }}
        data={Shops}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={{position: 'relative'}}
              activeOpacity={0.95}>
              <Image source={item.shopimg} style={styles.shopImg} />
              <View
                style={{
                  position: 'absolute',
                  bottom: responsiveHeight(4),
                  paddingHorizontal: responsiveWidth(4),
                }}>
                <Text numberOfLines={1} style={styles.shoptitle}>
                  {item.title}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: responsiveWidth(1),
                    marginTop: responsiveHeight(1),
                  }}>
                  <Image
                    source={item.locationimg}
                    style={{
                      width: responsiveWidth(3.5),
                      height: responsiveWidth(3.5),
                      resizeMode: 'contain',
                      tintColor: '#fff',
                    }}
                  />
                  <Text
                    numberOfLines={1}
                    style={{
                      fontFamily: FontFamily.Regular,
                      color: '#F5F5F5',
                      fontSize: responsiveFontSize(1.4),
                    }}>
                    {item.location}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </WrapperContainer>
  );
};

export default FavShop;

const styles = StyleSheet.create({
  subhead: {
    fontSize: responsiveFontSize(2),
    fontFamily: FontFamily.Bold,
    color: '#000',
  },
  shopImg: {
    width: '100%',
    height: responsiveWidth(55),
    borderRadius: responsiveWidth(3),
    marginVertical: responsiveHeight(1),
    alignSelf: 'center',
  },
  shoptitle: {
    fontSize: responsiveFontSize(2),
    color: '#fff',
    fontFamily: FontFamily.Semi_Bold,
  },
});
