import {StyleSheet, Text, View, SafeAreaView,ScrollView} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import React from 'react';

const Message = () => {
  return (
    <SafeAreaView style={{flex:1}}>
    <ScrollView showsVerticalScrollIndicator={false} style={{flex:1}}>
    <View style={{height:responsiveHeight(8), backgroundColor:"white"
    }}>
      
    </View>
      <View style={styles.container}>
      <Text style={styles.text}>Today</Text>
    </View>
    <View style={{ paddingHorizontal:30, marginVertical:8}}>
    <View style={{backgroundColor:"white",marginLeft:"auto",borderTopLeftRadius: 10,borderBottomLeftRadius: 10,borderBottomRightRadius: 10,paddingHorizontal:8,paddingVertical:13, width:responsiveWidth(40)}}>
      <Text style={{color:"black"}}>what what what what what</Text>
    </View>
    </View>
    <View style={{ paddingHorizontal:30, marginVertical:8}}>
    <View style={{backgroundColor:"#4361EE",borderTopRightRadius: 10,borderBottomLeftRadius: 10,borderBottomRightRadius: 10,paddingHorizontal:8,paddingVertical:13, width:responsiveWidth(40)}}>
      <Text style={{color:"white"}}>what what what what what</Text>
    </View>
    </View><View style={{ paddingHorizontal:30, marginVertical:8}}>
    <View style={{backgroundColor:"#4361EE",borderTopRightRadius: 10,borderBottomLeftRadius: 10,borderBottomRightRadius: 10,paddingHorizontal:8,paddingVertical:13, width:responsiveWidth(40)}}>
      <Text style={{color:"white"}}>what what what what what</Text>
    </View>
    </View><View style={{ paddingHorizontal:30, marginVertical:8}}>
    <View style={{backgroundColor:"#4361EE",borderTopRightRadius: 10,borderBottomLeftRadius: 10,borderBottomRightRadius: 10,paddingHorizontal:8,paddingVertical:13, width:responsiveWidth(40)}}>
      <Text style={{color:"white"}}>what what what what what</Text>
    </View>
    </View><View style={{ paddingHorizontal:30, marginVertical:8}}>
    <View style={{backgroundColor:"white",marginLeft:"auto",borderTopLeftRadius: 10,borderBottomLeftRadius: 10,borderBottomRightRadius: 10,paddingHorizontal:8,paddingVertical:13, width:responsiveWidth(40)}}>
      <Text style={{color:"black"}}>what what what what what</Text>
    </View>
    </View>
    <View style={{ paddingHorizontal:30, marginVertical:8}}>
    <View style={{backgroundColor:"white",marginLeft:"auto",borderTopLeftRadius: 10,borderBottomLeftRadius: 10,borderBottomRightRadius: 10,paddingHorizontal:8,paddingVertical:13, width:responsiveWidth(40)}}>
      <Text style={{color:"black"}}>what what what what what</Text>
    </View>
    </View>
    <View style={{ paddingHorizontal:30, marginVertical:8}}>
    <View style={{backgroundColor:"white",marginLeft:"auto",borderTopLeftRadius: 10,borderBottomLeftRadius: 10,borderBottomRightRadius: 10,paddingHorizontal:8,paddingVertical:13, width:responsiveWidth(40)}}>
      <Text style={{color:"black"}}>what what what what what</Text>
    </View>
    </View>
    <View style={{ paddingHorizontal:30, marginVertical:8}}>
    <View style={{backgroundColor:"white",marginLeft:"auto",borderTopLeftRadius: 10,borderBottomLeftRadius: 10,borderBottomRightRadius: 10,paddingHorizontal:8,paddingVertical:13, width:responsiveWidth(40)}}>
      <Text style={{color:"black"}}>what what what what what</Text>
    </View>
    </View>
    <View style={{ paddingHorizontal:30, marginVertical:8}}>
    <View style={{backgroundColor:"white",marginLeft:"auto",borderTopLeftRadius: 10,borderBottomLeftRadius: 10,borderBottomRightRadius: 10,paddingHorizontal:8,paddingVertical:13, width:responsiveWidth(40)}}>
      <Text style={{color:"black"}}>what what what what what</Text>
    </View>
    </View>
    <View style={{ paddingHorizontal:30, marginVertical:8}}>
    <View style={{backgroundColor:"white",marginLeft:"auto",borderTopLeftRadius: 10,borderBottomLeftRadius: 10,borderBottomRightRadius: 10,paddingHorizontal:8,paddingVertical:13, width:responsiveWidth(40)}}>
      <Text style={{color:"black"}}>what what what what what</Text>
    </View>
    </View>
    <View style={{ paddingHorizontal:30, marginVertical:8}}>
    <View style={{backgroundColor:"white",marginLeft:"auto",borderTopLeftRadius: 10,borderBottomLeftRadius: 10,borderBottomRightRadius: 10,paddingHorizontal:8,paddingVertical:13, width:responsiveWidth(40)}}>
      <Text style={{color:"black"}}>what what what what what</Text>
    </View>
    </View>
    
    </ScrollView>
    </SafeAreaView>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    marginVertical:20,
    alignSelf: 'center',
    backgroundColor: 'white', 
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
  },
  text: {
    
  },
});