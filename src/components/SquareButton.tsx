import React from 'react';
import {Image, ImageSourcePropType, StyleSheet, TouchableOpacity} from 'react-native';

interface Props {
  image: ImageSourcePropType;
  onPress: () => void;
  width?: number | string;
  height?: number | string;
  iconSize?: number;
  disabled?: boolean;
}

const defaultSize = 50;

const SquareButton = ({
  image,
  onPress,
  width = defaultSize,
  height = defaultSize,
  iconSize = 24,
  disabled = false,
}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, {width, height}]} disabled={disabled}>
      <Image source={image} style={[styles.icon, {width: iconSize, height: iconSize}]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    tintColor: '#ffffff',
  },
});

export default SquareButton;
