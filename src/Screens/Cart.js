import {Text, StyleSheet, View, Image, TouchableOpacity, Button} from 'react-native';
import React, {Component, useState} from 'react';
import WrapperContainer from '../Components/WrapperContainer';
import {FontFamily, images} from '../utils';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import ButtonComp from '../Components/ButtonComp';

const products = [
  {
    id: 1,
    name: 'Blueberry Blast',
    price: '',
    image: '',
    description: '',
  },
];
const Cart = () => {
  const [selected, setselected] = useState(false);
  const [products, setproducts] = useState(1);
  const [addcart, setaddcart] = useState(false);

  return (
    <WrapperContainer style={{backgroundColor:"#F5F5F5"}}>
      
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: responsiveHeight(2),
        }}>
        <TouchableOpacity style={{marginLeft: responsiveWidth(6)}}>
          <Image
            source={images.back}
            width={responsiveWidth(6)}
            height={responsiveWidth(6)}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setselected(!selected);
          }}>
          <Image
            source={selected ? images.fav_unselected : images.fav_selected}
            width={responsiveWidth(6)}
            height={responsiveHeight(6)}
          />
        </TouchableOpacity>
      </View>
      
      <View
        style={{
          width: '100%',
          height: responsiveHeight(37),
          marginTop: 'auto',
          backgroundColor: "white",
          
        }}>
        <View style={{width:responsiveWidth(80), marginHorizontal:"auto"}}>

        <Text
          numberOfLines={1}
          style={{
            fontWeight: '700',
            fontSize: responsiveFontSize(2.8),
            color: 'black',
            marginVertical: responsiveHeight(2),
          }}>
          Blueberry Blast
        </Text>
        <Text numberOfLines={5} style={{color: '#C8C8C8', fontWeight: '700'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac purus
          sed odio tincidunt lacinia. Etiam malesuada ultrices ex sit amet
          tincidunt. Nulla facilisi. Pellentesque eget velit vel tortor
          accumsan.
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
              justifyContent: 'space-between',
            marginVertical:responsiveHeight(1)
          }}>
          <Text
            style={{
              fontWeight: '700',
              color: 'black',
              fontSize: responsiveFontSize(2.5),
            }}>
            $11.45
          </Text>
          <View
            style={{
              backgroundColor: '#4361EE',
              width: responsiveWidth(30),
              height: responsiveHeight(5),
              borderRadius: 30,
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: responsiveWidth(2),
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              style={{
                borderRadius: 50,
                backgroundColor: 'white',
                width: responsiveWidth(6),
                height: responsiveWidth(6),
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => {
                if (products >= 1) setproducts(products - 1);
              }}>
              <Text
                style={{
                  fontSize: responsiveFontSize(2),
                  fontWeight: '800',
                  color: 'black',
                  margin: '0 auto',
                }}>
                -
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                fontSize: responsiveFontSize(2),
                fontWeight: '800',
                color: 'white',
              }}>
              {products}
            </Text>
            <TouchableOpacity
              style={{
                borderRadius: 50,
                backgroundColor: 'white',
                width: responsiveWidth(6),
                height: responsiveWidth(6),
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => {
                if (products <= 1) setproducts(products + 1);
              }}>
              <Text
                style={{
                  fontSize: responsiveFontSize(2),
                  fontWeight: '800',
                  color: 'black',
                  margin: '0 auto',
                }}>
                +
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            setaddcart(!addcart);
          }}>
          {addcart?<ButtonComp text="Added" />:
          <ButtonComp text='Add to Cart'/>}
        </TouchableOpacity>
            </View>
      </View>
    </WrapperContainer>
  );
};

export default Cart;
const styles = StyleSheet.create({});
