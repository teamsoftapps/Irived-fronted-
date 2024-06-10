import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Platform,
} from 'react-native';
import React, {Component, useState} from 'react';
import WrapperContainer from '../Components/WrapperContainer';
import HeaderComponent from '../Components/Headers/HeaderComponent';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Formik} from 'formik';
import {FontFamily, colors, images} from '../utils';
import ButtonComp from '../Components/ButtonComp';
import { useNavigation } from '@react-navigation/native';

const Brands = [
  {
    id: 1,
    name: 'ALLO',
  },
  {
    id: 2,
    name: 'Apple Drop',
  },
  {
    id: 3,
    name: 'Banana Bang',
  },
  {
    id: 4,
    name: 'ALLO',
  },
  {
    id: 5,
    name: 'Apple Drop',
  },
  {
    id: 6,
    name: 'Banana Bang',
  },
];

const ProductType = [
  {
    id: 1,
    name: 'E-Liquid & Juices',
  },
  {
    id: 2,
    name: 'Mods & Tanks',
  },
  {
    id: 3,
    name: 'Pod Systems',
  },
];

const Availability = [
  {
    id: 1,
    name: 'In Stock',
  },
  {
    id: 2,
    name: 'Out of Stock',
  },
];

// CheckBox Component
const Checkbox = ({label, checked, onPress}) => {
  return (
    <View style={styles.Checkbox_container}>
      <Text style={styles.categoryText}>{label}</Text>
      <TouchableOpacity
        onPress={onPress}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={styles.checkbox_outer}>
          {checked && <View style={styles.checkbox_inner} />}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const Filter = () => {
  const navigation = useNavigation()
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedAvail, setSelectedAvail] = useState(null);

  return (
    <WrapperContainer>
      <HeaderComponent
        img_styles={{
          width: responsiveWidth(11),
          height: responsiveHeight(4.1),
        }}
        icon={'close_icon'}
        style={{
          borderBottomColor: 'gray',
          borderBottomWidth: responsiveHeight(0.1),
        }}
        top_text={'Filter'}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll_view}>
        {/* FlatList For Brands */}
        <Text style={styles.chackBoxHeading}>Brand</Text>
        <FlatList
          data={Brands}
          renderItem={({item}) => (
            <Checkbox
              label={item.name}
              checked={selectedBrand === item.id}
              onPress={() =>
                setSelectedBrand(item.id === selectedBrand ? null : item.id)
              }
            />
          )}
          keyExtractor={item => item.id}
          contentContainerStyle={{gap: responsiveScreenHeight(3)}}
        />

        {/* FlatList for Product Type */}
        <Text style={styles.chackBoxHeading}>Product Type</Text>
        <FlatList
          data={ProductType}
          renderItem={({item}) => (
            <Checkbox
              label={item.name}
              checked={selectedProduct === item.id}
              onPress={() =>
                setSelectedProduct(item.id === selectedProduct ? null : item.id)
              }
            />
          )}
          keyExtractor={item => item.id}
          contentContainerStyle={{gap: responsiveScreenHeight(3)}}
        />

        {/* FLatList for Availibility */}
        <Text style={styles.chackBoxHeading}>Availability</Text>
        <FlatList
          data={Availability}
          renderItem={({item}) => (
            <Checkbox
              label={item.name}
              checked={selectedAvail === item.id}
              onPress={() =>
                setSelectedAvail(item.id === selectedAvail ? null : item.id)
              }
            />
          )}
          keyExtractor={item => item.id}
          contentContainerStyle={{gap: responsiveScreenHeight(3)}}
        />

        <View style={{flexDirection: 'row'}}></View>
      </ScrollView>
      <View style={styles.bottom}>
        <ButtonComp
          text="Submit"
          style={{alignSelf: 'center', marginBottom: 0}}
        />
      </View>
    </WrapperContainer>
  );
};
export default Filter;

const styles = StyleSheet.create({
  scroll_view: {
    gap: responsiveHeight(3),
    position: 'relative',
    flexGrow: 1,
    alignItems: 'center',
  },
  chackBoxHeading: {
    marginTop: responsiveHeight(2.5),
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2.7),
    color: 'black',
    textAlign: 'left',
    width: responsiveWidth(80),
    fontFamily: FontFamily.Bold,
  },
  categoryText: {
    fontSize: responsiveFontSize(2),
    color: 'black',
    fontFamily: FontFamily.Medium,
  },
  Checkbox_container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: responsiveWidth(80),
    justifyContent: 'space-between',
  },
  checkbox_outer: {
    height: responsiveWidth(6),
    width: responsiveWidth(6),
    borderRadius: responsiveWidth(100),
    borderWidth: responsiveWidth(0.5),
    borderColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkbox_inner: {
    height: responsiveWidth(3),
    width: responsiveWidth(3),
    borderRadius: responsiveWidth(100),
    backgroundColor: colors.secondary,
  },
  bottom: {
    position: '',
    top: 0,
    zIndex: 100,
    justifyContent: 'center',

    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.3,
        shadowRadius: 5,
      },
      android: {
        elevation: 2,
        shadowColor: 'gray',
      },
    }),

    height: responsiveHeight(13),
    borderTopRightRadius: responsiveHeight(3),
    borderTopLeftRadius: responsiveHeight(3),
    width: responsiveWidth(100),
  },
});
