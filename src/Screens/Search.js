import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import WrapperContainer from '../Components/WrapperContainer';
import {FontFamily, images} from '../utils';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
const recent = [
  {name: 'E-liquids & Juices', id: 1},
  {name: 'Mods & Tanks', id: 2},
  {name: 'Pod Systems', id: 3},
  {name: 'Accessories', id: 4},
];
const popular = [
  {name: 'E-liquids & Juices', id: 1},
  {name: 'Mods & Tanks', id: 2},
  {name: 'Pod Systems', id: 3},
  {name: 'Accessories', id: 4},
  {name: 'Nicotine Salts', id: 5},
  {name: 'E-liquids & Juices', id: 6},
];
const Search = () => {
  const navigation = useNavigation();
  const [blur, setblur] = useState(false);
  return (
    <WrapperContainer>
      <View style={styles.top}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={images.back}
            style={{
              width: responsiveWidth(6),
              height: responsiveWidth(4),
              resizeMode: 'contain',
            }}
          />
        </TouchableOpacity>
        <View
          style={[
            styles.search,
            {borderColor: blur ? 'transparent' : '#788DF3'},
          ]}>
          <Image
            source={images.search}
            tintColor={'#788DF3'}
            style={{
              marginHorizontal: 10,
              tintColor: blur ? 'gray' : '#788DF3',
            }}
          />
          <TextInput
            onBlur={() => {
              setblur(true);
            }}
            onFocus={() => {
              setblur(false);
            }}
            autoFocus={true}
            placeholder="Search"
            numberOfLines={1}
            style={{
              width: responsiveWidth(64),
              height: responsiveHeight(6),
              fontFamily: FontFamily.Medium,
            }}
            placeholderTextColor={'black'}
          />
        </View>
      </View>
      <View style={{width: responsiveWidth(85), alignSelf: 'center'}}>
        <Text style={styles.heading}>Recent Searches</Text>
        <FlatList
          numColumns={2}
          data={recent}
          renderItem={({item}) => (
            <TouchableOpacity
              activeOpacity={0.8}
              key={item.id}
              style={styles.tag}>
              <Text style={{color: '#788DF3', fontFamily: FontFamily.Medium}}>
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />
        <Text style={styles.heading}>Popular</Text>
        <FlatList
          data={popular}
          numColumns={2}
          renderItem={({item}) => (
            <TouchableOpacity
              activeOpacity={0.8}
              key={item.id}
              style={styles.tag}>
              <Text style={{color: '#788DF3', fontFamily: FontFamily.Medium}}>
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </WrapperContainer>
  );
};

export default Search;

const styles = StyleSheet.create({
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    width: responsiveWidth(85),
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: responsiveHeight(5),
  },
  search: {
    backgroundColor: '#F5F5F5',
    borderRadius: responsiveWidth(10),
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: responsiveHeight(0.3),
  },
  heading: {
    fontFamily: FontFamily.Semi_Bold,
    fontSize: responsiveFontSize(2.5),
    color: 'black',
    marginVertical: responsiveHeight(3),
  },
  tag: {
    padding: responsiveHeight(1.4),
    borderWidth: responsiveHeight(0.3),
    borderColor: '#788DF3',
    paddingHorizontal: responsiveWidth(3.5),
    borderRadius: responsiveWidth(5),
    marginHorizontal: responsiveWidth(0.5),
    marginVertical: responsiveHeight(0.6),
  },
});
