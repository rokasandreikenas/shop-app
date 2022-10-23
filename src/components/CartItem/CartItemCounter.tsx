import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {images} from '../../consts/images';
import SquareButton from '../SquareButton';

const boxSize = 36;

const CartItemCounter = () => {
  return (
    <View style={styles.container}>
      <SquareButton
        image={images.minus}
        width={boxSize}
        height={boxSize}
        iconSize={10}
        onPress={() => {}}
      />
      <View style={styles.countContainer}>
        <Text style={styles.count}>0</Text>
      </View>
      <SquareButton
        image={images.plus}
        width={boxSize}
        height={boxSize}
        iconSize={10}
        onPress={() => {}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  countContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: boxSize,
    height: boxSize,
    borderWidth: 1,
  },
  count: {
    fontSize: 18,
    fontWeight: '500',
  },
});

export default CartItemCounter;
