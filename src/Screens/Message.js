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
import React, {useState} from 'react';
import {images} from '../utils';
import {GiftedChat} from 'react-native-gifted-chat';
import WrapperContainer from '../Components/WrapperContainer';
import {useNavigation} from '@react-navigation/native';

const Message = () => {
  const [messages, setMessages] = useState([]);
  const navigation = useNavigation();
  return (
    <WrapperContainer style={{flex: 1}}>
      <View style={styles.top}>
        <View style={styles.left_container}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Image source={images.back} style={styles.back} />
          </TouchableOpacity>
          <Image source={images.user1} style={styles.profile_image} />
          <View>
            <Text style={styles.user}>Martin Mork</Text>
            <View style={styles.online}>
              <View style={styles.dot}></View>
              <Text style={styles.online_text}>Online</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{flex: 1, backgroundColor: '#ececec'}}>
        <GiftedChat
          placeholder="Type something"
          messages={messages}
          onSend={messages => onSend(messages)}
          user={{
            _id: 1,
          }}
        />
      </View>
    </WrapperContainer>
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
