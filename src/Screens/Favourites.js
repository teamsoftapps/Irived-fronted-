import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
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
import {useNavigation} from '@react-navigation/native';

const Favourites = () => {
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
  const [select, setselect] = useState(false);

  const navigattion = useNavigation();
  return (
    <WrapperContainer style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: responsiveWidth(6),
          height: responsiveHeight(10),
        }}>
        <TouchableOpacity
          onPress={() => {
            navigattion.goBack();
          }}>
          <Image
            resizeMode="contain"
            style={{
              width: responsiveWidth(5),
              height: responsiveHeight(4),
            }}
            source={images.back}
          />
        </TouchableOpacity>
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

      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          scrollEnabled={false}
          style={{
            marginTop: responsiveHeight(4),
            paddingHorizontal: responsiveWidth(6),
            flex: 1,
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
      </ScrollView>
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
