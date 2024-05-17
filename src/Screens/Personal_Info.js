import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import WrapperContainer from '../Components/WrapperContainer';
import HeaderComponent from '../Components/Headers/HeaderComponent';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {FontFamily, images} from '../utils';

const Cart = () => {
  return (
    <WrapperContainer style={{backgroundColor: '#FFFFFF'}}>
      <HeaderComponent
        icon="back"
        style={{height: responsiveHeight(6), paddingTop: responsiveHeight(2.5)}}
      />
      <View
        style={{
          marginHorizontal: responsiveWidth(7),
          flexDirection: 'row',
          alignItems: 'center',
          borderBottomColor: '#F5F5F5',
          borderBottomWidth: 2,
          paddingVertical: responsiveHeight(2),
        }}>
        <Image
          source={images.Profile}
          style={{
            borderRadius: 50,
            height: responsiveWidth(12),
            width: responsiveWidth(12),
          }}
        />
        <Text
          numberOfLines={1}
          style={{
            fontFamily: FontFamily.Extra_Bold,
            fontSize: responsiveFontSize(3),
            color: 'black',
            marginLeft: responsiveWidth(3),
          }}>
          Steve Erickson
        </Text>
      </View>
      <ScrollView style={{width: responsiveWidth(87), alignSelf: 'center'}}>
        <View style={{}}>
          <Text
            style={{
              fontFamily: FontFamily.Bold,
              color: '#BDBDBD',
              marginVertical: responsiveHeight(2),
            }}>
            Full Name
          </Text>
          <View
            style={{borderWidth: 2, borderRadius: 10, borderColor: '#DBDBDB'}}>
            <TextInput
              placeholder="Name"
              style={{
                marginLeft: responsiveWidth(3),
                fontSize: responsiveFontSize(2),
                color: 'black',
                fontFamily: FontFamily.Bold,
              }}
            />
          </View>
        </View>
        <View style={{}}>
          <Text
            style={{
              fontFamily: FontFamily.Bold,
              color: '#BDBDBD',
              marginVertical: responsiveHeight(2),
            }}>
            Email
          </Text>
          <View
            style={{borderWidth: 2, borderRadius: 10, borderColor: '#DBDBDB'}}>
            <TextInput
              placeholder="Email"
              style={{
                marginLeft: responsiveWidth(3),
                fontSize: responsiveFontSize(2),
                color: 'black',
                fontFamily: FontFamily.Bold,
              }}
            />
          </View>
        </View>
        <View style={{}}>
          <Text
            style={{
              fontFamily: FontFamily.Bold,
              color: '#BDBDBD',
              marginVertical: responsiveHeight(2),
            }}>
            Phone
          </Text>
          <View
            style={{borderWidth: 2, borderRadius: 10, borderColor: '#DBDBDB'}}>
            <TextInput
              placeholder="Phone"
              style={{
                marginLeft: responsiveWidth(3),
                fontSize: responsiveFontSize(2),
                color: 'black',
                fontFamily: FontFamily.Bold,
              }}
            />
          </View>
        </View>
        <View style={{}}>
          <Text
            style={{
              fontFamily: FontFamily.Bold,
              color: '#BDBDBD',
              marginVertical: responsiveHeight(2),
            }}>
            Add{' '}
          </Text>
          <View
            style={{borderWidth: 2, borderRadius: 10, borderColor: '#DBDBDB'}}>
            <TextInput
              placeholder="Address"
              style={{
                marginLeft: responsiveWidth(3),
                fontSize: responsiveFontSize(2),
                color: 'black',
                fontFamily: FontFamily.Bold,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </WrapperContainer>
  );
};

export default Cart;

const styles = StyleSheet.create({});
