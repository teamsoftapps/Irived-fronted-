import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  Pressable,
  ScrollView
} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveHeight
} from 'react-native-responsive-dimensions';
import profile from '../assets/profile.jpeg';
// import aa from "../assets"
import arrow from '../assets/arrow.png';
import language from '../assets/lang_icon.png';
import payment from '../assets/payment_icon.png';
import contact from '../assets/contact_icon.png';
import placeholder from '../assets/placeholder.png';
import search from '../assets/search.png';
import info from '../assets/info_icon.png';
import fav_icon from "../assets/fav_icon.png";
import { images } from '../utils';


const Profile_settings = [
  {
    icon: info,
    id: 1,
    name: 'Personal Information',
  },
  {
    icon: language,
    id: 2,
    name: 'Language',
  },
  {
    icon: fav_icon,
    id: 3,
    name: 'Favorites',
  },
  {
    icon: payment,
    id: 4,
    name: 'Payment Methods',
  },
  {
    icon: contact,
    id: 5,
    name: 'Contact Support',
  },
];

const renderItem = ({item}) => {
 
  return (
    <View style={{width: responsiveScreenWidth(80)}}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 30,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={item.icon} height={10} width={10} style={{}} />
          <Text
            style={{
              fontSize: responsiveFontSize(2),
              fontWeight: '600',
              marginLeft: 20,
              color: 'black',
            }}>
            {item.name}
          </Text>
        </View>
        <Image source={arrow} height={10} width={10} />
      </TouchableOpacity>
    </View>
  );
};

const Profile = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        marginTop:responsiveScreenHeight(7)
      }}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <View style={{gap:responsiveScreenHeight(15)}}>

        <View>
          
      <View style={{flexDirection: 'row', alignItems:"center"}}>
        <View style={styles.top}>
          <Image
            // source={profile}
            source={images.Profile}
            style={{
              width: 100,
              height: 100,
              borderRadius: 70,
            }}
            />
          <TouchableOpacity style={styles.editImage}></TouchableOpacity>
        </View>
        <Text style={styles.topText}>Steve Erickson</Text>
      </View>
      <View style={styles.searchView}>
        <TextInput
          placeholder="Search Settings"
          style={{
            width: responsiveScreenWidth(68),
          }}
          />
              <TouchableOpacity>
                
        <Image source={search} style={{ width: 22, height: 22, marginTop: 12 }} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={Profile_settings}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        />
        </View>
      <TouchableOpacity style={styles.pressable}>
        <Text style={{fontWeight: '600', color: 'white'}}>Track Order</Text>
      </TouchableOpacity>
</View>
        </ScrollView>
    </SafeAreaView>
  );
};
export default Profile;
const styles = StyleSheet.create({
  main:{flex:1, justifyContent:"space-between"},
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
    borderRadius: 70,
    borderWidth: 2,
    borderColor: '#B5C1F8',
    padding: 3,
    width: 110,
    height: 110,
  },
  topText: {
    fontSize: responsiveFontSize(4),
    fontWeight: '800',
    color: 'black',
    paddingTop: responsiveScreenHeight(1),
    marginLeft: responsiveScreenWidth(4.5),
    width: responsiveScreenWidth(40),
    alignItems: "center",
    justifyContent:"center"
  },
  editImage: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'blue',
    borderRadius: 20,
    width: 23,
    height: 23,
  },
  searchView: {
    backgroundColor: '#DDE1F8',
    paddingHorizontal: 16,
    height: 'auto',
    borderRadius: 70,
    flexDirection: 'row',
    marginTop: 20,
    justifyContent:"space-between",
    width: responsiveScreenWidth(80),
  },
});
