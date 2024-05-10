import {
  StyleSheet,
  Image,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import React from 'react';
import {images} from '../utils';

const Message = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
        <View style={styles.top}>
          <View style={styles.left_container}>
            <TouchableOpacity>
              <Image source={images.back} style={styles.back} />
            </TouchableOpacity>

            <Image source={images.profile} style={styles.profile_image} />
            <View>
              <Text style={styles.user}>Martin Mork</Text>
              <View style={styles.online}>
                <View style={styles.dot}></View>
                <Text style={styles.online_text}>Online</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity>
            <Image style={styles.call} source={images.call_icon} />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <Text style={styles.text}>Today</Text>
        </View>
        <View style={{paddingHorizontal: 30, marginVertical: 8}}>
          <View style={styles.message}>
            <Text style={{color: 'black'}}>what what what what what</Text>
          </View>
        </View>
        <View style={{paddingHorizontal: 30, marginVertical: 8}}>
          <View style={styles.message1}>
            <Text style={{color: 'white'}}>what what what what what</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.input_container}>
        <TextInput placeholder="Type Something" style={styles.inp} />
        <TouchableOpacity>
          <Image
            source={images.send_icon}
            style={{width: responsiveWidth(12), height: responsiveWidth(12)}}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Message;

const styles = StyleSheet.create({
  user: {
    fontSize: responsiveFontSize(3),
    fontWeight: '700',
    color: 'black',
  },
  profile_image: {
    width: responsiveWidth(12),
    height: responsiveWidth(12),
    borderRadius: responsiveWidth(10),
    objectFit: 'cover',
    marginHorizontal: responsiveWidth(3),
  },
  call: {
    borderRadius: responsiveWidth(4),
    height: responsiveWidth(9),
    width: responsiveWidth(9),
  },
  back: {
    width: responsiveWidth(6),
    height: responsiveHeight(2.8),
    resizeMode: 'contain',
  },
  online: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveWidth(1),
  },
  online_text: {
    color: '#4361EE',
    fontSize: responsiveFontSize(1.5),
  },
  dot: {
    backgroundColor: '#4361EE',
    width: responsiveWidth(2),
    height: responsiveWidth(2),
    borderRadius: responsiveWidth(4),
  },
  container: {
    marginVertical: 20,
    alignSelf: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
  },
  text: {},
  input_container: {
    position: 'absolute',
    bottom: 5,
    flexDirection: 'row',
    gap: responsiveWidth(5),
    marginHorizontal: 20,
  },
  inp: {
    flex: 1,
    backgroundColor: 'white',
    height: responsiveWidth(12),
    width: responsiveWidth(70),
    borderRadius: responsiveWidth(3),
  },
  message1: {
    backgroundColor: '#4361EE',
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 13,
    width: responsiveWidth(40),
  },
  top: {
    height: responsiveHeight(10),
    paddingHorizontal: responsiveWidth(8),
    backgroundColor: 'white',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    top: 0,
    left: 0,
  },
  left_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  message: {
    backgroundColor: 'white',
    marginLeft: 'auto',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 13,
    width: responsiveWidth(40),
  },
});
