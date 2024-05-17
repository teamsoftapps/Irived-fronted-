import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import WrapperContainer from '../Components/WrapperContainer';
import {FontFamily, images} from '../utils';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
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
  return (
    <WrapperContainer>
      <View style={styles.top}>
        <TouchableOpacity>
          <Image
            source={images.back}
            style={{width: responsiveWidth(6), height: responsiveHeight(2.5)}}
          />
        </TouchableOpacity>
        <View style={styles.search}>
          <Image
            source={images.search}
            tintColor={'#788DF3'}
            style={{marginHorizontal: 10}}
          />
          <TextInput
            placeholder="Enter Something"
            numberOfLines={1}
            style={{width: responsiveWidth(64), height: responsiveHeight(6)}}
            placeholderTextColor={'black'}
          />
        </View>
      </View>
      <View style={{width: responsiveWidth(85), alignSelf: 'center'}}>
        <Text style={styles.heading}>Recent Searches</Text>
        <FlatList
          data={recent}
          contentContainerStyle={{
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
          renderItem={({item}) => (
            <View key={item.id} style={styles.tag}>
              <Text style={{color: '#788DF3', fontFamily: FontFamily.Medium}}>
                {item.name}
              </Text>
            </View>
          )}
        />
        <Text style={styles.heading}>Popular</Text>
        <FlatList
          data={popular}
          contentContainerStyle={{
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
          renderItem={({item}) => (
            <View key={item.id} style={styles.tag}>
              <Text style={{color: '#788DF3', fontFamily: FontFamily.Medium}}>
                {item.name}
              </Text>
            </View>
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
    borderRadius: 40,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#788DF3',
  },
  heading: {
    fontFamily: FontFamily.Semi_Bold,
    fontSize: responsiveFontSize(2.5),
    color: 'black',
    marginVertical: responsiveHeight(3),
  },
  tag: {
    padding: 10,
    borderWidth: 3,
    borderColor: '#788DF3',
    paddingHorizontal: 15,
    borderRadius: 30,
    marginHorizontal: 2.5,
    marginVertical: 4,
  },
});
