import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ItemDefinition} from '../../types/item';
import CartItemCounter from './CartItemCounter';
import CartItemDetails from './CartItemDetails';
import CartItemImage from './CartItemImage';

interface Props {
  item: ItemDefinition;
}

const CartItem = ({item}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSide}>
        <CartItemImage image={item.image} />
        <CartItemCounter />
      </View>
      <View style={styles.rightSide}>
        <CartItemDetails item={item} />
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
