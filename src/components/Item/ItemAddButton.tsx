import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

interface Props {
  onPress: () => void;
}

const ItemAddButton = ({onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>SHOP NOW</Text>
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
