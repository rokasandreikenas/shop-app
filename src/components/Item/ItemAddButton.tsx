import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Typography from '../Typography';

interface Props {
  onPress: () => void;
  disabled?: boolean;
  fontSize?: number;
}

const ItemAddButton = ({onPress, disabled, fontSize = 13}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled} style={styles.container}>
      <Typography style={[styles.text, {fontSize}]}>SHOP NOW</Typography>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 8,
    paddingHorizontal: 4,
    borderBottomWidth: 2,
  },
  text: {
    fontWeight: '500',
  },
});

export default ItemAddButton;
