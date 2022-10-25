import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {CartItemDefinition} from '../../types/cart';

interface Props {
  image: CartItemDefinition['image'];
}

const CartItemImage = ({image}: Props) => {
  return <Image source={{uri: image}} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 80,
    marginBottom: 8,
    resizeMode: 'contain',
  },
});

export default CartItemImage;
