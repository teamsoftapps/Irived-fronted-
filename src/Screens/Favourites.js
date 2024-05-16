import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import WrapperContainer from '../Components/WrapperContainer';
import HeaderComponent from '../Components/Headers/HeaderComponent';
import {FontFamily, images} from '../utils';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Favourites = () => {
  const Shops = [
    {
      shopimg: images.vapshop,
      title: 'Vape Haven',
      locationimg: images.location,
      location: '123 Main Street, Cityville',
      fav: images.fav_selected,
      notfav: images.fav_unselected,
    },
    {
      shopimg: images.vapshop,
      title: 'Vape Haven',
      locationimg: images.location,
      location: '123 Main Street, Cityville',
      fav: images.fav_selected,
      notfav: images.fav_unselected,
    },
  ];
  const [select, setselect] = useState(false);
  return (
    <WrapperContainer>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: responsiveWidth(6),
          height: responsiveHeight(10),
        }}>
        <Image
          resizeMode="contain"
          style={{
            width: responsiveWidth(5),
            height: responsiveHeight(4),
          }}
          source={images.back}
        />
        <Text
          style={{
            fontSize: responsiveFontSize(2.5),
            color: 'black',
            fontWeight: '600',
            flex: 0.7,
          }}>
          Favourites
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingHorizontal: responsiveWidth(6),
          borderBottomWidth: responsiveHeight(0.05),
          borderBottomColor: 'gray',
        }}>
        <TouchableOpacity
          onPress={() => {
            setselect(false);
          }}
          activeOpacity={0.8}
          style={{
            borderBottomWidth: responsiveHeight(0.4),
            paddingBottom: responsiveHeight(0.5),
            borderBottomColor: !select ? '#4361EE' : 'transparent',
            borderRadius: responsiveHeight(0.2),
            width: responsiveWidth(18),
            alignItems: 'center',
          }}>
          <Text style={styles.subhead}>Shops</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setselect(true);
          }}
          activeOpacity={0.8}
          style={{
            borderBottomWidth: responsiveHeight(0.4),
            paddingBottom: responsiveHeight(0.5),
            borderBottomColor: select ? '#4361EE' : 'transparent',
            borderRadius: responsiveHeight(0.2),
            width: responsiveWidth(24),
            alignItems: 'center',
          }}>
          <Text style={styles.subhead}>Products</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={Shops}
          renderItem={({item, index}) => {
            return (
              <ImageBackground
                source={item.shopimg}
                style={{
                  width: responsiveWidth(80),
                  alignSelf: 'center',
                  height: responsiveHeight(40),
                }}></ImageBackground>
            );
          }}
        />
      </View>
    </WrapperContainer>
  );
};

export default Favourites;

const styles = StyleSheet.create({
  subhead: {
    fontSize: responsiveFontSize(2),
    fontFamily: FontFamily.Bold,
    color: '#000',
  },
});
