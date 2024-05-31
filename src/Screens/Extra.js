import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ModalComponent from '../Components/ModalComponent';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {FontFamily, colors, images} from '../utils';
import ButtonComp from '../Components/ButtonComp';

const Extra = () => {
  return (
    <View style={{flex: 1}}>
      <Text>Extra</Text>
      {/* <ModalComponent isVisible={true} style={{}}>
        <View
          style={{
            backgroundColor: '#fff',
            height: responsiveHeight(22),
            borderRadius: responsiveHeight(1),
            paddingHorizontal: responsiveWidth(4),
            paddingTop: responsiveHeight(3),
            width: responsiveWidth(80),
            alignSelf: 'center',
            justifyContent: 'center',
            gap: responsiveHeight(2),
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={styles.Heading}>Remove Product</Text>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                width: responsiveWidth(6),
                height: responsiveWidth(6),
                borderRadius: responsiveWidth(5),
                backgroundColor: '#d7d7d7',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={images.close_icon}
                style={{
                  width: responsiveWidth(2.5),
                  height: responsiveHeight(2.5),
                }}
              />
            </TouchableOpacity>
          </View>

          <Text
            style={{
              fontFamily: FontFamily.Semi_Bold,

              fontSize: responsiveFontSize(1.8),
            }}>
            Remove item from cart?
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <ButtonComp
              style={{
                width: responsiveWidth(35),
                height: responsiveHeight(6),
                backgroundColor: '#d7d7d7',
              }}
              textstyle={{color: '#000'}}
              text="Cancel"
            />
            <ButtonComp
              style={{width: responsiveWidth(35), height: responsiveHeight(6)}}
              text="Remove"
            />
          </View>
        </View>
      </ModalComponent> */}
      <ModalComponent>
        <View
          style={{
            backgroundColor: '#fff',
            height: responsiveHeight(50),
            borderRadius: responsiveHeight(3),
            paddingHorizontal: responsiveWidth(4),
            paddingTop: responsiveHeight(3),
            width: responsiveWidth(80),
            alignSelf: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              width: responsiveWidth(6),
              height: responsiveWidth(6),
              borderRadius: responsiveWidth(5),
              backgroundColor: '#d7d7d7',
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'flex-end',
            }}>
            <Image
              source={images.close_icon}
              style={{
                width: responsiveWidth(2.5),
                height: responsiveHeight(2.5),
              }}
            />
          </TouchableOpacity>
          <View
            style={{
              gap: responsiveHeight(3),
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
            }}>
            <Image
              style={{width: responsiveWidth(25), height: responsiveWidth(25)}}
              source={images.scooter}
            />
            <Text
              style={{
                fontFamily: FontFamily.Semi_Bold,
                color: '#4361EE',
                fontSize: responsiveFontSize(2),
              }}>
              Your Order Has Arrived!
            </Text>
            <Text
              style={{
                fontFamily: FontFamily.Semi_Bold,
                color: '#000',
                fontSize: responsiveFontSize(1.8),
                textAlign: 'center',
                lineHeight: responsiveHeight(2.8),
              }}>
              Your vape delivery has arrived!{'\n'}Enjoy your products and feel
              free to explore more options on our app.
            </Text>
          </View>
        </View>
      </ModalComponent>
    </View>
  );
};

export default Extra;

const styles = StyleSheet.create({
  Heading: {
    fontFamily: FontFamily.Bold,
    color: '#000',
    fontSize: responsiveFontSize(2.3),
  },
});
