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

const ProductList = () => {
  const [heart, setheart] = useState(false);
  const [selectedHeading, setSelectedHeading] = useState(1);

  const storeData = [
    {
      id: 1,
      category: 'E-Liquids & Juices',
      products: [
        {
          id: 11,
          name: 'BlueBerry Blast',
          price: '$11.99',
          image: images.product,
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
          image: images.product,
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
          image: images.product,
        },
        {id: 32, name: 'Mango Tango', price: '$15.99', image: images.product1},
        {id: 33, name: 'Sour Punch', price: '$19.99', image: images.product2},
        {
          id: 34,
          name: 'RaspBerry Smoke',
          price: '$10.99',
          image: images.product,
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
          image: images.product,
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
          image: images.product,
        },
        {id: 52, name: 'Mango Tango', price: '$15.99', image: images.product1},
        {id: 53, name: 'Sour Punch', price: '$19.99', image: images.product2},
      ],
    },
  ];
  const flatListRef = useRef(null);
  const handleHeadingPress = index => {
    setSelectedHeading(index);
  };

  const scrollViewRef = useRef(null);
  const secondViewRef = useRef(null);
  const scrollToView = ref => {
    ref.current.measureLayout(
      scrollViewRef.current,
      (x, y) => {
        scrollViewRef.current.scrollTo({y, animated: true});
      },
      () => console.error('Measurement failed'),
    );
  };

  return (
    <WrapperContainer>
      <View style={styles.container1}>
        <TouchableOpacity style={{}}>
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
      <View style={{width: responsiveWidth(85), alignSelf: 'center'}}>
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
              width: responsiveWidth(20),
              height: responsiveWidth(20),
              borderRadius: 13,
            }}
          />
          <View style={{gap: responsiveHeight(1)}}>
            <Text
              style={{
                fontFamily: FontFamily.Extra_Bold,
                fontSize: responsiveFontSize(2.6),
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
              <Text style={{fontSize: responsiveFontSize(2), color: '#989898'}}>
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
              style={{height: responsiveWidth(5), width: responsiveWidth(5)}}
            />
            <Text
              style={{
                fontFamily: FontFamily.Bold,
                color: 'black',
                fontSize: responsiveFontSize(2),
              }}>
              4.7
            </Text>
            <Text style={{fontSize: responsiveFontSize(2), color: '#989898'}}>
              200+ ratings
            </Text>
          </View>
          <Text
            style={{
              color: '#4361EE',
              fontSize: responsiveFontSize(1.8),
              fontFamily: FontFamily.Medium,
            }}>
            See reviews
          </Text>
        </View>
      </View>
      <View
        style={{
          height: responsiveHeight(7),
          borderTopWidth: 1.5,
          borderBottomWidth: 1.5,
          borderColor: '#F0F0F0',
        }}>
        <FlatList
          data={storeData}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                handleHeadingPress(item.id);
                scrollToView(secondViewRef);
              }}
              style={{
                marginHorizontal: responsiveWidth(3),
                marginVertical: responsiveHeight(2.5),
              }}>
              <Text
                style={{
                  fontFamily: FontFamily.Bold,
                  color: item.id === selectedHeading ? '#4361EE' : 'black',
                }}>
                {item.category}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <ScrollView
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}
        style={{backgroundColor: '#F5F5F5'}}>
        <FlatList
          data={storeData}
          ref={flatListRef}
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
              <View style={{flex: 1}}>
                <FlatList
                  data={item.products}
                  renderItem={({item}) => (
                    <View key={item.id} style={[styles.product]}>
                      <Image
                        source={item.image}
                        style={{
                          width: responsiveWidth(40),
                          height: responsiveWidth(40),
                          backgroundColor: 'white',
                          borderRadius: 10,
                        }}
                      />
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <View>
                          <Text
                            numberOfLines={1}
                            style={{
                              fontFamily: FontFamily.Semi_Bold,
                              color: 'black',
                              fontSize: responsiveFontSize(2),
                              width: responsiveWidth(33),
                            }}>
                            {item.name}
                          </Text>
                          <Text
                            style={{
                              fontFamily: FontFamily.Bold,
                              fontSize: responsiveFontSize(2),
                              color: '#4361EE',
                            }}>
                            $12.67
                          </Text>
                        </View>
                        <View
                          ref={secondViewRef}
                          style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <TouchableOpacity
                            onPress={() => scrollToView(scrollViewRef)}
                            style={{
                              borderRadius: 40,
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
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  )}
                  numColumns={2}
                  contentContainerStyle={styles.container}
                />
              </View>
            </View>
          )}
        />
      </ScrollView>
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
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'center',
    // alignItems: "center",
  },
  product: {
    margin: responsiveWidth(1), // Adjust spacing between products
    marginVertical: responsiveHeight(1),
    width: responsiveWidth(40), // Adjust according to your need
  },
});

export default ProductList;
