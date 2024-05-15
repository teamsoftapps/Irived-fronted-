import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import WrapperContainer from '../Components/WrapperContainer';
import HeaderComponent from '../Components/Headers/HeaderComponent';
import { responsiveFontSize, responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import { FontFamily, images } from '../utils';
import ButtonComp from '../Components/ButtonComp';

const products = [{
  name: "BlueBerry Blast",
  description: "30 mL 10mg",
  price: "$11.99",
  image: images.product
},
{
  name: "Mango Tango",
  description: "40 mL 10mg",
  price: "$16.99",
  image: images.product1
}, {
  name: "RaspBerry Fruity",
  description: "20 mL 10mg",
  price: "$10.49",
  image: images.product2
}, {
  name: "BlueBerry Blast",
  description: "30 mL 10mg",
  price: "$11.99",
  image: images.product
}, {
  name: "Mango Tango",
  description: "40 mL 10mg",
  price: "$16.99",
  image: images.product1
}]

const Order = () => {

  return (
    <WrapperContainer style={{ backgroundColor: "#F5F5F5" }}>
      <HeaderComponent top_text='Cart' style={{ backgroundColor: "#F5F5F5" }} top_text_style={{ marginLeft: responsiveWidth(-6), fontSize: responsiveFontSize(3) }} text_container_style={{ alignItems: "center", marginTop: responsiveHeight(2) }} />
      <View style={{ height: responsiveHeight(33) }}>

        <FlatList
          data={products}
          showsVerticalScrollIndicator={false}
          renderItem=
          {({ item }) =>
            <View style={styles.list_container}>
              <View style={styles.imageContainer}>
                <Image source={item.image} style={styles.image} />
              </View>
              <View style={{ width: responsiveWidth(65) }}>
                <View style={styles.top}>
                  <Text style={styles.text}>{item.name}</Text>
                  <TouchableOpacity style={styles.cross}>
                    <Image source={images.close_icon} style={{ width: responsiveWidth(4), height: responsiveWidth(4) }} />
                  </TouchableOpacity>
                </View>
                <Text style={styles.description}>{item.description}</Text>
                <View style={styles.bottom}>
                  <Text style={styles.price}>{item.price}</Text>
                  <View style={styles.product_container}>
                    <TouchableOpacity
                      style={styles.product_button}
                    >
                      <Text style={styles.button_text}>-</Text>
                    </TouchableOpacity>
                    <Text
                      style={{
                        fontSize: responsiveFontSize(2),
                        fontWeight: '800',
                        color: 'black',
                      }}>
                      4
                    </Text>
                    <TouchableOpacity
                      style={styles.product_button}
                    >
                      <Text style={styles.button_text}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          }
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.copoun_container}>
          <View style={styles.white_container}>
            <TextInput placeholder='Promo Code' style={{ width: responsiveWidth(50) }} numberOfLines={1} />
            <TouchableOpacity style={styles.button}><Text style={{ fontFamily: FontFamily.Extra_Bold, color: "white" }}>Apply</Text></TouchableOpacity>
          </View>
        </View>
        <View>
          <View style={styles.total_container}>
            <Text style={styles.left}>Subtotal</Text>
            <View style={styles.right}><Text style={styles.price}>$11.99</Text><Text style={styles.usd}>USD</Text></View>
          </View>
          <View style={styles.total_container}>
            <Text style={styles.left}>Shipping</Text>
            <View style={styles.right}><Text style={styles.price}>$4.99</Text><Text style={styles.usd}>USD</Text></View>
          </View>
          <View style={styles.total_container}>
            <Text style={styles.left}>Total</Text>
            <View style={styles.right}><Text style={styles.no_items}>(3 items)</Text><Text style={styles.price}>$11.99</Text><Text style={styles.usd}>USD</Text></View>
          </View>
        </View>
        <View style={{ alignItems: "center", justifyContent: "center", marginTop: responsiveHeight(2) }}>
          <ButtonComp text='Proceed to Checkout' />
        </View>
      </ScrollView>
    </WrapperContainer>
  );
};

export default Order;

const styles = StyleSheet.create({
  no_items: {
    fontFamily: FontFamily.Bold,
    color: "black",
    fontSize: responsiveFontSize(1.8),
    paddingRight: responsiveWidth(3)
  },
  usd: {
    fontFamily: FontFamily.Bold,
    color: "#AAAAAA",
    fontSize: responsiveFontSize(2)
  },
  price: {
    fontFamily: FontFamily.Bold,
    color: "black",
    fontSize: responsiveFontSize(2.3)
  },
  right: {
    flexDirection: "row",
    gap: responsiveWidth(2),
    alignItems: "center"
  },
  left: {
    fontFamily: FontFamily.Bold,
    color: "black",
    fontSize: responsiveFontSize(2)
  },
  total_container: {
    paddingHorizontal: responsiveWidth(5.4),
    paddingVertical: responsiveHeight(2),
    borderBottomColor: "grey",
    borderBottomWidth: 0.5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  button: {
    backgroundColor: "black",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: responsiveWidth(23),
    height: responsiveWidth(10)
  },
  white_container: {
    backgroundColor: "white",
    width: responsiveWidth(90),
    height: responsiveWidth(14),
    justifyContent: "center",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  copoun_container: {
    height: responsiveWidth(20),
    alignItems: "center",
    justifyContent: "center",
    marginTop: responsiveHeight(2)
  },
  price: {
    fontFamily: FontFamily.Extra_Bold,
    color: "black",
    fontSize: responsiveFontSize(2)
  },
  bottom: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "flex-end"
  },
  description: {
    fontFamily: FontFamily.Bold,
    color: "#B1B1B1"
  },
  cross: {
    backgroundColor: "#E7E7E7",
    borderRadius: 50,
    padding: responsiveWidth(0.7)
  },
  text: {
    fontFamily: FontFamily.Bold,
    color: "black",
    fontSize: responsiveFontSize(2)
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  list_container: {
    flexDirection: "row",
    gap: responsiveWidth(4),
    justifyContent: "center",
    width: responsiveWidth(90),
    alignSelf: "center",
    marginVertical: responsiveHeight(1)
  },
  product_container: {
    borderColor: '#4361EE',
    borderWidth: 1.5,
    width: responsiveWidth(26),
    height: responsiveWidth(10),
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(2),
    justifyContent: 'space-between',
  },
  button_text: {
    fontSize: responsiveFontSize(2.1),
    fontWeight: '800',
    color: 'white',
  },
  product_button: {
    borderRadius: responsiveWidth(10),
    backgroundColor: '#4361EE',
    width: responsiveWidth(6),
    height: responsiveWidth(6),
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: responsiveWidth(19.5),
    backgroundColor: "white",
    borderRadius: 10,
    height: responsiveWidth(19.77)
  },
  imageContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
    width: responsiveWidth(20),
    height: responsiveWidth(20),
    borderRadius: 10
  },
});