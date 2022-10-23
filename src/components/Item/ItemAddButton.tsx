import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface Props {
  onPress: () => void;
  fontSize?: number;
}

const ItemAddButton = ({onPress, fontSize = 13}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
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
