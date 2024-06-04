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
import apiRequest from '../lib';

const Signup = () => {
  const [error, setError] = useState('');
  const [loading, setIsLoading] = useState(false);
  const handleSignup = async body => {
    console.log(body);
    try {
      console.log(body, 'body');
      if (!(body.email && body.name && body.password)) {
        console.log('Oops make sure to fill data correctly!'); // THAT WILL BE DISPLAYED IN TOAST MESSAGE
        return;
      }
      setIsLoading(true);
      const res = await apiRequest.post('/auth/signup', body);
      console.log(res);
      setIsLoading(false);
      console.log(res?.data?.message); // that will be displayed in toast message
    } catch (e) {
      console.log(e, 'Signup Error');
      console.log(e?.response?.data?.error, 'dd');
      setIsLoading(false);
    }
  };
  const [isCheck, setisCheck] = useState(false);
  const [isVisible, setisVisible] = useState(true);
  const navigation = useNavigation();
  return (
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
                  // height: responsiveHeight(80),
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
                    SIGNUP
                  </Text>

                  <Text style={styles.signin}>Create an account</Text>
                  <View style={{marginVertical: responsiveHeight(3)}}>
                    <TinputWlabel imagee={images.check} header="Full Name" />
                    <TinputWlabel
                      containerstyle={{marginTop: responsiveHeight(2)}}
                      imagee={images.check}
                      header="Email"
                    />
                    <TinputWlabel
                      imageOnpress={() => {
                        setisVisible(!isVisible);
                      }}
                      imagee={isVisible ? images.showeye : images.hideeye}
                      secureTextEntry={isVisible}
                      header="Confirm Password"
                      containerstyle={{marginTop: responsiveHeight(2)}}
                    />
                    <TinputWlabel
                      imageOnpress={() => {
                        setisVisible(!isVisible);
                      }}
                      imagee={isVisible ? images.showeye : images.hideeye}
                      secureTextEntry={isVisible}
                      header="Password"
                      containerstyle={{marginTop: responsiveHeight(2)}}
                    />
                    {/* <View
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
                    </View> */}
                  </View>
                  <ButtonComp
                    onPress={() =>
                      handleSignup({
                        email: '123ibrahimmm7890@gmail.com',
                        password: '21214646',
                        name: 'ibrahimmm',
                      })
                    }
                    // onPress={() => {

                    //   // navigation.replace(NavigationStrings.SIGN_UP);
                    // }}
                    text="Sign Up"
                  />
                  <Text
                    style={{
                      color: '#d7d7d7',
                      fontSize: responsiveFontSize(1.8),
                      fontFamily: FontFamily.Medium,
                    }}>
                    Already have an account?
                    <Text
                      onPress={() => {
                        navigation.replace(NavigationStrings.LOG_IN);
                      }}
                      style={{
                        color: '#4361EE',
                        fontSize: responsiveFontSize(1.8),
                        fontFamily: FontFamily.Bold,
                      }}>
                      {' '}
                      Sign In
                    </Text>
                  </Text>
                </View>
              </BlurView>
            </SafeAreaView>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ImageBackground>
    </ScrollView>
  );
};

export default Signup;

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
