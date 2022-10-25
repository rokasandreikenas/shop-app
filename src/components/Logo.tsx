import React from 'react';
import {StyleSheet} from 'react-native';
import Typography from './Typography';

const Logo = () => {
  return (
    <Typography style={styles.logo} secondaryFont>
      baggz
    </Typography>
  );
};

const styles = StyleSheet.create({
  logo: {
    fontSize: 26,
    fontWeight: '500',
    color: '#000000',
  },
});

export default Logo;
