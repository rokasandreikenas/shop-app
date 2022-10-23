import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Carousel from '../components/Carousel';
import Item from '../components/Item';
import Loader from '../components/Loader';
import {images} from '../consts/images';
import {ITEM} from '../consts/routes';
import {useItems} from '../hooks/items';
import MainLayout from '../layouts/MainLayout';
import {RootStackParamList} from '../types/routes';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({navigation}: Props) => {
  const {data, isLoading} = useItems();

  return (
    <MainLayout>
      <Carousel images={[images.bag1, images.bag2, images.bag3]} />
      {isLoading && <Loader />}
      <ScrollView>
        <View style={styles.items}>
          {data?.map(item => (
            <View key={item.id} style={styles.item}>
              <Item
                item={item}
                openDetails={() => navigation.navigate(ITEM, {item})}
              />
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
