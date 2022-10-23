import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ItemDefinition} from '../../types/item';
import ItemName from '../Item/ItemName';
import ItemPrice from '../Item/ItemPrice';

interface Props {
  item: ItemDefinition;
}

const CartItemDetails = ({item}: Props) => {
  return (
    <>
      <View style={styles.block}>
        <ItemName name={item.name} />
      </View>
      <Text style={styles.title}>Lorem, ipsum dolor</Text>
      <Text style={styles.subtitle}>Lorem ipsum dolor sit amet.</Text>
      <View style={styles.block}>
        <ItemPrice price={item.price} />
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
  subtitle: {
    fontSize: 12,
    color: 'grey',
  },
});

export default CartItemDetails;
