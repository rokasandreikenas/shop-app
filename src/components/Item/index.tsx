import React from 'react';
import {StyleSheet, View} from 'react-native';
import {oliveCardColor} from '../../consts/colors';
import {ItemDefinition} from '../../types/item';
import Favorite from '../Favorite';
import ItemAddButton from './ItemAddButton';
import ItemImage from './ItemImage';
import ItemName from './ItemName';

interface Props {
  item: ItemDefinition;
  isLoading: boolean;
  openDetails: () => void;
  handleAddItem: () => void;
}

const Item = ({item, isLoading, openDetails, handleAddItem}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.favorite}>
        <Favorite onPress={() => {}} />
      </View>
      <ItemImage image={item.image} onPress={openDetails} />
      <View style={styles.name}>
        <ItemName name={item.name} />
      </View>
      <View style={styles.button}>
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
  favorite: {
    alignSelf: 'flex-end',
    padding: 8,
  },
  name: {
    marginVertical: 16,
  },
  button: {marginBottom: 16},
});

export default Item;
