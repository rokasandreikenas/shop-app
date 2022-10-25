import React from 'react';
import {Image, Pressable, StyleSheet} from 'react-native';
import Count from '../../components/Count';
import {images} from '../../consts/images';

interface Props {
  onPress: () => void;
  count: number;
}

const TabNavigationCart = ({onPress, count}: Props) => {
  return (
    <Pressable onPress={onPress}>
      <Image style={styles.icon} source={images.basket} />
      <Count count={count} top={12} right={12} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icon: {
    margin: 20,
  },
});

export default TabNavigationCart;
