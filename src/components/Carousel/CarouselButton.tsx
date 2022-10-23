import React from 'react';
import {Pressable, Image, StyleSheet, ImageSourcePropType} from 'react-native';

interface Props {
  onPress: () => void;
  image: ImageSourcePropType;
}

const CarouselButton = ({onPress, image}: Props) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image source={image} style={styles.icon} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    tintColor: '#ffffff',
  },
});

export default CarouselButton;
