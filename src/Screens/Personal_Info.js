import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
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
import {Formik} from 'formik';
import {Personal_Info_Schema} from '../Schemas/Personal_info_schema';
import {FontFamily, images} from '../utils';
import ButtonComp from '../Components/ButtonComp';

const Personal_Info = () => {
  const addresses = [
    {
      place: 'Home',
      address: '1497 wheet times square',
      id: 1,
      icon: images.home,
    },
    {
      place: 'Office',
      address: '1497 ',
      id: 2,
      icon: images.office,
    },
    {
      place: 'Home',
      address: '1497 wheet times square',
      id: 3,
      icon: images.home,
    },
    {
      place: 'Office',
      address: '1497 wheet times square',
      id: 4,
      icon: images.office,
    },
  ];
  return (
    <WrapperContainer style={{backgroundColor: '#FFFFFF'}}>
      <HeaderComponent
        icon="back"
        style={{height: responsiveHeight(6), paddingTop: responsiveHeight(2.5)}}
      />
      <View style={styles.search_container}>
        <Image
          source={images.Profile}
          style={{
            borderRadius: 50,
            height: responsiveWidth(12),
            width: responsiveWidth(12),
          }}
        />
        <Text numberOfLines={1} style={styles.name_tag}>
          Steve Erickson
        </Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{width: responsiveWidth(87), alignSelf: 'center'}}>
        <Formik
          validationSchema={Personal_Info_Schema}
          initialValues={{fullName: '', email: '', phone: '', address: ''}}
          onSubmit={values =>
            console.log(
              values.fullName,
              values.email,
              values.phone,
              values.address,
            )
          }>
          {({}) => (
            <View>
              <View
                style={{
                  marginBottom: responsiveHeight(0.5),
                }}>
                <Text style={styles.label}>Full Name</Text>
                <View style={styles.input_container}>
                  <TextInput placeholder="Name" style={styles.input} />
                </View>
              </View>
              <View
                style={{
                  marginBottom: responsiveHeight(0.5),
                }}>
                <Text style={styles.label}>Email</Text>
                <View style={styles.input_container}>
                  <TextInput placeholder="Email" style={styles.input} />
                </View>
              </View>
              <View
                style={{
                  marginBottom: responsiveHeight(0.5),
                }}>
                <Text style={styles.label}>Phone</Text>
                <View style={styles.input_container}>
                  <TextInput
                    keyboardType="numeric"
                    placeholder="Phone"
                    style={styles.input}
                  />
                </View>
              </View>
              <View
                style={{
                  marginBottom: responsiveHeight(1),
                }}>
                <Text style={styles.label}>Add New Address</Text>
                <View style={styles.input_container}>
                  <TextInput placeholder="Address" style={styles.input} />
                </View>
              </View>
              <FlatList
                data={addresses}
                renderItem={({item}) => (
                  <View key={item.id} style={styles.address_container}>
                    <View style={styles.left}>
                      <Image
                        source={item.icon}
                        style={{
                          width: responsiveWidth(15),
                          height: responsiveWidth(15),
                        }}
                      />
                      <View style={styles.address_text}>
                        <Text style={styles.top}>{item.place}</Text>
                        <Text numberOfLines={1} style={styles.bottom}>
                          {item.address}
                        </Text>
                      </View>
                    </View>
                    <TouchableOpacity>
                      <Image source={images.bin_icon} style={styles.bin_icon} />
                    </TouchableOpacity>
                  </View>
                )}
              />
              <ButtonComp
                text="Save"
                style={{alignSelf: 'center', marginBottom: responsiveHeight(2)}}
              />
            </View>
          )}
        </Formik>
      </ScrollView>
    </WrapperContainer>
  );
};

export default Personal_Info;

const styles = StyleSheet.create({
  bin_icon: {
    resizeMode: 'contain',
    width: responsiveWidth(5),
    height: responsiveWidth(5),
  },
  bottom: {
    fontSize: responsiveFontSize(1.8),
    fontFamily: FontFamily.Semi_Bold,
    color: '#9D9D9D',
  },
  top: {
    fontFamily: FontFamily.Bold,
    color: 'black',
    fontSize: responsiveFontSize(2),
  },
  address_text: {gap: responsiveHeight(0.5), width: '60%'},
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveWidth(3),
  },
  address_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: responsiveHeight(1),
  },
  input: {
    marginLeft: responsiveWidth(3),
    fontSize: responsiveFontSize(2),
    color: 'black',
    fontFamily: FontFamily.Bold,
  },
  input_container: {borderWidth: 2, borderRadius: 10, borderColor: '#DBDBDB'},
  search_container: {
    marginHorizontal: responsiveWidth(7),
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#F5F5F5',
    borderBottomWidth: 2,
    paddingVertical: responsiveHeight(2),
  },
  name_tag: {
    fontFamily: FontFamily.Extra_Bold,
    fontSize: responsiveFontSize(3),
    color: 'black',
    marginLeft: responsiveWidth(3),
  },
  label: {
    fontFamily: FontFamily.Bold,
    color: '#BDBDBD',
    marginVertical: responsiveHeight(2),
    fontSize: responsiveFontSize(2),
  },
});
