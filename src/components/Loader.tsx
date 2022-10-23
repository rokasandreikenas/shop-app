import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';

interface Props {
  spaced?: boolean;
  center?: boolean;
}

const Loader = ({spaced = true, center = false}: Props) => {
  return (
    <ActivityIndicator
      size="large"
      style={[spaced && styles.space, center && styles.center]}
    />
  );
};

const styles = StyleSheet.create({
  space: {
    margin: 32,
  },
  center: {
    justifyContent: 'center',
  },
});

export default Loader;
