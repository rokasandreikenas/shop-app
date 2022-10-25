import React from 'react';
import {StyleSheet} from 'react-native';
import {dollarSign} from '../../consts/currency';
import {ItemDefinition} from '../../types/item';
import Typography from '../Typography';

interface Props {
  price: ItemDefinition['price'];
  fontSize?: number;
}

const ItemPrice = ({price, fontSize = 18}: Props) => {
  return (
    <Typography style={[styles.price, {fontSize}]}>
      {dollarSign}
      {price}
    </Typography>
  );
};

const styles = StyleSheet.create({
  price: {
    fontWeight: '900',
  },
});

export default ItemPrice;
