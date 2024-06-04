import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  SafeAreaView,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
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

const Categories = [
  {name: 'E-Liquids & Juices', id: 1},
  {name: 'Mods & Tanks', id: 2},
  {name: 'Pod Systems', id: 3},
  {name: 'Accessories', id: 4},
  {name: 'Nicotine Salts', id: 5},
];
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
const Home = () => {
  const navigation = useNavigation();
  const [active, setactive] = useState(0);
  return (
    <WrapperContainer
      style={{
        flex: 1,
        paddingHorizontal: responsiveWidth(6),
      }}>
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
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(NavigationStrings.Cart);
            }}
            activeOpacity={0.9}
            style={styles.circleButton}>
            <Image source={images.cart} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          navigation.navigate(NavigationStrings.SEARCH);
        }}>
        <TextInputComp
          editable={false}
          style={{
            marginTop: responsiveHeight(2),
            marginBottom: responsiveHeight(3),
          }}
          placeholder="Search products"
        />
      </TouchableOpacity>

      <Text style={styles.cate}>Categories</Text>
      <View>
        <FlatList
          data={Categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={{
            marginTop: responsiveHeight(2),
          }}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => setactive(item.id)}
              key={item.id}
              style={active === item.id ? styles.active : styles.tag}>
              <Text
                style={
                  active === item.id
                    ? {
                        color: 'white',
                        fontFamily: FontFamily.Bold,
                        fontSize: responsiveFontSize(1.6),
                      }
                    : {
                        color: 'black',
                        fontFamily: FontFamily.Bold,
                        fontSize: responsiveFontSize(1.6),
                      }
                }>
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: responsiveHeight(5),
          }}>
          <Text
            style={{
              color: 'black',
              fontFamily: FontFamily.Bold,
              fontSize: responsiveFontSize(2.5),
            }}>
            Special Offers
          </Text>
          <TouchableOpacity>
            <Text style={{color: '#5C76F0', fontFamily: FontFamily.Semi_Bold}}>
              See All
            </Text>
          </TouchableOpacity>
        </View>
        <Image
          source={images.offer_image}
          style={{
            width: '100%',
            height: responsiveWidth(45),
            borderRadius: responsiveWidth(5),
            marginVertical: responsiveHeight(3),
            alignSelf: 'center',
          }}
        />
        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: responsiveHeight(2),
          }}>
          <Text
            style={{
              color: 'black',
              fontFamily: FontFamily.Bold,
              fontSize: responsiveFontSize(2.5),
            }}>
            Shops
          </Text>
          <TouchableOpacity>
            <Text style={{color: '#5C76F0', fontFamily: FontFamily.Semi_Bold}}>
              See All
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          scrollEnabled={false}
          data={Shops}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(NavigationStrings.PRODUCTS_LIST);
                }}
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
  },
  tag: {
    padding: responsiveWidth(3),
    paddingHorizontal: responsiveWidth(4),
    borderWidth: 1,
    borderColor: '#E6E6E6',
    borderRadius: responsiveWidth(6),
    marginHorizontal: responsiveWidth(1.5),
    marginVertical: responsiveHeight(1),
  },
  active: {
    padding: responsiveWidth(3),
    borderWidth: 1,
    borderColor: '#E6E6E6',
    paddingHorizontal: responsiveWidth(4),
    borderRadius: responsiveWidth(6),
    marginHorizontal: responsiveWidth(1.5),
    marginVertical: responsiveHeight(1),
    backgroundColor: '#4361EE',
  },
  shopImg: {
    width: '100%',
    height: responsiveWidth(55),
    borderRadius: responsiveWidth(3),
    marginVertical: responsiveHeight(2),
    alignSelf: 'center',
  },
  shoptitle: {
    fontSize: responsiveFontSize(2),
    color: '#fff',
    fontFamily: FontFamily.Semi_Bold,
  },
});
