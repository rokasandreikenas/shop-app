import React from 'react';
import {Image as RNImage, StyleSheet} from 'react-native';
import {ItemDefinition} from '../../types/item';

interface Props {
  image: ItemDefinition['image'];
}

const Image = ({image}: Props) => {
  return <RNImage source={{uri: image}} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 125,
  },
});

export default Image;
