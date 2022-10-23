import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CartItemDefinition} from '../../types/cart';
import ItemDescription from '../Item/ItemDescription';
import ItemName from '../Item/ItemName';
import ItemPrice from '../Item/ItemPrice';

interface Props {
  cartItem: CartItemDefinition;
}

const CartItemDetails = ({cartItem}: Props) => {
  return (
    <>
      <View style={styles.block}>
        <ItemName name={cartItem.name} />
      </View>
      <Text style={styles.title}>Lorem, ipsum dolor</Text>
      <ItemDescription description="Lorem ipsum dolor sit amet" fontSize={12} />
      <View style={styles.block}>
        <ItemPrice price={cartItem.price} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  block: {
    marginVertical: 16,
  },
  title: {
    fontWeight: '500',
  },
});

export default CartItemDetails;
