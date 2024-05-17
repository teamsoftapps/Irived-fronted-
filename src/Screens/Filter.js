import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Platform,
} from 'react-native';
import React, {Component} from 'react';
import WrapperContainer from '../Components/WrapperContainer';
import HeaderComponent from '../Components/Headers/HeaderComponent';

import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Formik} from 'formik';
import {FontFamily, colors, images} from '../utils';
import ButtonComp from '../Components/ButtonComp';

const Brands = [
  {
    id: 1,
    name: 'ALLO',
  },
  {
    id: 2,
    name: 'Apple Drop',
  },
  {
    id: 3,
    name: 'Banana Bang',
  },
  {
    id: 4,
    name: 'ALLO',
  },
  {
    id: 5,
    name: 'Apple Drop',
  },
  {
    id: 6,
    name: 'Banana Bang',
  },
];

const ProductType = [
  {
    id: 1,
    name: 'ALLO',
  },
  {
    id: 2,
    name: 'Apple Drop',
  },
  {
    id: 3,
    name: 'Banana Bang',
  },
];
const Availability = [
  {
    id: 1,
    name: 'In Stock',
  },
  {
    id: 2,
    name: 'Out of Stock',
  },
];
const Filter = () => {
  return (
    <WrapperContainer>
      <HeaderComponent
        img_styles={{
          width: responsiveWidth(11),
          height: responsiveHeight(4.1),
        }}
        icon={'close_icon'}
        style={{
          borderBottomColor: 'gray',
          borderBottomWidth: responsiveHeight(0.1),
        }}
        top_text={'Filter'}
      />
      <Formik
        initialValues={{ALLO: '', age: ''}}
        onSubmit={values => {
          console.log('Form values:', values);
        }}>
        {({handleChange, handleSubmit, values}) => (
          <>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                gap: responsiveHeight(3),
                position: 'relative',
                flexGrow: 1,

                alignItems: 'center',
              }}>
              {/* BRANDS */}
              <Text style={styles.chackBoxHeading}>Brand</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: responsiveWidth(80),
                  justifyContent: 'space-between',
                }}>
                <Text style={styles.categoryText}>ALLO</Text>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    // marginVertical: 5,
                  }}
                  onPress={() => handleChange('ALLO')('ALLO')}>
                  <View
                    style={{
                      // backgroundColor: 'red',
                      height: responsiveWidth(5),
                      width: responsiveWidth(5),
                      borderRadius: responsiveWidth(100),
                      borderWidth: responsiveWidth(0.5),
                      borderColor:
                        values.ALLO === 'HTML' ? 'blue' : colors.secondary,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    {values.ALLO === 'ALLO' && (
                      <View
                        style={{
                          height: responsiveWidth(3),
                          width: responsiveWidth(3),
                          borderRadius: responsiveWidth(100),
                          backgroundColor: colors.secondary,
                        }}
                      />
                    )}
                  </View>
                </TouchableOpacity>

                {/* Render similar TouchableOpacity components for CSS and JavaScript options */}
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: responsiveWidth(80),
                  justifyContent: 'space-between',
                  // gap: responsiveHeight(2),
                }}>
                <Text style={styles.categoryText}>ALLO</Text>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    // marginVertical: 5,
                  }}
                  onPress={() => handleChange('ALLO')('ALLO')}>
                  <View
                    style={{
                      // backgroundColor: 'red',
                      height: responsiveWidth(5),
                      width: responsiveWidth(5),
                      borderRadius: responsiveWidth(100),
                      borderWidth: responsiveWidth(0.5),
                      borderColor:
                        values.ALLO === 'HTML' ? 'blue' : colors.secondary,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    {values.ALLO === 'ALLO' && (
                      <View
                        style={{
                          height: responsiveWidth(3),
                          width: responsiveWidth(3),
                          borderRadius: responsiveWidth(100),
                          backgroundColor: colors.secondary,
                        }}
                      />
                    )}
                  </View>
                </TouchableOpacity>

                {/* Render similar TouchableOpacity components for CSS and JavaScript options */}
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: responsiveWidth(80),
                  justifyContent: 'space-between',
                  // gap: responsiveHeight(2),
                }}>
                <Text style={styles.categoryText}>ALLO</Text>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    // marginVertical: 5,
                  }}
                  onPress={() => handleChange('ALLO')('ALLO')}>
                  <View
                    style={{
                      // backgroundColor: 'red',
                      height: responsiveWidth(5),
                      width: responsiveWidth(5),
                      borderRadius: responsiveWidth(100),
                      borderWidth: responsiveWidth(0.5),
                      borderColor:
                        values.ALLO === 'HTML' ? 'blue' : colors.secondary,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    {values.ALLO === 'ALLO' && (
                      <View
                        style={{
                          height: responsiveWidth(3),
                          width: responsiveWidth(3),
                          borderRadius: responsiveWidth(100),
                          backgroundColor: colors.secondary,
                        }}
                      />
                    )}
                  </View>
                </TouchableOpacity>

                {/* Render similar TouchableOpacity components for CSS and JavaScript options */}
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: responsiveWidth(80),
                  justifyContent: 'space-between',
                  // gap: responsiveHeight(2),
                }}>
                <Text style={styles.categoryText}>ALLO</Text>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    // marginVertical: 5,
                  }}
                  onPress={() => handleChange('ALLO')('ALLO')}>
                  <View
                    style={{
                      // backgroundColor: 'red',
                      height: responsiveWidth(5),
                      width: responsiveWidth(5),
                      borderRadius: responsiveWidth(100),
                      borderWidth: responsiveWidth(0.5),
                      borderColor:
                        values.ALLO === 'HTML' ? 'blue' : colors.secondary,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    {values.ALLO === 'ALLO' && (
                      <View
                        style={{
                          height: responsiveWidth(3),
                          width: responsiveWidth(3),
                          borderRadius: responsiveWidth(100),
                          backgroundColor: colors.secondary,
                        }}
                      />
                    )}
                  </View>
                </TouchableOpacity>

                {/* Render similar TouchableOpacity components for CSS and JavaScript options */}
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: responsiveWidth(80),
                  justifyContent: 'space-between',
                  // gap: responsiveHeight(2),
                }}>
                <Text style={styles.categoryText}>ALLO</Text>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    // marginVertical: 5,
                  }}
                  onPress={() => handleChange('ALLO')('ALLO')}>
                  <View
                    style={{
                      // backgroundColor: 'red',
                      height: responsiveWidth(5),
                      width: responsiveWidth(5),
                      borderRadius: responsiveWidth(100),
                      borderWidth: responsiveWidth(0.5),
                      borderColor:
                        values.ALLO === 'HTML' ? 'blue' : colors.secondary,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    {values.ALLO === 'ALLO' && (
                      <View
                        style={{
                          height: responsiveWidth(3),
                          width: responsiveWidth(3),
                          borderRadius: responsiveWidth(100),
                          backgroundColor: colors.secondary,
                        }}
                      />
                    )}
                  </View>
                </TouchableOpacity>

                {/* Render similar TouchableOpacity components for CSS and JavaScript options */}
              </View>
              {/* PRODUCTS TYPE */}
              <Text style={styles.chackBoxHeading}>Product Type</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: responsiveWidth(80),
                  justifyContent: 'space-between',
                  // gap: responsiveHeight(2),
                }}>
                <Text style={styles.categoryText}>ALLO</Text>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    // marginVertical: 5,
                  }}
                  onPress={() => handleChange('ALLO')('ALLO')}>
                  <View
                    style={{
                      // backgroundColor: 'red',
                      height: responsiveWidth(5),
                      width: responsiveWidth(5),
                      borderRadius: responsiveWidth(100),
                      borderWidth: responsiveWidth(0.5),
                      borderColor:
                        values.ALLO === 'HTML' ? 'blue' : colors.secondary,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    {values.ALLO === 'ALLO' && (
                      <View
                        style={{
                          height: responsiveWidth(3),
                          width: responsiveWidth(3),
                          borderRadius: responsiveWidth(100),
                          backgroundColor: colors.secondary,
                        }}
                      />
                    )}
                  </View>
                </TouchableOpacity>

                {/* Render similar TouchableOpacity components for CSS and JavaScript options */}
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: responsiveWidth(80),
                  justifyContent: 'space-between',
                  // gap: responsiveHeight(2),
                }}>
                <Text style={styles.categoryText}>ALLO</Text>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    // marginVertical: 5,
                  }}
                  onPress={() => handleChange('ALLO')('ALLO')}>
                  <View
                    style={{
                      // backgroundColor: 'red',
                      height: responsiveWidth(5),
                      width: responsiveWidth(5),
                      borderRadius: responsiveWidth(100),
                      borderWidth: responsiveWidth(0.5),
                      borderColor:
                        values.ALLO === 'HTML' ? 'blue' : colors.secondary,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    {values.ALLO === 'ALLO' && (
                      <View
                        style={{
                          height: responsiveWidth(3),
                          width: responsiveWidth(3),
                          borderRadius: responsiveWidth(100),
                          backgroundColor: colors.secondary,
                        }}
                      />
                    )}
                  </View>
                </TouchableOpacity>

                {/* Render similar TouchableOpacity components for CSS and JavaScript options */}
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: responsiveWidth(80),
                  justifyContent: 'space-between',
                  // gap: responsiveHeight(2),
                }}>
                <Text style={styles.categoryText}>ALLO</Text>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    // marginVertical: 5,
                  }}
                  onPress={() => handleChange('ALLO')('ALLO')}>
                  <View
                    style={{
                      // backgroundColor: 'red',
                      height: responsiveWidth(5),
                      width: responsiveWidth(5),
                      borderRadius: responsiveWidth(100),
                      borderWidth: responsiveWidth(0.5),
                      borderColor:
                        values.ALLO === 'HTML' ? 'blue' : colors.secondary,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    {values.ALLO === 'ALLO' && (
                      <View
                        style={{
                          height: responsiveWidth(3),
                          width: responsiveWidth(3),
                          borderRadius: responsiveWidth(100),
                          backgroundColor: colors.secondary,
                        }}
                      />
                    )}
                  </View>
                </TouchableOpacity>

                {/* Render similar TouchableOpacity components for CSS and JavaScript options */}
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: responsiveWidth(80),
                  justifyContent: 'space-between',
                  // gap: responsiveHeight(2),
                }}>
                <Text style={styles.categoryText}>ALLO</Text>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    // marginVertical: 5,
                  }}
                  onPress={() => handleChange('ALLO')('ALLO')}>
                  <View
                    style={{
                      // backgroundColor: 'red',
                      height: responsiveWidth(5),
                      width: responsiveWidth(5),
                      borderRadius: responsiveWidth(100),
                      borderWidth: responsiveWidth(0.5),
                      borderColor:
                        values.ALLO === 'HTML' ? 'blue' : colors.secondary,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    {values.ALLO === 'ALLO' && (
                      <View
                        style={{
                          height: responsiveWidth(3),
                          width: responsiveWidth(3),
                          borderRadius: responsiveWidth(100),
                          backgroundColor: colors.secondary,
                        }}
                      />
                    )}
                  </View>
                </TouchableOpacity>

                {/* Render similar TouchableOpacity components for CSS and JavaScript options */}
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: responsiveWidth(80),
                  justifyContent: 'space-between',
                  // gap: responsiveHeight(2),
                }}>
                <Text style={styles.categoryText}>ALLO</Text>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    // marginVertical: 5,
                  }}
                  onPress={() => handleChange('ALLO')('ALLO')}>
                  <View
                    style={{
                      // backgroundColor: 'red',
                      height: responsiveWidth(5),
                      width: responsiveWidth(5),
                      borderRadius: responsiveWidth(100),
                      borderWidth: responsiveWidth(0.5),
                      borderColor:
                        values.ALLO === 'HTML' ? 'blue' : colors.secondary,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    {values.ALLO === 'ALLO' && (
                      <View
                        style={{
                          height: responsiveWidth(3),
                          width: responsiveWidth(3),
                          borderRadius: responsiveWidth(100),
                          backgroundColor: colors.secondary,
                        }}
                      />
                    )}
                  </View>
                </TouchableOpacity>

                {/* Render similar TouchableOpacity components for CSS and JavaScript options */}
              </View>
              <Text style={styles.chackBoxHeading}>Availability</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: responsiveWidth(80),
                  justifyContent: 'space-between',
                  // gap: responsiveHeight(2),
                }}>
                <Text style={styles.categoryText}>ALLO</Text>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    // marginVertical: 5,
                  }}
                  onPress={() => handleChange('ALLO')('ALLO')}>
                  <View
                    style={{
                      // backgroundColor: 'red',
                      height: responsiveWidth(5),
                      width: responsiveWidth(5),
                      borderRadius: responsiveWidth(100),
                      borderWidth: responsiveWidth(0.5),
                      borderColor:
                        values.ALLO === 'HTML' ? 'blue' : colors.secondary,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    {values.ALLO === 'ALLO' && (
                      <View
                        style={{
                          height: responsiveWidth(3),
                          width: responsiveWidth(3),
                          borderRadius: responsiveWidth(100),
                          backgroundColor: colors.secondary,
                        }}
                      />
                    )}
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: responsiveWidth(80),
                  justifyContent: 'space-between',
                  // gap: responsiveHeight(2),
                }}>
                <Text style={styles.categoryText}>ALLO</Text>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    // marginVertical: 5,
                  }}
                  onPress={() => handleChange('ALLO')('ALLO')}>
                  <View
                    style={{
                      // backgroundColor: 'red',
                      height: responsiveWidth(5),
                      width: responsiveWidth(5),
                      borderRadius: responsiveWidth(100),
                      borderWidth: responsiveWidth(0.5),
                      borderColor:
                        values.ALLO === 'HTML' ? 'blue' : colors.secondary,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    {values.ALLO === 'ALLO' && (
                      <View
                        style={{
                          height: responsiveWidth(3),
                          width: responsiveWidth(3),
                          borderRadius: responsiveWidth(100),
                          backgroundColor: colors.secondary,
                        }}
                      />
                    )}
                  </View>
                </TouchableOpacity>

                {/* Render similar TouchableOpacity components for CSS and JavaScript options */}
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: responsiveWidth(80),
                  justifyContent: 'space-between',
                  // gap: responsiveHeight(2),
                }}>
                <Text style={styles.categoryText}>ALLO</Text>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    // marginVertical: 5,
                  }}
                  onPress={() => handleChange('ALLO')('ALLO')}>
                  <View
                    style={{
                      // backgroundColor: 'red',
                      height: responsiveWidth(5),
                      width: responsiveWidth(5),
                      borderRadius: responsiveWidth(100),
                      borderWidth: responsiveWidth(0.5),
                      borderColor:
                        values.ALLO === 'HTML' ? 'blue' : colors.secondary,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    {values.ALLO === 'ALLO' && (
                      <View
                        style={{
                          height: responsiveWidth(3),
                          width: responsiveWidth(3),
                          borderRadius: responsiveWidth(100),
                          backgroundColor: colors.secondary,
                        }}
                      />
                    )}
                  </View>
                </TouchableOpacity>

                {/* Render similar TouchableOpacity components for CSS and JavaScript options */}
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: responsiveWidth(80),
                  justifyContent: 'space-between',
                  // gap: responsiveHeight(2),
                }}>
                <Text style={styles.categoryText}>ALLO</Text>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    // marginVertical: 5,
                  }}
                  onPress={() => handleChange('ALLO')('ALLO')}>
                  <View
                    style={{
                      // backgroundColor: 'red',
                      height: responsiveWidth(5),
                      width: responsiveWidth(5),
                      borderRadius: responsiveWidth(100),
                      borderWidth: responsiveWidth(0.5),
                      borderColor:
                        values.ALLO === 'HTML' ? 'blue' : colors.secondary,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    {values.ALLO === 'ALLO' && (
                      <View
                        style={{
                          height: responsiveWidth(3),
                          width: responsiveWidth(3),
                          borderRadius: responsiveWidth(100),
                          backgroundColor: colors.secondary,
                        }}
                      />
                    )}
                  </View>
                </TouchableOpacity>

                {/* Render similar TouchableOpacity components for CSS and JavaScript options */}
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: responsiveWidth(80),
                  justifyContent: 'space-between',
                  // gap: responsiveHeight(2),
                }}>
                <Text style={styles.categoryText}>ALLO</Text>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    // marginVertical: 5,
                  }}
                  onPress={() => handleChange('ALLO')('ALLO')}>
                  <View
                    style={{
                      // backgroundColor: 'red',
                      height: responsiveWidth(5),
                      width: responsiveWidth(5),
                      borderRadius: responsiveWidth(100),
                      borderWidth: responsiveWidth(0.5),
                      borderColor:
                        values.ALLO === 'HTML' ? 'blue' : colors.secondary,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    {values.ALLO === 'ALLO' && (
                      <View
                        style={{
                          height: responsiveWidth(3),
                          width: responsiveWidth(3),
                          borderRadius: responsiveWidth(100),
                          backgroundColor: colors.secondary,
                        }}
                      />
                    )}
                  </View>
                </TouchableOpacity>

                {/* Render similar TouchableOpacity components for CSS and JavaScript options */}
              </View>
              <View style={{flexDirection: 'row'}}>
                {/* Render TouchableOpacity components for age options similar to above */}
              </View>
            </ScrollView>
            <View
              style={{
                position: '',
                // bottom: 0,
                top: 0,
                zIndex: 100,
                justifyContent: 'center',
                // shadowColor: '#000',
                // shadowOffset: {
                //   width: 0,
                //   height: 5,
                // },
                // shadowOpacity: 0.34,
                // shadowRadius: 6.27,

                // elevation: 10,
                ...Platform.select({
                  ios: {
                    shadowColor: 'black',
                    shadowOffset: {width: 0, height: 5}, // Vertical offset (adjust height as needed)
                    shadowOpacity: 0.3,
                    shadowRadius: 5,
                  },
                  android: {
                    elevation: 2,
                    shadowColor: 'gray',
                  },
                }),

                height: responsiveHeight(13),
                borderTopRightRadius: responsiveHeight(3),
                borderTopLeftRadius: responsiveHeight(3),
                width: responsiveWidth(100),
              }}>
              <ButtonComp
                text="Submit"
                style={{alignSelf: 'center', marginBottom: 0}}
              />
            </View>
          </>
        )}
      </Formik>
    </WrapperContainer>
  );
};
export default Filter;

const styles = StyleSheet.create({
  chackBoxHeading: {
    marginTop: responsiveHeight(2.5),
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2),
    color: 'black',
    textAlign: 'left',
    width: responsiveWidth(80),
    fontFamily: FontFamily.Bold,
  },
  categoryText: {
    fontSize: responsiveFontSize(1.5),
    color: 'black',
    fontFamily: FontFamily.Regular,
  },
});
