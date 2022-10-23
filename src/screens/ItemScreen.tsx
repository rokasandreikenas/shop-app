import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import ItemAddButton from '../components/Item/ItemAddButton';
import ItemName from '../components/Item/ItemName';
import ItemPrice from '../components/Item/ItemPrice';
import {RootStackParamList} from '../types/routes';

type ItemRoute = RouteProp<RootStackParamList, 'Item'>;
type ItemNavigation = NativeStackNavigationProp<RootStackParamList, 'Item'>;

interface Props {
  navigation: ItemNavigation;
  route: ItemRoute;
}

const ItemScreen = ({route, navigation}: Props) => {
  const {item} = route.params;

  React.useEffect(() => {
    navigation.setOptions({
      title: item.name,
    });
  }, [navigation, item]);

  return (
    <View style={styles.container}>
      <Image source={{uri: item.image}} style={styles.image} />
      <View style={styles.details}>
        <ItemName name={item.name} fontSize={24} />
        <ItemPrice price={item.price} fontSize={24} />
      </View>
      <View style={styles.addButton}>
        <ItemAddButton onPress={() => {}} fontSize={20} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  image: {
    width: '100%',
    height: '30%',
  },
  details: {
    padding: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addButton: {
    marginTop: 24,
    alignItems: 'center',
  },
});

export default ItemScreen;
