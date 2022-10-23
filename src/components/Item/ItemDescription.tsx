import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {ItemDefinition} from '../../types/item';

interface Props {
  description: ItemDefinition['description'];
  fontSize?: number;
}

const ItemDescription = ({description, fontSize = 14}: Props) => {
  return <Text style={[styles.description, {fontSize}]}>{description}</Text>;
};

const styles = StyleSheet.create({
  description: {
    color: 'grey',
  },
});

export default ItemDescription;
