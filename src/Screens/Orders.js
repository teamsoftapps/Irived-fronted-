import {
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
import {images} from '../utils';
import {Rating} from 'react-native-ratings';

const Orders = () => {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderComponent
          top_text="Review & Ratings"
          bottom_text="Vape Heaven"
          style={{backgroundColor: 'white'}}
          icon="close_icon"
        />
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              width: responsiveWidth(75),
              height: 'auto',
              borderBottomWidth: 0.5,
              borderBottomColor: '#959595',
              flexDirection: 'row',
              gap: responsiveWidth(2),
              paddingVertical: responsiveHeight(4),
            }}>
            <Image
              source={images.Profile}
              style={{
                width: responsiveWidth(12),
                height: responsiveWidth(12),
                borderRadius: responsiveWidth(10),
                marginTop: responsiveHeight(0.5),
              }}
            />
            <View style={{width: '80%', height: 'auto'}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems:"center"
                
                }}>
                <Text
                  style={{
                    fontSize: responsiveFontSize(2),
                    fontWeight: '700',
                    color: 'black',
                  }}>
                  Asim Munir
                </Text>
                <Text style={{color: 'grey', fontWeight: '600'}}>
                  9, May, 2023
                </Text>
              </View>
              <View style={{alignItems:"baseline"}}>
              <Rating
                onFinishRating={this.ratingCompleted}
                style={{backgroundColor:"none"}}
                imageSize={20}
                readonly
                startingValue={5}
                tintColor="#F5F5F5"
                style={{paddingVertical:responsiveHeight(1)}}
                />
                </View>
              <Text
                numberOfLines={3}
                style={{fontWeight: '500', color: '#959595'}}>
                The product was great! I absolutely the vape! It was definitely
                a worth it buy! The product was great! I absolutely loved the
                vape! It was definitely a worth it buy!
              </Text>
            </View>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              width: responsiveWidth(75),
              height: 'auto',
              borderBottomWidth: 0.5,
              borderBottomColor: '#959595',
              flexDirection: 'row',
              gap: responsiveWidth(2),
              paddingVertical: responsiveHeight(4),
            }}>
            <Image
              source={images.Profile}
              style={{
                width: responsiveWidth(12),
                height: responsiveWidth(12),
                borderRadius: responsiveWidth(10),
                marginTop: responsiveHeight(0.5),
              }}
            />
            <View style={{width: '80%', height: 'auto'}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems:"center"
                
                }}>
                <Text
                  style={{
                    fontSize: responsiveFontSize(2),
                    fontWeight: '700',
                    color: 'black',
                  }}>
                  Asim Munir
                </Text>
                <Text style={{color: 'grey', fontWeight: '600'}}>
                  9, May, 2023
                </Text>
              </View>
              <View style={{alignItems:"baseline"}}>
              <Rating
                onFinishRating={this.ratingCompleted}
                style={{backgroundColor:"none"}}
                imageSize={20}
                readonly
                startingValue={5}
                tintColor="#F5F5F5"
                style={{paddingVertical:responsiveHeight(1)}}
                />
                </View>
              <Text
                numberOfLines={3}
                style={{fontWeight: '500', color: '#959595'}}>
                The product was great! I absolutely the vape! It was definitely
                a worth it buy! The product was great! I absolutely loved the
                vape! It was definitely a worth it buy!
              </Text>
            </View>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              width: responsiveWidth(75),
              height: 'auto',
              borderBottomWidth: 0.5,
              borderBottomColor: '#959595',
              flexDirection: 'row',
              gap: responsiveWidth(2),
              paddingVertical: responsiveHeight(4),
            }}>
            <Image
              source={images.Profile}
              style={{
                width: responsiveWidth(12),
                height: responsiveWidth(12),
                borderRadius: responsiveWidth(10),
                marginTop: responsiveHeight(0.5),
              }}
            />
            <View style={{width: '80%', height: 'auto'}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems:"center"
                
                }}>
                <Text
                  style={{
                    fontSize: responsiveFontSize(2),
                    fontWeight: '700',
                    color: 'black',
                  }}>
                  Asim Munir
                </Text>
                <Text style={{color: 'grey', fontWeight: '600'}}>
                  9, May, 2023
                </Text>
              </View>
              <View style={{alignItems:"baseline"}}>
              <Rating
                onFinishRating={this.ratingCompleted}
                style={{backgroundColor:"none"}}
                imageSize={20}
                readonly
                startingValue={5}
                tintColor="#F5F5F5"
                style={{paddingVertical:responsiveHeight(1)}}
                />
                </View>
              <Text
                numberOfLines={3}
                style={{fontWeight: '500', color: '#959595'}}>
                The product was great! I absolutely the vape! It was definitely
                a worth it buy! The product was great! I absolutely loved the
                vape! It was definitely a worth it buy!
              </Text>
            </View>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              width: responsiveWidth(75),
              height: 'auto',
              borderBottomWidth: 0.5,
              borderBottomColor: '#959595',
              flexDirection: 'row',
              gap: responsiveWidth(2),
              paddingVertical: responsiveHeight(4),
            }}>
            <Image
              source={images.Profile}
              style={{
                width: responsiveWidth(12),
                height: responsiveWidth(12),
                borderRadius: responsiveWidth(10),
                marginTop: responsiveHeight(0.5),
              }}
            />
            <View style={{width: '80%', height: 'auto'}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems:"center"
                
                }}>
                <Text
                  style={{
                    fontSize: responsiveFontSize(2),
                    fontWeight: '700',
                    color: 'black',
                  }}>
                  Asim Munir
                </Text>
                <Text style={{color: 'grey', fontWeight: '600'}}>
                  9, May, 2023
                </Text>
              </View>
              <View style={{alignItems:"baseline"}}>
              <Rating
                onFinishRating={this.ratingCompleted}
                style={{backgroundColor:"none"}}
                imageSize={20}
                readonly
                startingValue={5}
                tintColor="#F5F5F5"
                style={{paddingVertical:responsiveHeight(1)}}
                />
                </View>
              <Text
                numberOfLines={3}
                style={{fontWeight: '500', color: '#959595'}}>
                The product was great! I absolutely the vape! It was definitely
                a worth it buy! The product was great! I absolutely loved the
                vape! It was definitely a worth it buy!
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Orders;

const styles = StyleSheet.create({});
