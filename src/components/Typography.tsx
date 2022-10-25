import React from 'react';
import {Platform, StyleSheet, Text, TextProps} from 'react-native';
import {getSecondaryFont} from '../utils/font';

interface Props extends TextProps {
  secondaryFont?: boolean;
}

const Typography = ({children = '', style, secondaryFont = false, ...restProps}: Props) => {
  const fontFamily = secondaryFont ? getSecondaryFont(Platform.OS) : undefined;
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
