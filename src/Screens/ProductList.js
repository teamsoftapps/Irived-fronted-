import React, {useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
  ScrollView,
} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import WrapperContainer from '../Components/WrapperContainer';
import {FontFamily, images} from '../utils';
import {useNavigation} from '@react-navigation/native';
import NavigationStrings from '../Navigations/NavigationStrings';
import {useSelector} from 'react-redux';

const ProductList = () => {
  const CartItem = useSelector(state => state.Cart.items);
  console.log('Cart ', CartItem);
  const storeData = [
    {
      id: 1,
      category: 'E-Liquids & Juices',
      products: [
        {
          id: 11,
          name: 'BlueBerry Blasts',
          price: '$11.99',
          Image: [
            {image: images.product, id: 0},
            {image: images.product1, id: 1},
            {image: images.product2, id: 2},
          ],
        },
        {id: 12, name: 'Mango Tango', price: '$15.99', image: images.product1},
      ],
    },
    {
      id: 2,
      category: 'Mods & Tanks',
      products: [
        {
          id: 21,
          name: 'BlueBerry Blast',
          price: '$11.99',
          Image: [
            {image: images.product, id: 0},
            {image: images.product1, id: 1},
            {image: images.product2, id: 2},
          ],
        },
        {id: 22, name: 'Mango Tango', price: '$15.99', image: images.product1},
      ],
    },
    {
      id: 3,
      category: 'Pod Systems',
      products: [
        {
          id: 31,
          name: 'BlueBerry Blast',
          price: '$11.99',
          Image: [
            {image: images.product, id: 0},
            {image: images.product1, id: 1},
            {image: images.product2, id: 2},
          ],
        },
        {id: 32, name: 'Mango Tango', price: '$15.99', image: images.product1},
        {id: 33, name: 'Sour Punch', price: '$19.99', image: images.product2},
        {
          id: 34,
          name: 'RaspBerry Smoke',
          price: '$10.99',
          Image: [
            {image: images.product, id: 0},
            {image: images.product1, id: 1},
            {image: images.product2, id: 2},
          ],
        },
      ],
    },
    {
      id: 4,
      category: 'Accessories',
      products: [
        {
          id: 41,
          name: 'BlueBerry Blast',
          price: '$11.99',
          Image: [
            {image: images.product, id: 0},
            {image: images.product1, id: 1},
            {image: images.product2, id: 2},
          ],
        },
        {id: 42, name: 'Mango Tango', price: '$15.99', image: images.product1},
      ],
    },
    {
      id: 5,
      category: 'Nicotine Salts',
      products: [
        {
          id: 51,
          name: 'BlueBerry Blast',
          price: '$11.99',
          Image: [
            {image: images.product, id: 0},
            {image: images.product1, id: 1},
            {image: images.product2, id: 2},
          ],
        },
        {id: 52, name: 'Mango Tango', price: '$15.99', image: images.product1},
        {id: 53, name: 'Sour Punch', price: '$19.99', image: images.product2},
      ],
    },
  ];

  const flatListRef = useRef(null);
  const [selectedHeading, setSelectedHeading] = useState(0);
  const [heart, setheart] = useState(false);
  const navigation = useNavigation();
  const handleHeadingPress = index => {
    setSelectedHeading(index);
    scrollToView(index);
  };

  const scrollToView = index => {
    flatListRef.current?.scrollToIndex({index, animated: true});
  };

  return (
    <WrapperContainer style={{flex: 1}}>
      <View style={styles.container1}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{}}>
          <Image
            source={images.back}
            style={{
              width: responsiveWidth(6),
              height: responsiveHeight(4),
              resizeMode: 'contain',
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            gap: responsiveWidth(6),
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => setheart(!heart)}>
            <Image
              source={heart ? images.heart_filled : images.heart}
              style={{
                width: responsiveWidth(7),
                height: responsiveHeight(8),
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{}}>
            <Image
              source={images.search}
              style={{
                width: responsiveWidth(6),
                height: responsiveHeight(6),
                resizeMode: 'contain',
                tintColor: 'gray',
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          width: responsiveWidth(85),
          alignSelf: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: responsiveWidth(3),
          }}>
          <Image
            resizeMode="fit"
            source={images.store}
            style={{
              width: responsiveWidth(15),
              height: responsiveWidth(15),
              borderRadius: responsiveWidth(2),
            }}
          />
          <View style={{gap: responsiveHeight(1)}}>
            <Text
              style={{
                fontFamily: FontFamily.Extra_Bold,
                fontSize: responsiveFontSize(2.2),
                color: 'black',
              }}>
              Vape Heaven
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: responsiveWidth(1),
              }}>
              <Image
                source={images.location}
                style={{width: responsiveWidth(3), height: responsiveWidth(4)}}
              />
              <Text
                style={{
                  fontSize: responsiveFontSize(1.5),
                  color: '#989898',
                  fontFamily: FontFamily.Medium,
                }}>
                123 Main Street, Cityville
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: responsiveHeight(3),
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: responsiveWidth(3),
            }}>
            <Image
              source={images.star}
              style={{
                height: responsiveWidth(4),
                width: responsiveWidth(4),
                tintColor: '#5C76F0',
              }}
            />
            <Text
              style={{
                fontFamily: FontFamily.Bold,
                color: 'black',
                fontSize: responsiveFontSize(1.8),
              }}>
              4.7
            </Text>
            <Text
              style={{
                fontSize: responsiveFontSize(1.5),
                color: '#989898',
                fontFamily: FontFamily.Regular,
              }}>
              200+ ratings
            </Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              navigation.navigate(NavigationStrings.REVIEW);
            }}>
            <Text
              style={{
                color: '#4361EE',
                fontSize: responsiveFontSize(1.8),
                fontFamily: FontFamily.Medium,
              }}>
              See reviews
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          borderTopWidth: responsiveHeight(0.2),
          borderBottomWidth: responsiveHeight(0.2),
          borderColor: '#F0F0F0',
        }}>
        <FlatList
          data={[
            'E-Liquid & Juice',
            'Mods & Tanks',
            'Pod Systems',
            'Accessories',
            'Nicotine Salts',
          ]}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                touchSoundDisabled
                onPress={() => {
                  handleHeadingPress(index);
                }}
                style={{
                  marginHorizontal: responsiveWidth(3.5),
                  borderBottomWidth:
                    index === selectedHeading
                      ? responsiveHeight(0.3)
                      : responsiveHeight(0.2),
                  paddingVertical: responsiveHeight(2),
                  borderColor: index === selectedHeading ? '#4361EE' : '#fff',
                }}>
                <Text
                  style={{
                    fontSize: responsiveFontSize(1.8),
                    fontFamily: FontFamily.Bold,
                    color: index === selectedHeading ? '#4361EE' : 'black',
                  }}>
                  {item}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: '#F0F0F0',
          marginTop: responsiveHeight(2),
        }}>
        <FlatList
          ref={flatListRef}
          data={storeData}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <View
              key={item.id}
              style={{
                width: responsiveWidth(85),
                alignSelf: 'center',
                marginVertical: responsiveHeight(2),
              }}>
              <Text
                style={{
                  fontFamily: FontFamily.Extra_Bold,
                  fontSize: responsiveFontSize(2),
                  color: 'black',
                  marginBottom: responsiveHeight(2),
                }}>
                {item.category}
              </Text>

              <FlatList
                numColumns={2}
                columnWrapperStyle={{
                  justifyContent: 'space-between',
                  marginBottom: responsiveHeight(2),
                }}
                data={item.products}
                renderItem={({item}) => (
                  <TouchableOpacity
                    onPress={() => {
                      console.log('New', item.Image);
                      // navigation.navigate(NavigationStrings.PRODUCT_DETAILS, {
                      //   data: item,
                      // });
                    }}
                    activeOpacity={0.9}
                    key={item.id}
                    style={{gap: responsiveHeight(1)}}>
                    {/* {item?.Image[0]?.map((item, index) => {
                      // if (item.id !== 0) {
                      //   return;
                      // }
                      return ( */}
                    {/* <Image
                      source={item?.Image[1].image}
                      style={{
                        width: responsiveWidth(35),
                        height: responsiveWidth(35),
                        backgroundColor: 'white',
                        borderRadius: responsiveWidth(3),
                      }}
                    /> */}
                    {/* );
                    })} */}

                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: responsiveWidth(35),
                      }}>
                      <View style={{gap: responsiveHeight(1), flex: 1}}>
                        <Text
                          numberOfLines={1}
                          style={{
                            fontFamily: FontFamily.Semi_Bold,
                            color: 'black',
                            fontSize: responsiveFontSize(1.6),
                          }}>
                          {item.name}
                        </Text>
                        <Text
                          style={{
                            fontFamily: FontFamily.Bold,
                            fontSize: responsiveFontSize(1.8),
                            color: '#4361EE',
                          }}>
                          {item.price}
                        </Text>
                      </View>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <View
                          activeOpacity={0.9}
                          style={{
                            borderRadius: responsiveWidth(30),
                            backgroundColor: '#4361EE',
                            padding: 5,
                          }}>
                          <Image
                            source={images.plus_slim}
                            style={{
                              width: responsiveWidth(3.5),
                              height: responsiveWidth(3.5),
                            }}
                          />
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View>
          )}
        />
      </View>
    </WrapperContainer>
  );
};
const styles = StyleSheet.create({
  container1: {
    height: responsiveHeight(10),
    paddingHorizontal: responsiveWidth(8),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default ProductList;
