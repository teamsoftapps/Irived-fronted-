import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Button,
  FlatList,
} from 'react-native';
import React, {Component, useState} from 'react';
import WrapperContainer from '../Components/WrapperContainer';
import {FontFamily, images} from '../utils';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import ButtonComp from '../Components/ButtonComp';
import {useRoute} from '@react-navigation/native';

const product = {
  name: 'Blueberry Blast',
  price: '$11.45',
  images: [
    {image: images.product, id: 0},
    {image: images.product1, id: 1},
    {image: images.product2, id: 2},
  ],
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed acpurus sed odio tincidunt lacinia. Etiam malesuada ultrices ex sit amet tincidunt.Nulla facilisi.Pellentesque eget velit vel tortor accumsan.',
};

const Productdetail = () => {
  const [selected, setselected] = useState(false);
  const [products, setproducts] = useState(0);
  const [addcart, setaddcart] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const {data} = useRoute().params || {};

  console.log('NewData', data);

  return (
    <WrapperContainer
      style={{backgroundColor: '#F5F5F5'}}
      statusbackgroundColor="#F5F5F5">
      <View style={styles.topbar_container}>
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

      <FlatList
        data={product.images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <Image
            source={item.image}
            style={{height: responsiveHeight(40), width: responsiveWidth(100)}}
            resizeMode="contain"
          />
        )}
        onViewableItemsChanged={({viewableItems}) => {
          setCurrentIndex(viewableItems[0].index);
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 'auto',
          marginVertical: responsiveHeight,
        }}>
        {product.images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              currentIndex === index ? styles.activeDot : null,
            ]}
          />
        ))}
      </View>
      <View style={styles.title_container}>
        <View style={{width: responsiveWidth(80), marginHorizontal: 'auto'}}>
          <Text numberOfLines={1} style={styles.product_name}>
            {product.name}
          </Text>
          <Text numberOfLines={5} style={styles.product_description}>
            {product.description}
          </Text>
          <View style={styles.amount}>
            <Text style={styles.product_price}>{product.price}</Text>
            <View style={styles.product_container}>
              <TouchableOpacity
                style={styles.product_button}
                onPress={() => {
                  if (products >= 1) setproducts(products - 1);
                }}>
                <Image
                  source={images.minus}
                  style={{
                    width: responsiveWidth(3),
                    tintColor: 'black',
                    height: responsiveWidth(0.6),
                  }}
                />
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
                style={styles.product_button}
                onPress={() => {
                  setproducts(products + 1);
                }}>
                <Image
                  source={images.plus}
                  style={{
                    width: responsiveWidth(3),
                    tintColor: 'black',
                    height: responsiveWidth(3),
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <ButtonComp
            onPress={() => {
              setaddcart(!addcart);
            }}
            text={addcart ? 'Added' : 'Add to Cart'}
          />
        </View>
      </View>
    </WrapperContainer>
  );
};

export default Productdetail;
const styles = StyleSheet.create({
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#888',
    marginHorizontal: 5,
  },
  paginationDots: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
  },
  activeDot: {
    backgroundColor: '#000',
  },
  product_price: {
    fontFamily: FontFamily.Bold,
    color: 'black',
    fontSize: responsiveFontSize(2.5),
  },
  title_container: {
    width: '100%',
    height: responsiveHeight(37),
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 'auto',
    backgroundColor: 'white',
  },
  product_container: {
    backgroundColor: '#4361EE',
    width: responsiveWidth(30),
    height: responsiveHeight(5),
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(2),
    justifyContent: 'space-between',
  },
  amount: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: responsiveHeight(3),
  },
  topbar_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: responsiveHeight(2),
  },
  product_name: {
    fontFamily: FontFamily.Bold,
    fontSize: responsiveFontSize(2.8),
    color: 'black',
    marginVertical: responsiveHeight(2),
  },
  product_description: {
    color: '#C8C8C8',
    fontFamily: FontFamily.Semi_Bold,
  },
  product_button: {
    borderRadius: 50,
    backgroundColor: 'white',
    width: responsiveWidth(6),
    height: responsiveWidth(6),
    alignItems: 'center',
    justifyContent: 'center',
  },
  button_text: {
    fontSize: responsiveFontSize(2),
    fontWeight: '800',
    color: 'black',
    margin: '0 auto',
  },
});
