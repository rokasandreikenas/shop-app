import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {images} from '../consts/images';

interface Props {
  onPress: () => void;
  count: number;
}

const TabNavigationCart = ({onPress, count}: Props) => {
  return (
    <Pressable onPress={onPress}>
      <Image style={styles.icon} source={images.basket} />
      <View style={styles.countContainer}>
        <Text style={styles.count}>{count}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icon: {
    margin: 20,
  },
  countContainer: {
    position: 'absolute',
    top: 12,
    right: 10,
    width: 20,
    height: 20,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#ffffff',
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: {
    color: '#ffffff',
    fontWeight: '500',
  },
});

export default TabNavigationCart;
