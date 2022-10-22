import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Carousel from '../components/Carousel';
import MainLayout from '../layouts/MainLayout';
import {images} from '../consts/images';
import Item from '../components/Item';

const items = [
  {
    id: 53,
    price: 321.23,
    name: 'Widget Adapter',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
  },
  {
    id: 52,
    price: 321.23,
    name: 'Widget Adapter',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
  },
  {
    id: 50,
    price: 321.23,
    name: 'Widget Adapter',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
  },
];

const HomeScreen = () => {
  return (
    <MainLayout>
      <Carousel images={[images.bag1, images.bag2, images.bag3]} />
      <ScrollView>
        <View style={styles.items}>
          {items.map(item => (
            <View key={item.id} style={styles.item}>
              <Item item={item} />
            </View>
          ))}
        </View>
      </ScrollView>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  items: {
    marginTop: 32,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  item: {
    width: '48%',
    marginBottom: 16,
  },
});

export default HomeScreen;
