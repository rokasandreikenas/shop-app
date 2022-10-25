import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import {getSecondaryFont} from '../utils/font';
import Typography from './Typography';

const Logo = () => {
  return <Typography style={styles.logo}>baggz</Typography>;
};

const styles = StyleSheet.create({
  logo: {
    fontSize: 26,
    fontWeight: '500',
    fontFamily: getSecondaryFont(Platform.OS),
    color: '#000000',
  },
});

export default Logo;
