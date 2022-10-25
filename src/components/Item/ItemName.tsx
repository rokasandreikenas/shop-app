import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import {ItemDefinition} from '../../types/item';
import {getSecondaryFont} from '../../utils/font';
import Typography from '../Typography';

interface Props {
  name: ItemDefinition['name'];
  fontSize?: number;
}

const ItemName = ({name, fontSize = 18}: Props) => {
  return <Typography style={[styles.name, {fontSize}]}>{name}</Typography>;
};

const styles = StyleSheet.create({
  name: {
    fontFamily: getSecondaryFont(Platform.OS),
    fontWeight: '500',
  },
});

export default ItemName;
