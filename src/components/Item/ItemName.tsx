import React from 'react';
import {Platform, StyleSheet, Text} from 'react-native';
import {ItemDefinition} from '../../types/item';
import {getSecondaryFont} from '../../utils/font';

interface Props {
  name: ItemDefinition['name'];
  fontSize?: number;
}

const ItemName = ({name, fontSize = 18}: Props) => {
  return <Text style={[styles.name, {fontSize}]}>{name}</Text>;
};

const styles = StyleSheet.create({
  name: {
    fontFamily: getSecondaryFont(Platform.OS),
    fontWeight: '500',
  },
});

export default ItemName;
