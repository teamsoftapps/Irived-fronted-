import {
  StyleSheet,
  Image,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
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
        <View
          style={{
            height: responsiveHeight(10),
            paddingHorizontal: responsiveWidth(8),
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'white',
          }}>
          <TouchableOpacity style={{}}>
            <Image
              source={images.back}
              style={{
                width: responsiveWidth(6),
                height: responsiveHeight(2.8),
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{}}>
            <Image
              source={images.profile}
              style={{
                width: responsiveWidth(12),
                height: responsiveWidth(12),
                borderRadius: responsiveWidth(10),
                objectFit: 'cover',
                marginHorizontal: responsiveWidth(3),
              }}
            />
          </TouchableOpacity>
          <View>
            <Text>Martin Mork</Text>
            <View style={{flexDirection:"row", alignItems:"center", gap:responsiveWidth(1)}}>
              <View
                style={{
                  backgroundColor: '#4361EE',
                  width: responsiveWidth(2),
                  height: responsiveWidth(2),
                  borderRadius: responsiveWidth(4),
                }}></View>
              <Text style={{color:"#4361EE"}}>Online</Text>
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <Text style={styles.text}>Today</Text>
        </View>
        <View style={{paddingHorizontal: 30, marginVertical: 8}}>
          <View
            style={{
              backgroundColor: 'white',
              marginLeft: 'auto',
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              paddingHorizontal: 8,
              paddingVertical: 13,
              width: responsiveWidth(40),
            }}>
            <Text style={{color: 'black'}}>what what what what what</Text>
          </View>
        </View>
        <View style={{paddingHorizontal: 30, marginVertical: 8}}>
          <View
            style={{
              backgroundColor: '#4361EE',
              borderTopRightRadius: 10,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              paddingHorizontal: 8,
              paddingVertical: 13,
              width: responsiveWidth(40),
            }}>
            <Text style={{color: 'white'}}>what what what what what</Text>
          </View>
        </View>
        <View style={{paddingHorizontal: 30, marginVertical: 8}}>
          <View
            style={{
              backgroundColor: '#4361EE',
              borderTopRightRadius: 10,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              paddingHorizontal: 8,
              paddingVertical: 13,
              width: responsiveWidth(40),
            }}>
            <Text style={{color: 'white'}}>what what what what what</Text>
          </View>
        </View>
        <View style={{paddingHorizontal: 30, marginVertical: 8}}>
          <View
            style={{
              backgroundColor: '#4361EE',
              borderTopRightRadius: 10,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              paddingHorizontal: 8,
              paddingVertical: 13,
              width: responsiveWidth(40),
            }}>
            <Text style={{color: 'white'}}>what what what what what</Text>
          </View>
        </View>
        <View style={{paddingHorizontal: 30, marginVertical: 8}}>
          <View
            style={{
              backgroundColor: 'white',
              marginLeft: 'auto',
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              paddingHorizontal: 8,
              paddingVertical: 13,
              width: responsiveWidth(40),
            }}>
            <Text style={{color: 'black'}}>what what what what what</Text>
          </View>
        </View>
        <View style={{paddingHorizontal: 30, marginVertical: 8}}>
          <View
            style={{
              backgroundColor: 'white',
              marginLeft: 'auto',
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              paddingHorizontal: 8,
              paddingVertical: 13,
              width: responsiveWidth(40),
            }}>
            <Text style={{color: 'black'}}>what what what what what</Text>
          </View>
        </View>
        <View style={{paddingHorizontal: 30, marginVertical: 8}}>
          <View
            style={{
              backgroundColor: 'white',
              marginLeft: 'auto',
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              paddingHorizontal: 8,
              paddingVertical: 13,
              width: responsiveWidth(40),
            }}>
            <Text style={{color: 'black'}}>what what what what what</Text>
          </View>
        </View>
        <View style={{paddingHorizontal: 30, marginVertical: 8}}>
          <View
            style={{
              backgroundColor: 'white',
              marginLeft: 'auto',
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              paddingHorizontal: 8,
              paddingVertical: 13,
              width: responsiveWidth(40),
            }}>
            <Text style={{color: 'black'}}>what what what what what</Text>
          </View>
        </View>
        <View style={{paddingHorizontal: 30, marginVertical: 8}}>
          <View
            style={{
              backgroundColor: 'white',
              marginLeft: 'auto',
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              paddingHorizontal: 8,
              paddingVertical: 13,
              width: responsiveWidth(40),
            }}>
            <Text style={{color: 'black'}}>what what what what what</Text>
          </View>
        </View>
        <View style={{paddingHorizontal: 30, marginVertical: 8}}>
          <View
            style={{
              backgroundColor: 'white',
              marginLeft: 'auto',
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              paddingHorizontal: 8,
              paddingVertical: 13,
              width: responsiveWidth(40),
            }}>
            <Text style={{color: 'black'}}>what what what what what</Text>
          </View>
        </View>
        <View style={{paddingHorizontal: 30, marginVertical: 8}}>
          <View
            style={{
              backgroundColor: 'white',
              marginLeft: 'auto',
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              paddingHorizontal: 8,
              paddingVertical: 13,
              width: responsiveWidth(40),
            }}>
            <Text style={{color: 'black'}}>what what what what what</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    alignSelf: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
  },
  text: {},
});
