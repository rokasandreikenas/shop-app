import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {dollarSign} from '../../consts/currency';
import {ItemDefinition} from '../../types/item';

interface Props {
  price: ItemDefinition['price'];
}

const Price = ({price}: Props) => {
  return (
    <Text style={styles.price}>
      {dollarSign}
      {price}
    </Text>
  );
};

const styles = StyleSheet.create({
  price: {
    fontSize: 18,
    fontWeight: '900',
  },
});

export default Price;
