import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {dollarSign} from '../../consts/currency';
import {ItemDefinition} from '../../types/item';

interface Props {
  price: ItemDefinition['price'];
  fontSize?: number;
}

const ItemPrice = ({price, fontSize = 18}: Props) => {
  return (
    <Text style={[styles.price, {fontSize}]}>
      {dollarSign}
      {price}
    </Text>
  );
};

const styles = StyleSheet.create({
  price: {
    fontWeight: '900',
  },
});

export default ItemPrice;
