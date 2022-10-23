import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {secondaryFont} from '../../consts/font';
import {ItemDefinition} from '../../types/item';

interface Props {
  name: ItemDefinition['name'];
}

const ItemName = ({name}: Props) => {
  return <Text style={styles.name}>{name}</Text>;
};

const styles = StyleSheet.create({
  name: {
    fontFamily: secondaryFont,
    fontSize: 18,
    fontWeight: '500',
  },
});

export default ItemName;
