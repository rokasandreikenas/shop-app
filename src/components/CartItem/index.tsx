import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {CartItemDefinition} from '../../types/cart';
import CartItemCounter from './CartItemCounter';
import CartItemDetails from './CartItemDetails';
import CartItemImage from './CartItemImage';

interface Props {
  cartItem: CartItemDefinition;
  isLoading: boolean;
  openItemDetails: () => void;
  handleUpdateQuantity: (id: CartItemDefinition['item_id'], quantity: number, type: 'reduce' | 'increase') => void;
}

const CartItem = ({cartItem, isLoading, openItemDetails, handleUpdateQuantity}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSide}>
        <TouchableOpacity onPress={openItemDetails}>
          <CartItemImage image={cartItem.image} />
        </TouchableOpacity>
        <CartItemCounter cartItem={cartItem} isLoading={isLoading} handleUpdateQuantity={handleUpdateQuantity} />
      </View>
      <View style={styles.rightSide}>
        <CartItemDetails cartItem={cartItem} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftSide: {
    width: '35%',
  },
  rightSide: {
    width: '55%',
  },
});

export default CartItem;
