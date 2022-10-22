import React from 'react';
import {StyleSheet, View} from 'react-native';
import {oliveCardColor} from '../../consts/colors';
import {ItemDefinition} from '../../types/item';
import Add from './Add';
import Image from './Image';
import Name from './Name';
import Price from './Price';

interface Props {
  item: ItemDefinition;
}

const Item = ({item}: Props) => {
  return (
    <View style={styles.container}>
      <Image image={item.image} />
      <View style={styles.block}>
        <Name name={item.name} />
      </View>
      <Price price={item.price} />
      <View style={styles.block}>
        <Add onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: oliveCardColor,
    alignItems: 'center',
    paddingTop: 4,
  },
  block: {marginVertical: 16},
});

export default Item;
