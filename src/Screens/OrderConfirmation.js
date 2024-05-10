import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    ScrollView,
    TouchableOpacity
  } from 'react-native';
  import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';
  import React from 'react';
//   import Order_Confirmed from '../Assests /Order_Confirmed.jpg';
  import Order_Confirmed from '../assets/Order_Confirmed.jpeg';
  
  const Home = () => {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
        <View style={styles.main}>
          <Image style={{width: responsiveWidth(50), height: responsiveWidth(50)}} source={Order_Confirmed} />
          <Text style={styles.text}>Congratulations!</Text>
          <Text style={styles.text2}>
            Your order is now confirmed and will be processed shortly. You will{' '}
            recieve a confirmation email with further details.{'\n'} Thank you for
            choosing Irived!
          </Text>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.pressable}>
            <Text style={{fontWeight: '800', color: 'white'}}>Track Order</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.pressable1}>
            <Text style={{fontWeight: '800', color: 'black'}}>Back To Home</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };
  
  export default Home;
  
  const styles = StyleSheet.create({
    main: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: responsiveFontSize(4),
      paddingTop: responsiveHeight(4),
      width: responsiveWidth(65),
      fontWeight: '700',
      color: 'black',
    },
    text2: {
      textAlign: 'center',
      width: responsiveWidth(85),
      paddingTop: responsiveHeight(4),
      fontSize: responsiveFontSize(2),
      fontWeight: '500',
      color: '#9e9e9e',
    },
    pressable: {
      backgroundColor: '#4361EE',
      width: responsiveWidth(80),
      height: responsiveHeight(7),
      borderRadius: responsiveHeight(10),
      alignItems: 'center',
      flexDirection: 'row',
      paddingHorizontal: responsiveWidth(4),
      justifyContent: 'center',
      marginBottom: responsiveHeight(4),
    },
    pressable1: {
      width: responsiveWidth(80),
      borderColor: 'black',
      borderWidth: 1,
      height: responsiveHeight(7),
      borderRadius: responsiveHeight(10),
      alignItems: 'center',
      flexDirection: 'row',
      paddingHorizontal: responsiveWidth(4),
      justifyContent: 'center',
    },
    buttons: {
      marginBottom: responsiveHeight(5),
      alignItems: 'center',
      justifyContent: 'center',
  
    },
  });
  