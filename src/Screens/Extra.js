import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  SafeAreaView,
  ScrollView,
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
const Home = () => {
  const navigation = useNavigation();
  const [active, setactive] = useState(0);
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
        style={{
          marginTop: responsiveHeight(2),
          marginBottom: responsiveHeight(3),
        }}
        placeholder="Search products"
      />

      <Text style={styles.cate}>Categories</Text>
      <View>
        <FlatList
          data={Categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            height: 55,
            flexDirection: 'row',
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
                    ? {color: 'white', fontFamily: FontFamily.Bold}
                    : {color: 'black', fontFamily: FontFamily.Bold}
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
            width: responsiveWidth(88),
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
            width: responsiveWidth(90),
            height: responsiveHeight(20),
            borderRadius: 25,
            marginVertical: responsiveHeight(3),
            alignSelf: 'center',
          }}
          resizeMethod="cover"
        />
        <View
          style={{
            width: responsiveWidth(88),
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
            Shop
          </Text>
          <TouchableOpacity>
            <Text style={{color: '#5C76F0', fontFamily: FontFamily.Semi_Bold}}>
              See All
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{position: 'relative'}}>
          <View
            style={{
              position: 'absolute',
              zIndex: 2,
              paddingHorizontal: responsiveHeight(1.6),
              paddingVertical: responsiveWidth(1.2),
              borderRadius: 10,
              backgroundColor: '#4361EE',
              flexDirection: 'row',
              top: 45,
              right: 23,
              alignItems: 'center',
              gap: responsiveWidth(2),
            }}>
            <Image
              source={images.nav}
              style={{width: responsiveWidth(4), height: responsiveHeight(2)}}
            />
            <Text
              style={{
                zIndex: 3,
                color: 'white',
                fontFamily: FontFamily.Medium,
              }}>
              140 m
            </Text>
          </View>
          <View
            style={{
              position: 'absolute',
              zIndex: 2,
              paddingHorizontal: responsiveHeight(1.6),
              paddingVertical: responsiveWidth(1.2),
              borderRadius: 10,
              backgroundColor: '#4361EE',
              flexDirection: 'row',
              bottom: 45,
              right: 23,
              alignItems: 'center',
              gap: responsiveWidth(2),
            }}>
            <Image
              source={images.star}
              style={{width: responsiveWidth(4), height: responsiveHeight(2)}}
            />
            <Text
              style={{
                zIndex: 3,
                color: 'white',
                fontFamily: FontFamily.Medium,
              }}>
              4.7
            </Text>
          </View>
          <View
            style={{
              position: 'absolute',
              bottom: 45,
              flexDirection: 'row',
              left: 23,
              zIndex: 3,
              gap: 4,
            }}>
            <Image source={images.location} tintColor={'white'} />
            <Text
              style={{
                fontSize: responsiveFontSize(1.5),
                color: 'white',
                fontFamily: FontFamily.Bold,
              }}>
              123, Main Street, CityVille
            </Text>
          </View>
          <Text
            style={{
              position: 'absolute',
              bottom: 70,
              fontSize: responsiveFontSize(2),
              left: 23,
              zIndex: 3,
              color: 'white',
              fontFamily: FontFamily.Bold,
            }}>
            Vape Heaven
          </Text>
          <Image
            source={images.store}
            style={{
              width: responsiveWidth(90),
              height: responsiveHeight(25),
              borderRadius: 25,
              marginVertical: responsiveHeight(3),
              alignSelf: 'center',
            }}
            resizeMethod="cover"
          />
        </View>
        <View style={{position: 'relative'}}>
          <View
            style={{
              position: 'absolute',
              zIndex: 2,
              paddingHorizontal: responsiveHeight(1.6),
              paddingVertical: responsiveWidth(1.2),
              borderRadius: 10,
              backgroundColor: '#4361EE',
              flexDirection: 'row',
              top: 45,
              right: 23,
              alignItems: 'center',
              gap: responsiveWidth(2),
            }}>
            <Image
              source={images.nav}
              style={{width: responsiveWidth(4), height: responsiveHeight(2)}}
            />
            <Text
              style={{
                zIndex: 3,
                color: 'white',
                fontFamily: FontFamily.Medium,
              }}>
              140 m
            </Text>
          </View>
          <View
            style={{
              position: 'absolute',
              zIndex: 2,
              paddingHorizontal: responsiveHeight(1.6),
              paddingVertical: responsiveWidth(1.2),
              borderRadius: 10,
              backgroundColor: '#4361EE',
              flexDirection: 'row',
              bottom: 45,
              right: 23,
              alignItems: 'center',
              gap: responsiveWidth(2),
            }}>
            <Image
              source={images.star}
              style={{width: responsiveWidth(4), height: responsiveHeight(2)}}
            />
            <Text
              style={{
                zIndex: 3,
                color: 'white',
                fontFamily: FontFamily.Medium,
              }}>
              4.7
            </Text>
          </View>
          <View
            style={{
              position: 'absolute',
              bottom: 45,
              flexDirection: 'row',
              left: 23,
              zIndex: 3,
              gap: 4,
            }}>
            <Image source={images.location} tintColor={'white'} />
            <Text
              style={{
                fontSize: responsiveFontSize(1.5),
                color: 'white',
                fontFamily: FontFamily.Bold,
              }}>
              123, Main Street, CityVille
            </Text>
          </View>
          <Text
            style={{
              position: 'absolute',
              bottom: 70,
              fontSize: responsiveFontSize(2),
              left: 23,
              zIndex: 3,
              color: 'white',
              fontFamily: FontFamily.Bold,
            }}>
            Vape Heaven
          </Text>
          <Image
            source={images.vapshop}
            style={{
              width: responsiveWidth(90),
              height: responsiveHeight(25),
              borderRadius: 25,
              marginVertical: responsiveHeight(3),
              alignSelf: 'center',
            }}
            resizeMethod="cover"
          />
        </View>
        <View style={{position: 'relative'}}>
          <View
            style={{
              position: 'absolute',
              zIndex: 2,
              paddingHorizontal: responsiveHeight(1.6),
              paddingVertical: responsiveWidth(1.2),
              borderRadius: 10,
              backgroundColor: '#4361EE',
              flexDirection: 'row',
              top: 45,
              right: 23,
              alignItems: 'center',
              gap: responsiveWidth(2),
            }}>
            <Image
              source={images.nav}
              style={{width: responsiveWidth(4), height: responsiveHeight(2)}}
            />
            <Text
              style={{
                zIndex: 3,
                color: 'white',
                fontFamily: FontFamily.Medium,
              }}>
              140 m
            </Text>
          </View>
          <View
            style={{
              position: 'absolute',
              zIndex: 2,
              paddingHorizontal: responsiveHeight(1.6),
              paddingVertical: responsiveWidth(1.2),
              borderRadius: 10,
              backgroundColor: '#4361EE',
              flexDirection: 'row',
              bottom: 45,
              right: 23,
              alignItems: 'center',
              gap: responsiveWidth(2),
            }}>
            <Image
              source={images.star}
              style={{width: responsiveWidth(4), height: responsiveHeight(2)}}
            />
            <Text
              style={{
                zIndex: 3,
                color: 'white',
                fontFamily: FontFamily.Medium,
              }}>
              4.7
            </Text>
          </View>
          <View
            style={{
              position: 'absolute',
              bottom: 45,
              flexDirection: 'row',
              left: 23,
              zIndex: 3,
              gap: 4,
            }}>
            <Image source={images.location} tintColor={'white'} />
            <Text
              style={{
                fontSize: responsiveFontSize(1.5),
                color: 'white',
                fontFamily: FontFamily.Bold,
              }}>
              123, Main Street, CityVille
            </Text>
          </View>
          <Text
            style={{
              position: 'absolute',
              bottom: 70,
              fontSize: responsiveFontSize(2),
              left: 23,
              zIndex: 3,
              color: 'white',
              fontFamily: FontFamily.Bold,
            }}>
            Vape Heaven
          </Text>
          <Image
            source={images.vapshop1}
            style={{
              width: responsiveWidth(90),
              height: responsiveHeight(25),
              borderRadius: 25,
              marginVertical: responsiveHeight(3),
              alignSelf: 'center',
            }}
            resizeMethod="cover"
          />
        </View>
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
    padding: 13,
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 18,
    borderRadius: 30,
    marginHorizontal: 6,
    marginVertical: 4,
  },
  active: {
    padding: 13,
    borderWidth: 0.5,
    borderColor: 'gray',
    paddingHorizontal: 18,
    borderRadius: 30,
    marginHorizontal: 2.5,
    marginVertical: 4,
    backgroundColor: '#4361EE',
  },
});
