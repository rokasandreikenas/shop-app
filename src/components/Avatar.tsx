import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Typography from './Typography';

interface Props {
  title?: string;
  image?: any;
  size?: 'small';
  rounded?: boolean;
}

const Avatar = ({title = '', image, rounded = false}: Props) => {
  return (
    <View style={[styles.container, rounded && styles.rounded]}>
      {image ? (
        <Image style={[styles.container, rounded && styles.rounded]} source={image} />
      ) : (
        <Typography>{title}</Typography>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rounded: {
    borderRadius: 30,
  },
});

export default Avatar;
