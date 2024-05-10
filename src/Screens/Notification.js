import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Image,
} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Profile = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F5F5F5'}}>
      <View style={styles.main}>
        <Pressable style={styles.notification}>
          <View>
            <Image
              source={{
                uri: 'https://softappsio.slack.com/files/U063ASRAQDB/F071TH7EDAB/group_254.png',
              }}
              style={{width: 10, height: 10}}
            />
            <Text style={styles.heading}>Order Confirmation</Text>
            <Text style={styles.date}>19 Dec, 2023 | 20:50 PM</Text>
          </View>
          <View style={{marginTop: 14}}>
            <Text>
              Your order has been confirmed! Sit back and relax while we prepare
              your items for delivery. 🛵
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  notification: {
    backgroundColor: '#FFFFFF',
    width: responsiveWidth(80),
    borderRadius: 15,
    padding: responsiveWidth(4),
  },
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontWeight: '600',
    fontSize: responsiveFontSize(2.4),
    color: 'black',
  },
  date: {
    color: '#D0D0D0',
  },
});
