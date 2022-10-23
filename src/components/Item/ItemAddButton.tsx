import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface Props {
  onPress: () => void;
  disabled?: boolean;
  fontSize?: number;
}

const ItemAddButton = ({onPress, disabled, fontSize = 13}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={styles.container}>
      <Text style={[styles.text, {fontSize}]}>SHOP NOW</Text>
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
