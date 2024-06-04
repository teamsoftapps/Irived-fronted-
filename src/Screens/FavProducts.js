import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import WrapperContainer from '../Components/WrapperContainer';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import {FontFamily, colors, images} from '../utils';
const storeData = [
  {
    id: 0,
    name: 'BlueBerry Blast',
    price: '$11.99',
    image: images.product,
  },
  {id: 1, name: 'Mango Tango', price: '$15.99', image: images.product1},
  {id: 2, name: 'Sour Punch', price: '$19.99', image: images.product2},
  {
    id: 3,
    name: 'RaspBerry Smoke',
    price: '$10.99',
    image: images.product,
  },
];
const FavProducts = () => {
  const navigation = useNavigation();
  const [selected, setselected] = useState(false);

  return (
    <WrapperContainer
      style={{
        paddingHorizontal: responsiveWidth(6),
      }}>
      <FlatList
        style={{marginTop: responsiveHeight(2)}}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          marginBottom: responsiveHeight(2),
        }}
        data={storeData}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {}}
            activeOpacity={0.9}
            key={item.id}
            style={{gap: responsiveHeight(1)}}>
            <TouchableOpacity
              activeOpacity={0.9}
              style={styles.heartView}
              onPress={() => {}}>
              <Image
                source={images.heart1}
                style={{
                  width: responsiveWidth(4),
                  height: responsiveWidth(4),
                  tintColor: '#fff',
                }}
              />
            </TouchableOpacity>
            <Image
              source={item.image}
              style={[
                styles.image,
                {backgroundColor: item.id % 2 === 0 ? 'white' : '#ececec'},
              ]}
            />
            <View style={styles.textview}>
              <View style={{gap: responsiveHeight(1), flex: 1}}>
                <Text numberOfLines={1} style={styles.name}>
                  {item.name}
                </Text>
                <Text
                  style={{
                    fontFamily: FontFamily.Bold,
                    fontSize: responsiveFontSize(1.8),
                    color: '#4361EE',
                  }}>
                  $12.67
                </Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TouchableOpacity activeOpacity={0.9} style={styles.addbtn}>
                  <Image
                    source={images.plus_slim}
                    style={{
                      width: responsiveWidth(3.5),
                      height: responsiveWidth(3.5),
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </WrapperContainer>
  );
};

export default FavProducts;

const styles = StyleSheet.create({
  heartView: {
    backgroundColor: colors.secondary,
    borderRadius: responsiveWidth(8),
    alignItems: 'center',
    justifyContent: 'center',
    width: responsiveWidth(8),
    height: responsiveWidth(8),
  },
  image: {
    width: responsiveWidth(35),
    height: responsiveWidth(35),

    borderRadius: responsiveWidth(3),
  },
  textview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: responsiveWidth(35),
  },
  name: {
    fontFamily: FontFamily.Semi_Bold,
    color: 'black',
    fontSize: responsiveFontSize(1.6),
  },
  addbtn: {
    borderRadius: responsiveWidth(30),
    backgroundColor: '#4361EE',
    padding: 5,
  },
});
