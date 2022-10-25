import React from 'react';
import {StyleSheet, View} from 'react-native';
import Typography from '../components/Typography';

const EmptyScreen = () => {
  return (
    <View style={styles.container}>
      <Typography>Empty</Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default EmptyScreen;
