import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import HeaderComponent from '../Components/Headers/HeaderComponent';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { FontFamily, images } from '../utils';
import { Rating } from 'react-native-ratings';
import WrapperContainer from '../Components/WrapperContainer';

const ratingProps = {
  onFinishRating: this.ratingCompleted,
  style: { paddingVertical: responsiveHeight(1) },
  imageSize: 20,
  readonly: true,
  // startingValue: 5,
  tintColor: "#F5F5F5"
};
const HeaderProps = {
  top_text: "Review & Ratings",
  bottom_text: "Vape Heaven",
  style: { backgroundColor: 'white' },
  icon: "close_icon"
}
const reviews = [
  {
    profile_image: images.user1,
    id: 0,
    name: "Ronti Jordan",
    stars: 4,
    date: "10, May, 2023",
    review: "The product was great! I absolutely the vape! It was definitely a worth it buy! The product was great! I absolutely loved the vape! It was definitely a worth it buy!"
  },
  {
    profile_image: images.user2,
    id: 1,
    name: "Jenilliya Cartoos",
    stars: 4,
    date: "9, May, 2023",
    review: "The product was great! I absolutely the vape! It was definitely a worth it buy! The product was great! I absolutely loved the vape! It was definitely a worth it buy!"
  }, {
    profile_image: images.user3,
    id: 2,
    name: "Anjelina Joli",
    stars: 5,
    date: "3, Jan, 2023",
    review: "The product was great! I absolutely the vape! It was definitely a worth it buy! The product was great! I absolutely loved the vape! It was definitely a worth it buy!"
  }, {
    profile_image: images.user1,
    id: 3,
    name: "Ronti Jordan",
    stars: 2,
    date: "1, Jan, 2023",
    review: "The product was great! I absolutely the vape! It was definitely a worth it buy! The product was great! I absolutely loved the vape! It was definitely a worth it buy!"
  }
]

const Orders = () => {
  return (
    <WrapperContainer style={{ backgroundColor: "#F5F5F5" }}>
      <HeaderComponent
        {...HeaderProps}
      />
      <View style={styles.review_wrapper}>
        <FlatList
          data={reviews}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View
              style={styles.review_container}>
              <Image
                source={images.user1}
                style={styles.image}
              />
              <View style={{ width: '80%', height: 'auto' }}>
                <View
                  style={styles.name_container}>
                  <Text
                    style={styles.name}>
                    {item.name}
                  </Text>
                  <Text style={styles.date}>
                    {item.date}
                  </Text>
                </View>
                <View style={{ alignItems: "baseline" }}>
                  <Rating
                    {...ratingProps}
                    startingValue={item.stars}
                  />
                </View>
                <Text
                  numberOfLines={3}
                  style={styles.description}>
                  {item.review}
                </Text>
              </View>
            </View>
          )}
        />

      </View>
    </WrapperContainer>

  );
};

export default Orders;

const styles = StyleSheet.create({
  description: { fontFamily: FontFamily.Semi_Bold, lineHeight: responsiveHeight(2.3), color: '#959595' },
  review_wrapper: { alignItems: 'center', height: "auto" },
  name: {
    fontSize: responsiveFontSize(1.8),
    fontFamily: FontFamily.Semi_Bold,
    color: 'black',
  },
  date: {
    color: 'grey',
    fontFamily: FontFamily.Semi_Bold,
    fontSize: responsiveFontSize(1.5)
  },
  name_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center"
  },
  review_container: {
    width: responsiveWidth(85),
    height: 'auto',
    borderBottomWidth: 0.5,
    borderBottomColor: '#959595',
    flexDirection: 'row',
    gap: responsiveWidth(4),
    paddingVertical: responsiveHeight(4),
  },
  image: {
    width: responsiveWidth(12),
    height: responsiveWidth(12),
    borderRadius: responsiveWidth(10),
    marginTop: responsiveHeight(0.5),
  }
});
