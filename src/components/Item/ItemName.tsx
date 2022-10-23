import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {secondaryFont} from '../../consts/font';
import {ItemDefinition} from '../../types/item';

interface Props {
  name: ItemDefinition['name'];
  fontSize?: number;
}

const ItemName = ({name, fontSize = 18}: Props) => {
  return <Text style={[styles.name, {fontSize}]}>{name}</Text>;
};

const styles = StyleSheet.create({
  name: {
    fontFamily: secondaryFont,
    fontWeight: '500',
  },
});

export default ItemName;
