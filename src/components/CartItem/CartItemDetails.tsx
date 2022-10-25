import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CartItemDefinition} from '../../types/cart';
import ItemDescription from '../Item/ItemDescription';
import ItemName from '../Item/ItemName';
import ItemPrice from '../Item/ItemPrice';
import Typography from '../Typography';

interface Props {
  cartItem: CartItemDefinition;
}

const CartItemDetails = ({cartItem}: Props) => {
  return (
    <>
      <View style={styles.block}>
        <ItemName name={cartItem.name} />
      </View>
      <Typography style={styles.title}>Lorem, ipsum dolor</Typography>
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
