import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import Typography from './Typography';

interface Props {
  count: number;
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

const Count = ({count, top, right, bottom, left}: Props) => {
  return (
    <View style={[styles.countContainer, {top, right, bottom, left}]}>
      <Typography style={styles.count}>{count}</Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  countContainer: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#ffffff',
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: {
    color: '#ffffff',
    fontWeight: '500',
    marginTop: Platform.OS === 'android' ? -1 : 0, // Android fix for borderWidth
  },
});

export default Count;
