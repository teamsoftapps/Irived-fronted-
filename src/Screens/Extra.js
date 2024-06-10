import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import ModalComponent from '../Components/ModalComponent';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {FontFamily, colors, images} from '../utils';
import ButtonComp from '../Components/ButtonComp';
import HeaderComponent from '../Components/Headers/HeaderComponent';
import WrapperContainer from '../Components/WrapperContainer';
import {useState} from 'react';

const fakeApi = {
  userid: '0001',
  Address: [
    {
      place: 'Home',
      Address: 'abc canada dubai 123',
      id: 1,
    },
    {
      place: 'Office',
      Address: 'xyz Canada Dubai 321',
      id: 2,
    },
  ],
  userCards: [
    {
      type: 'Credit Card',
      number: '1234 **** **** ****',
      brand: 'MasterCard',
      id: 1,
    },
    {
      type: 'Debit Card',
      number: '1234 **** **** ****',
      brand: 'Visa',
      id: 2,
    },
  ],
};

// CheckBox Component
const Checkbox = ({checked, onPress}) => {
  return (
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
  );
};

const Extra = () => {
  const [addresscheckbox, setAddresscheckbox] = useState(null);
  const [cardcheckbox, setcardcheckbox] = useState(null);

  return (
    <WrapperContainer>
      <HeaderComponent text="Checkout" style={{backgroundColor: '#F5F5F5'}} />
      <ScrollView style={{backgroundColor: '#F5F5F5'}}>
        <View style={styles.shipping_container}>
          <Text style={styles.Heading}>Shipping to</Text>

          <FlatList
            data={fakeApi.Address}
            renderItem={({item}) => (
              <View style={styles.address_container}>
                <View style={styles.address_left}>
                  <Checkbox
                    checked={addresscheckbox === item.id}
                    onPress={() =>
                      setAddresscheckbox(item.id === addresscheckbox ? null : item.id)
                    }
                  />
                </View>
                <View style={styles.address}>
                  <Text numberOfLines={1} style={styles.address_top}>
                    {item.place}
                  </Text>
                  <Text numberOfLines={1} style={styles.address_Bottom}>
                    {item.Address}
                  </Text>
                </View>
                <View style={styles.address_icon}>
                  <TouchableOpacity>
                    <Image
                      source={images.editpro}
                      style={{tintColor: 'black'}}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </View>
        <View style={styles.shipping_container}>
          <Text style={styles.Heading}>Payment Method</Text>
          <View
            style={{
              ...styles.address_container,
              paddingVertical: responsiveScreenWidth(8),
            }}>
            <View style={styles.address_left}>
              <Image source={images.COD} />
            </View>
            <View style={styles.address}>
              <Text numberOfLines={1} style={styles.address_top}>
                Cash on Deliver
              </Text>
            </View>
            <View style={styles.address_icon}>
              <Checkbox
                checked={cardcheckbox === 0}
                onPress={() => setcardcheckbox(0 === cardcheckbox ? null : 0)}
              />
            </View>
          </View>
          <FlatList
            data={fakeApi.userCards}
            renderItem={({item}) => (
              <View style={styles.address_container}>
                <View style={styles.address_left}>
                  {item.brand === 'Visa' ? (
                    <Image source={images.visacard} />
                  ) : (
                    <Image source={images.mastercard} />
                  )}
                </View>
                <View style={styles.address}>
                  <Text numberOfLines={1} style={styles.address_top}>
                    {item.type}
                  </Text>
                  <Text numberOfLines={1} style={styles.address_Bottom}>
                    {item.number}
                  </Text>
                </View>
                <View style={styles.address_icon}>
                  <Checkbox
                    checked={cardcheckbox === item.id}
                    onPress={() =>
                      setcardcheckbox(item.id === cardcheckbox ? null : item.id)
                    }
                  />
                </View>
              </View>
            )}
          />
          <View
            style={{
              ...styles.address_container,
              paddingVertical: responsiveScreenWidth(8),
            }}>
            <View style={styles.address_left}>
              <Image source={images.addcard} />
            </View>
            <View style={styles.address}>
              <Text numberOfLines={1} style={styles.address_top}>
                Add Card
              </Text>
            </View>
            <View style={styles.address_icon}>
              <Image source={images.arrow} />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottom}>
        <View style={styles.total_container}>
          <View style={styles.total_row}>
            <Text style={styles.hover_text}>Subtotal</Text>
            <Text style={styles.hover_text}>$36</Text>
          </View>
          <View style={styles.total_row}>
            <Text style={styles.hover_text}>shipping</Text>
            <Text style={styles.hover_text}>$16</Text>
          </View>
          <View style={styles.total_row}>
            <Text
              style={{...styles.hover_text, fontSize: responsiveFontSize(3)}}>
              Total
            </Text>
            <Text
              style={{...styles.hover_text, fontSize: responsiveFontSize(3)}}>
              $86.99
            </Text>
          </View>
        </View>
        <ButtonComp
          text="Submit"
          style={{alignSelf: 'center', marginBottom: 0}}
        />
      </View>
    </WrapperContainer>
  );
};

export default Extra;

const styles = StyleSheet.create({
  total_container: {
    width: responsiveScreenWidth(80),
    alignSelf: 'center',
  },
  total_row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  hover_text: {
    fontSize: responsiveScreenFontSize(2.2),
    fontFamily: FontFamily.Semi_Bold,
    color: 'black',
    marginVertical: responsiveScreenWidth(1),
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

    height: responsiveHeight(28),
    borderTopRightRadius: responsiveHeight(3),
    borderTopLeftRadius: responsiveHeight(3),
    width: responsiveWidth(100),
    justifyContent: 'space-evenly',
  },
  shipping_container: {
    width: responsiveScreenWidth(86),
    alignSelf: 'center',
  },
  Heading: {
    fontSize: responsiveScreenFontSize(2.5),
    fontFamily: FontFamily.Bold,
    color: 'black',
    marginVertical: responsiveScreenWidth(6),
  },
  address_container: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: responsiveScreenWidth(5),
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: responsiveScreenWidth(3),
    marginBottom: responsiveScreenWidth(6),
  },
  address_left: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: responsiveScreenWidth(3),
  },
  address: {
    width: '70%',
    gap: responsiveScreenWidth(1.5),
    justifyContent: 'center',
  },
  address_icon: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  address_Bottom: {
    fontFamily: FontFamily.Medium,
    fontSize: responsiveFontSize(2.4),
  },
  address_top: {
    fontSize: responsiveScreenFontSize(2.4),
    color: 'black',
    fontFamily: FontFamily.Semi_Bold,
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
});
