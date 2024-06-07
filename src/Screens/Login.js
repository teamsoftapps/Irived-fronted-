import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import React, {useState} from 'react';
import {FontFamily, images} from '../utils';
import {BlurView} from '@react-native-community/blur';
import {SafeAreaView} from 'react-native-safe-area-context';
import TinputWlabel from '../Components/TinputWlabel';
import ButtonComp from '../Components/ButtonComp';
import {useNavigation} from '@react-navigation/native';
import NavigationStrings from '../Navigations/NavigationStrings';
import axios from 'axios';
import FlashMessage from 'react-native-flash-message';
// import {showMessage} from 'react-native-flash-message';
import {showMessage} from 'react-native-flash-message';
import {useDispatch} from 'react-redux';
import apiRequest from '../lib';
// import axios from 'axios';

// const
const Login = () => {
  const dispatch = useDispatch();
  const [isCheck, setisCheck] = useState(false);
  const [isVisible, setisVisible] = useState(true);
  const [error, setError] = useState('');
  const [loading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  const handleLogin = async body => {
    try {
      if (!(body.email && body.password)) {
        showMessage({
          message: 'Oops',
          description: 'Make sure to every all data!',
          type: 'warining',
        });
        // console.log('Oops make sure to fill data correctly!'); // THAT WILL BE DISPLAYED IN TOAST MESSAGE
        return;
      }
      setIsLoading(true);

      const res = await apiRequest.post('/auth/login/', body);
      console.log(res, 'response Message');
      console.log(res?.data);
      if (res?.data) {
        showMessage({
          message: 'Login Success',
          description: 'You have logged in successfully',
          type: 'success',
        });
        console.log('login success');
      } // that will be handled with modal

      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      console.log(e?.response?.data?.error, 'dd');
      console.log(e, 'Login Error!');
      // setError(e?.response?.data?.error, 'error');
      showMessage({
        message: 'Login Error',
        description:
          e?.response?.data?.error || 'An error occurred while logging in',
        type: 'danger',
      });
    }
  };
  return (
    <>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <ImageBackground
          resizeMode="cover"
          source={images.authBg}
          style={styles.container}>
          <StatusBar hidden />

          <KeyboardAvoidingView
            behavior={Platform.OS === 'android' ? 'padding' : 'height'}
            style={{flex: 1}}>
            <TouchableWithoutFeedback
              onPress={() => {
                Keyboard.dismiss();
              }}>
              <SafeAreaView style={styles.safearea}>
                <BlurView
                  style={{
                    width: responsiveWidth(90),
                    // height: responsiveHeight(70),
                    overflow: 'hidden',
                  }}
                  blurAmount={1}
                  blurRadius={5}
                  blurType="light">
                  <View style={styles.childBlur}>
                    <Text
                      style={{
                        fontFamily: FontFamily.Bold,
                        color: '#fff',
                        fontSize: responsiveFontSize(4),
                      }}>
                      Irived
                    </Text>
                    <Text style={styles.welcome}>Welcome Back!</Text>
                    <Text style={styles.signin}>Sign in to continue</Text>
                    <View style={{marginVertical: responsiveHeight(3)}}>
                      <TinputWlabel imagee={images.check} header="Email" />
                      <TinputWlabel
                        imageOnpress={() => {
                          setisVisible(!isVisible);
                        }}
                        imagee={isVisible ? images.showeye : images.hideeye}
                        secureTextEntry={isVisible}
                        header="Password"
                        containerstyle={{marginTop: responsiveHeight(2)}}
                      />
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginTop: responsiveHeight(2),
                        }}>
                        <TouchableOpacity
                          onPress={() => {
                            setisCheck(!isCheck);
                          }}
                          style={{
                            ...styles.checkbox,
                            borderColor: isCheck ? '#fff' : '#d7d7d7',
                          }}>
                          {isCheck && (
                            <Image
                              source={images.check}
                              style={{
                                width: responsiveWidth(4),
                                height: responsiveHeight(2),
                                tintColor: '#fff',
                              }}
                            />
                          )}
                        </TouchableOpacity>
                        <Text style={styles.remember}>Remember me</Text>
                        <TouchableOpacity>
                          <Text
                            style={{
                              color: '#4361EE',
                              fontSize: responsiveFontSize(1.8),
                              fontFamily: FontFamily.Bold,
                            }}>
                            Forgot Password?
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                    <ButtonComp
                      onPress={() =>
                        handleLogin({
                          email: '123test13aaa3@gmail.com',
                          password: '2121464',
                        })
                      }
                      // onPress={() => {
                      //   navigation.replace(NavigationStrings.SIGN_UP);
                      // }}
                      text="Sign In"
                    />
                    <Text
                      style={{
                        color: '#d7d7d7',
                        fontSize: responsiveFontSize(1.8),
                        fontFamily: FontFamily.Medium,
                      }}>
                      Don't have an account?
                      <Text
                        onPress={() => {
                          navigation.navigate(NavigationStrings.SIGN_UP);
                        }}
                        style={{
                          color: '#4361EE',
                          fontSize: responsiveFontSize(1.8),
                          fontFamily: FontFamily.Bold,
                        }}>
                        {' '}
                        Sign Up
                      </Text>
                    </Text>
                  </View>
                </BlurView>
              </SafeAreaView>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        </ImageBackground>
      </ScrollView>
      <FlashMessage position="top" />
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get('window').height,
  },
  safearea: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  childBlur: {
    borderWidth: responsiveHeight(0.1),
    borderRadius: responsiveHeight(1),
    borderColor: '#fff',
    overflow: 'hidden',
    paddingVertical: responsiveHeight(5),
    paddingHorizontal: responsiveWidth(5),
  },
  welcome: {
    fontFamily: FontFamily.Semi_Bold,
    color: '#fff',
    fontSize: responsiveFontSize(3.5),
    marginTop: responsiveHeight(2),
  },
  signin: {
    fontFamily: FontFamily.Regular,
    color: '#d7d7d7',
    fontSize: responsiveFontSize(2),
    marginTop: responsiveHeight(2),
  },
  checkbox: {
    width: responsiveWidth(6),
    height: responsiveHeight(3),
    borderRadius: responsiveHeight(1),
    borderWidth: responsiveHeight(0.2),

    alignItems: 'center',
    justifyContent: 'center',
  },
  remember: {
    color: '#d7d7d7',
    fontSize: responsiveFontSize(1.8),
    fontFamily: FontFamily.Medium,
    flex: 1,
    marginLeft: responsiveWidth(2),
  },
  Scrollcontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
