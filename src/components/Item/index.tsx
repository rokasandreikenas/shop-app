import React from 'react';
import {StyleSheet, View} from 'react-native';
import {oliveCardColor} from '../../consts/colors';
import {ItemDefinition} from '../../types/item';
import Favorite from '../Favorite';
import ItemAddButton from './ItemAddButton';
import ItemImage from './ItemImage';
import ItemName from './ItemName';
import ItemPrice from './ItemPrice';

interface Props {
  item: ItemDefinition;
  isLoading: boolean;
  openDetails: () => void;
  handleAddItem: () => void;
}

const Item = ({item, isLoading, openDetails, handleAddItem}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.favoriteBlock}>
        <Favorite onPress={() => {}} />
      </View>
      <ItemImage image={item.image} onPress={openDetails} />
      <View style={styles.block}>
        <ItemName name={item.name} />
      </View>
      <ItemPrice price={item.price} />
      <View style={styles.block}>
        <ItemAddButton onPress={handleAddItem} disabled={isLoading} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: oliveCardColor,
    alignItems: 'center',
  },
  favoriteBlock: {
    alignSelf: 'flex-end',
    padding: 8,
  },
  block: {marginVertical: 16},
});

export default Item;
