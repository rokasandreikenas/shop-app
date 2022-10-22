import React from 'react';
import {View, StyleSheet} from 'react-native';
import Logo from '../components/Logo';

const StackNavigationHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Logo />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    paddingLeft: 8,
  },
});

export default StackNavigationHeader;
