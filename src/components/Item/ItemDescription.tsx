import React from 'react';
import {StyleSheet} from 'react-native';
import {ItemDetail} from '../../types/item';
import Typography from '../Typography';

interface Props {
  description: ItemDetail['description'];
  fontSize?: number;
}

const ItemDescription = ({description, fontSize = 14}: Props) => {
  return <Typography style={[styles.description, {fontSize}]}>{description}</Typography>;
};

const styles = StyleSheet.create({
  description: {
    color: 'grey',
  },
});

export default ItemDescription;
