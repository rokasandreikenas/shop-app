import React from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';
import {timesNewRoman} from '../consts/font';

interface Props extends TextProps {
  secondaryFont?: boolean;
}

const Typography = ({children = '', style, secondaryFont = false, ...restProps}: Props) => {
  const fontFamily = secondaryFont ? timesNewRoman : undefined;
  return (
    <Text style={[styles.base, {fontFamily}, style]} {...restProps}>
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
