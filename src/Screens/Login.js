import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  Image,
  Pressable,
  TouchableOpacity
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
// import {respo}
import React from 'react';
import {images} from '../utils';
import {TinputWlabel} from '../Components/TinputWlabel';
const Login = () => {
  return (
    <ImageBackground source={images.authBg} style={styles.container}>
      <SafeAreaView style={styles.container}>
        {/* <ScrollView
          contentContainerStylestyle={styles.Scrollcontainer}
          // style={{backgroundColor: 'red'}}
          > */}
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop:responsiveWidth(30)}}>
          <View
            style={{
              height:responsiveHeight(50),
              gap: responsiveWidth(6),
              borderColor: 'white',
              // flex: 0.6,
              borderWidth: responsiveWidth(0.4),
              width: responsiveWidth(90),
              borderRadius: responsiveWidth(2),
              // paddingLeft:responsiveWidth(2),
              // alignItems:'center'
              // gap:responsiveWidth(),
              justifyContent:"center"
              // marginRight:responsiveWidth(10)
            }}>

              <View><Image style={{    marginLeft:responsiveWidth(3.5),width:responsiveWidth(20), height:responsiveWidth(11)}} source={images.logoMain}></Image></View>
              <View>
              <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: responsiveFontSize(3),
                marginLeft:responsiveWidth(3.5)
                
              }}>
              Welcome Back!
            </Text>
            <Text style={{    marginLeft:responsiveWidth(3.5), color: 'white'}}>Signin to continue</Text>
              </View>
          
          <View style={{ gap:responsiveWidth(2)}}>

            <TextInput  placeholderTextColor='white' placeholder='Email' style={styles.textInput}/>
            <TextInput  placeholderTextColor='white'  placeholder='Password' style={styles.textInput}/>
          </View>
            <TouchableOpacity  style={styles.pressable}>
          <Text style={{fontWeight: '600', color: 'white'}}>Sign in</Text>
        </TouchableOpacity>
            
            {/* <View> */}
            {/* <TinputWlabel/> */}
            {/* </View> */}
          </View>
        </View>
        {/* </ScrollView> */}
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Login;

const styles = StyleSheet.create({

  pressable: {
    alignSelf:"center",
    backgroundColor: '#4361EE',
    width: responsiveWidth(80),
    height: responsiveHeight(7),
    borderRadius: responsiveHeight(10),
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: responsiveWidth(4),
    justifyContent: 'center',
    marginBottom: responsiveHeight(4),
  }
,
  textInput: {
    alignSelf:"center",
    // backgroundColor:"red",
    color: 'white',
    right: responsiveWidth(1),
    fontSize: responsiveFontSize(1.5),
    paddingRight: responsiveWidth(3),
    height: responsiveHeight(6),
    alignSelf:"center",
    width:responsiveWidth(80),
    borderColor:"white",
    borderWidth:responsiveWidth(.5),
    borderRadius:responsiveWidth(2),
    // fontFamily:res
    // fontFamily: FontFamily.regular,
  },
  container: {
    flex: 1,
  },
  Scrollcontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // flexGrow: 1,
  },
});
