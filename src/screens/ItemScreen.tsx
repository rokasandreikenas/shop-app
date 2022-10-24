import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import ItemAddButton from '../components/Item/ItemAddButton';
import ItemDescription from '../components/Item/ItemDescription';
import ItemName from '../components/Item/ItemName';
import ItemPrice from '../components/Item/ItemPrice';
import Loader from '../components/Loader';
import {useAddCartItem, useCartItems, useUpdateCartItem} from '../hooks/cart';
import {useItem} from '../hooks/items';
import {ItemDefinition} from '../types/item';
import {RootStackParamList} from '../types/routes';

type ItemRoute = RouteProp<RootStackParamList, 'Item'>;
type ItemNavigation = NativeStackNavigationProp<RootStackParamList, 'Item'>;

interface Props {
  navigation: ItemNavigation;
  route: ItemRoute;
}

const ItemScreen = ({route, navigation}: Props) => {
  const {item} = route.params;
  const {data, isLoading} = useItem(item.id);
  const {data: cartItems} = useCartItems();
  const {mutateAsync: addCartItem, isLoading: addLoading} = useAddCartItem();
  const {mutateAsync: updateCartItem, isLoading: updateLoading} = useUpdateCartItem();
  const title = data?.name ?? item.name;

  const handleAddItem = (itemData: ItemDefinition) => {
    const inCartItem = cartItems?.find(cartItem => cartItem.name === itemData.name);
    if (inCartItem) {
      updateCartItem({id: itemData.id, quantity: inCartItem.quantity + 1});
    } else {
      addCartItem(itemData);
    }
  };

  React.useEffect(() => {
    navigation.setOptions({title});
  }, [navigation, title]);

  return (
    <View style={styles.container}>
      <Image source={{uri: item.image}} style={styles.image} />
      <View style={styles.details}>
        <ItemName name={item.name} fontSize={24} />
        <ItemPrice price={item.price} fontSize={24} />
      </View>
      <View style={styles.description}>
        {isLoading ? <Loader /> : <ItemDescription description={data?.description || ''} />}
      </View>
      <View style={styles.addButton}>
        <ItemAddButton onPress={() => handleAddItem(item)} disabled={addLoading || updateLoading} fontSize={20} />
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
    paddingHorizontal: 24,
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  description: {
    paddingHorizontal: 24,
    marginTop: 12,
  },
  info: {
    flex: 1,
  },
  addButton: {
    marginTop: 32,
    alignItems: 'center',
  },
});

export default ItemScreen;
