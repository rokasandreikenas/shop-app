import AsyncStorage from '@react-native-async-storage/async-storage';
import {apiDelay} from '../consts/api';
import {CartItemDefinition} from '../types/cart';
import {ItemDefinition} from '../types/item';

export const getCartItems = (): Promise<CartItemDefinition[]> => {
  return new Promise(resolve => {
    setTimeout(async () => {
      try {
        const value = await AsyncStorage.getItem('@cartItems');
        const cartItems = value !== null ? JSON.parse(value) : [];
        resolve(cartItems);
      } catch (error) {
        console.error(error);
      }
    }, apiDelay);
  });
};

export const addCartItem = async (item: ItemDefinition, quantity = 1): Promise<CartItemDefinition> => {
  return new Promise(resolve => {
    setTimeout(async () => {
      try {
        const value = await AsyncStorage.getItem('@cartItems');
        const cartItems = value !== null ? JSON.parse(value) : [];
        const {id, name, price, image} = item;
        const newCartItem = {item_id: id, name, price, image, quantity};
        await AsyncStorage.setItem('@cartItems', JSON.stringify([...cartItems, newCartItem]));
        resolve(newCartItem);
      } catch (error) {
        console.error(error);
      }
    }, apiDelay);
  });
};

export const resetCartItems = () => {
  return new Promise(resolve => {
    setTimeout(async () => {
      try {
        await AsyncStorage.setItem('@cartItems', JSON.stringify([]));
        resolve([]);
      } catch (error) {
        console.error(error);
      }
    }, apiDelay);
  });
};

export const deleteCartItem = (id: CartItemDefinition['item_id']): Promise<CartItemDefinition> => {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const value = await AsyncStorage.getItem('@cartItems');
        const cartItems: CartItemDefinition[] = value !== null ? JSON.parse(value) : [];
        const item = cartItems?.find(c => c.item_id === id);
        if (item) {
          const newItems = cartItems.filter(i => i.item_id !== id);
          await AsyncStorage.setItem('@cartItems', JSON.stringify(newItems));
          resolve(item);
        } else {
          reject('Deleting item not found');
        }
      } catch (error) {
        console.error(error);
      }
    }, apiDelay);
  });
};

export const updateCartItem = (id: CartItemDefinition['item_id'], quantity: number): Promise<CartItemDefinition> => {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const value = await AsyncStorage.getItem('@cartItems');
        const cartItems: CartItemDefinition[] = value !== null ? JSON.parse(value) : [];
        const item = cartItems?.find(c => c.item_id === id);
        if (item) {
          const newItem = {...item, quantity};
          const newItems = cartItems?.map(i => (i.item_id === item.item_id ? newItem : i));
          await AsyncStorage.setItem('@cartItems', JSON.stringify(newItems));
          resolve(newItem);
        } else {
          reject('Updating item not found');
        }
      } catch (error) {
        console.error(error);
      }
    }, apiDelay);
  });
};
