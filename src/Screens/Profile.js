import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { images } from '../utils';
import WrapperContainer from '../Components/WrapperContainer';
import ButtonComp from '../Components/ButtonComp';

const Profile_settings = [
  {
    icon: images.info,
    id: 1,
    name: 'Personal Information',
  },
  {
    icon: images.language,
    id: 2,
    name: 'Language',
  },
  {
    icon: images.favourite,
    id: 3,
    name: 'Favorites',
  },
  {
    icon: images.payment,
    id: 4,
    name: 'Payment Methods',
  },
  {
    icon: images.contact,
    id: 5,
    name: 'Contact Support',
  },
];

const renderItem = ({ item }) => {
  return (
    <TouchableOpacity
      style={styles.option_container}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          source={item.icon}
          style={{
            height: responsiveHeight(5),
            width: responsiveHeight(5),
          }}
        />
        <Text
          style={styles.option_text}>
          {item.name}
        </Text>
      </View>
      <Image
        source={images.arrow}
        style={{
          width: responsiveWidth(3),
          height: responsiveHeight(2),
          resizeMode: 'contain',
        }}
      />
    </TouchableOpacity>
  );
};

const Profile = () => {
  return (
    <WrapperContainer style={{ alignItems: 'center' }}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flexGrow: 1 }}>
        <View
          style={{
            gap: responsiveScreenHeight(15),
            marginTop: responsiveHeight(5),
          }}>
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={styles.top}>
                <Image
                  source={images.Profile}
                  style={styles.profile_image}
                />
                <TouchableOpacity style={styles.editImage}>
                  <Image
                    source={images.editpro}
                    style={{
                      width: responsiveWidth(4),
                      height: responsiveHeight(2),
                      resizeMode: 'contain',
                    }}
                  />
                </TouchableOpacity>
              </View>
              <Text numberOfLines={2} style={styles.topText}>
                Steve Erickson
              </Text>
            </View>
            <View style={styles.searchView}>
              <TextInput
                placeholder="Search Settings"
                style={{
                  flex: 1, fontSize: responsiveFontSize(1.6)
                }}
              />
              <TouchableOpacity>
                <Image
                  source={images.search}
                  style={{
                    width: responsiveWidth(5),
                    height: responsiveHeight(3),
                    resizeMode: 'contain',
                  }}
                />
              </TouchableOpacity>
            </View>

            <FlatList
              data={Profile_settings}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>
          <ButtonComp text={'Logout'} />
        </View>
      </ScrollView>
    </WrapperContainer>
  );
};
export default Profile;
const styles = StyleSheet.create({
  profile_image: {
    width: responsiveHeight(15),
    height: responsiveHeight(15),
    borderRadius: responsiveHeight(15),
    borderWidth: responsiveHeight(0.4),
    borderColor: '#fff',
  },
  option_text: {
    fontSize: responsiveFontSize(2),
    fontWeight: '600',
    marginLeft: responsiveWidth(4),
    color: 'black',
  },
  option_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: responsiveHeight(4),
  },
  main: { justifyContent: 'space-between' },
  pressable: {
    backgroundColor: '#4361EE',
    width: responsiveScreenWidth(80),
    height: 50,
    borderRadius: 70,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: responsiveScreenWidth(4),
    justifyContent: 'center',
    marginBottom: responsiveScreenHeight(4),
  },
  top: {
    borderRadius: responsiveHeight(15),
    borderWidth: responsiveHeight(0.3),
    borderColor: '#B5C1F8',
    padding: responsiveHeight(1),
    width: responsiveHeight(16),
    height: responsiveHeight(16),
    alignItems: 'center',
    justifyContent: 'center',
  },
  topText: {
    fontSize: responsiveFontSize(4),
    fontWeight: '800',
    color: 'black',
    paddingTop: responsiveScreenHeight(1),
    marginLeft: responsiveScreenWidth(4.5),
    width: responsiveScreenWidth(40),
    alignItems: 'center',
    justifyContent: 'center',
  },
  editImage: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#4361EE',
    borderRadius: responsiveWidth(5),
    width: responsiveHeight(4),
    height: responsiveHeight(4),
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchView: {
    backgroundColor: '#DDE1F8',
    paddingHorizontal: responsiveWidth(5),
    height: responsiveHeight(7),
    borderRadius: responsiveWidth(7),
    flexDirection: 'row',
    marginVertical: responsiveHeight(2.5),
    justifyContent: 'space-between',
    width: responsiveScreenWidth(80),
    alignItems: 'center',
  },
});
