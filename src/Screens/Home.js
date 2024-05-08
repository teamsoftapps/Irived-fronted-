import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import chat from "../assets/chat.png"
import discount from '../assets/discount.png';
import shop from '../assets/shop.png';
import scooter from '../assets/scooter.png';
import back from "../assets/arrow-back.png"


const notification = [
  {
    title: 'Order Confirmation',
    date: '19, Dec, 2023 | 20:50 PM',
    icon: shop,
    id: 1,
    new: true,
    description:
      ' Your order has been confirmed! Sit back and relax while we prepare your items for delivery. 🛵',
  },
  {
    title: 'Special Offer Alert',
    date: '19, Jan, 2024 | 18:40 PM',
    icon: discount,
    id: 2,
    new: false,
    description:
      ' Your order has been confirmed! Sit back and relax while we prepare your items for delivery. 🛵',
  },
  {
    title: 'Feedback Request',
    date: '19, Jan, 2024 | 18:40 PM',
    icon: chat,
    id: 3,
    new: true,
    description:
      ' Your order has been confirmed! Sit back and relax while we prepare your items for delivery. 🛵',
  },
  {
    title: 'Delivery Delay Notice',
    date: '19, Jan, 2024 | 18:40 PM',
    icon: scooter,
    id: 4,
    new: false,
    description:
      ' Your order has been confirmed! Sit back and relax while we prepare your items for delivery. 🛵',
  },
  {
    title: 'Delivery Delay Notice',
    date: '19, Jan, 2024 | 18:40 PM',
    icon: scooter,
    id: 5,
    new: false,
    description:
      ' Your order has been confirmed! Sit back and relax while we prepare your items for delivery. 🛵',
  },
];

const renderItem = ({item}) => {
 
  return (
    <TouchableOpacity style={styles.notification}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={item.icon}
            style={{
              width: 50,
              height: 50,
            }}
          />
          <View style={{marginLeft: 10}}>
            <Text style={styles.heading}>{item.title}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </View>
        </View>
        {item.new && (
          <Text
            style={{
              color: 'white',
              backgroundColor: '#4361EE',
              borderRadius: 25,
              width: 34,
              height: 17,
              textAlign: 'center',
              fontSize:11
            }}>
            New
          </Text>
        )}
      </View>
      <View style={{marginTop: 14}}>
        <Text style={{color: 'black'}}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Profile = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F5F5F5'}}>
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
        <View style={styles.main}>
          <View style={styles.topbar}>
            <TouchableOpacity>
              <Image source={back} style={{width: 24, height: 20}} />
            </TouchableOpacity>
            <View
              style={{
                width: responsiveWidth(70),
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: responsiveFontSize(2.5),
                  color: 'black',
                  fontWeight: '600',
                }}>
                Notification
              </Text>
            </View>
          </View>
          <FlatList
            data={notification}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  notification: {
    backgroundColor: '#FFFFFF',
    width: responsiveWidth(80),
    borderRadius: 15,
    paddingHorizontal: responsiveWidth(4),
    paddingVertical: responsiveHeight(2),
    marginTop:20
  }, topbar: {
    width: responsiveWidth(83),
    flexDirection: "row",
    alignItems:"center"
  },
  main: {
    flex: 1,
    alignItems: 'center',
    marginTop:20
  },
  heading: {
    fontWeight: '600',
    fontSize: responsiveFontSize(2.4),
    color: 'black',
  },
  date: {
    color: '#D0D0D0',
  },
});
