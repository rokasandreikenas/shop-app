import React from 'react';
import {StyleSheet} from 'react-native';
import {ItemDefinition} from '../../types/item';
import Typography from '../Typography';

interface Props {
  name: ItemDefinition['name'];
  fontSize?: number;
}

const ItemName = ({name, fontSize = 18}: Props) => {
  return (
    <Typography style={[styles.name, {fontSize}]} secondaryFont>
      {name}
    </Typography>
  );
};

const styles = StyleSheet.create({
  name: {
    fontWeight: '500',
  },
});

export default ItemName;
