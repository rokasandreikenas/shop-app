import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Logo = () => {
  return <Text style={styles.logo}>baggz</Text>;
};

const styles = StyleSheet.create({
  logo: {
    fontSize: 26,
    fontWeight: '500',
    fontFamily: 'Times New Roman',
  },
});

export default Logo;
