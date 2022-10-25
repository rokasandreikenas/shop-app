import React from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';

const Typography = ({children = '', style, ...restProps}: TextProps) => {
  return (
    <Text style={[styles.base, style]} {...restProps}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  base: {
    color: '#000000',
  },
});

export default Typography;
