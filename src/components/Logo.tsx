import React from 'react';
import {Platform, StyleSheet, Text} from 'react-native';
import {getSecondaryFont} from '../utils/font';

const Logo = () => {
  return <Text style={styles.logo}>baggz</Text>;
};

const styles = StyleSheet.create({
  logo: {
    fontSize: 26,
    fontWeight: '500',
    fontFamily: getSecondaryFont(Platform.OS),
  },
});

export default Logo;
