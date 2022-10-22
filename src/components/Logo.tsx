import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {secondaryFont} from '../consts/font';

const Logo = () => {
  return <Text style={styles.logo}>baggz</Text>;
};

const styles = StyleSheet.create({
  logo: {
    fontSize: 26,
    fontWeight: '500',
    fontFamily: secondaryFont,
  },
});

export default Logo;
