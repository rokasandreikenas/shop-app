import React from 'react';
import {StyleSheet, View} from 'react-native';
import {images} from '../../consts/images';
import {CartItemDefinition} from '../../types/cart';
import SquareButton from '../SquareButton';
import Typography from '../Typography';

interface Props {
  cartItem: CartItemDefinition;
  isLoading: boolean;
  handleUpdateQuantity: (id: CartItemDefinition['item_id'], quantity: number, type: 'reduce' | 'increase') => void;
}

const boxSize = 36;

const CartItemCounter = ({cartItem, isLoading, handleUpdateQuantity}: Props) => {
  return (
    <View style={styles.container}>
      <SquareButton
        image={images.minus}
        width={boxSize}
        height={boxSize}
        iconSize={10}
        disabled={isLoading}
        onPress={() => handleUpdateQuantity(cartItem.item_id, cartItem.quantity, 'reduce')}
      />
      <View style={styles.countContainer}>
        <Typography style={styles.count}>{cartItem.quantity}</Typography>
      </View>
      <SquareButton
        image={images.plus}
        width={boxSize}
        height={boxSize}
        iconSize={10}
        disabled={isLoading}
        onPress={() => handleUpdateQuantity(cartItem.item_id, cartItem.quantity, 'increase')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  countContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: boxSize,
    height: boxSize,
    borderWidth: 1,
  },
  count: {
    fontSize: 18,
    fontWeight: '500',
  },
});

export default CartItemCounter;
