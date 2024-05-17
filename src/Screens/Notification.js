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

import WrapperContainer from '../Components/WrapperContainer';
import HeaderComponent from '../Components/Headers/HeaderComponent';
import {images} from '../utils';
import {useNavigation} from '@react-navigation/native';

const notification = [
  {
    title: 'Order Confirmation',
    date: '19, Dec, 2023 | 20:50 PM',
    icon: images.shop,
    id: 1,
    new: true,
    description:
      ' Your Vape order has been confirmed! Sit back and relax while we prepare your items for delivery. 🛵',
  },
  {
    title: 'Special Offer Alert',
    date: '19, Jan, 2024 | 18:40 PM',
    icon: images.discount,
    id: 2,
    new: false,
    description:
      ' Your order has been confirmed! Sit back and relax while we prepare your items for delivery. 🛵',
  },
  {
    title: 'Feedback Request',
    date: '19, Jan, 2024 | 18:40 PM',
    icon: images.chat,
    id: 3,
    new: true,
    description:
      ' Your order has been confirmed! Sit back and relax while we prepare your items for delivery. 🛵',
  },
  {
    title: 'Delivery Delay Notice',
    date: '19, Jan, 2024 | 18:40 PM',
    icon: images.scooter,
    id: 4,
    new: false,
    description:
      ' Your order has been confirmed! Sit back and relax while we prepare your items for delivery. 🛵',
  },
  {
    title: 'Delivery Delay Notice',
    date: '19, Jan, 2024 | 18:40 PM',
    icon: images.scooter,
    id: 5,
    new: false,
    description:
      ' Your order has been confirmed! Sit back and relax while we prepare your items for delivery. 🛵 Your order has been confirmed! Sit back and relax while we prepare your items for delivery. 🛵',
  },
];

const renderItem = ({item}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.notification}>
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
              width: responsiveHeight(7),
              height: responsiveHeight(7),
            }}
          />
          <View style={{marginLeft: responsiveWidth(3)}}>
            <Text style={styles.heading}>{item.title}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </View>
        </View>
        {item.new && (
          <View
            style={{
              width: responsiveWidth(11),
              height: responsiveHeight(3),
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#4361EE',
              borderRadius: responsiveWidth(2),
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: responsiveFontSize(1.4),
              }}>
              New
            </Text>
          </View>
        )}
      </View>
      <View style={{marginVertical: responsiveHeight(2)}}>
        <Text
          numberOfLines={4}
          style={{color: 'black', fontSize: responsiveFontSize(1.8)}}>
          {item.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const Notification = () => {
  const navigation = useNavigation();
  return (
    <WrapperContainer>
      <HeaderComponent text="Notification" />
      <View style={styles.main}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={notification}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </WrapperContainer>
  );
};

export default Notification;

const styles = StyleSheet.create({
  notification: {
    backgroundColor: '#fff',
    width: responsiveWidth(82),
    borderRadius: responsiveWidth(4),
    paddingHorizontal: responsiveWidth(4),
    paddingVertical: responsiveHeight(2),
    margin: responsiveHeight(1),
    elevation: responsiveWidth(0.5),
  },

  main: {
    flex: 1,
    alignItems: 'center',
  },
  heading: {
    fontWeight: '600',
    fontSize: responsiveFontSize(2.2),
    color: '#000',
  },
  date: {
    color: '#D0D0D0',
    fontSize: responsiveFontSize(1.7),
  },
});
