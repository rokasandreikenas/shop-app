import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {ItemDefinition} from '../../types/item';

interface Props {
  image: ItemDefinition['image'];
  onPress: () => void;
}

const ItemImage = ({image, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={{uri: image}} style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default ItemImage;
