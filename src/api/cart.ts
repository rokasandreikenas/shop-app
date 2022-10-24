import axios from 'axios';
import {api} from '../consts/api';
import {CartItemDefinition} from '../types/cart';
import {ItemDefinition} from '../types/item';

export const getCartItems = () => {
  return axios.get(`${api}/cart`).then(res => res.data);
};

export const addCartItem = (item: ItemDefinition, quantity = 1): Promise<CartItemDefinition> => {
  return axios.post(`${api}/cart`, {}, {params: {id: item.id, quantity}}).then(res => res.data);
};

export const resetCartItems = () => {
  return axios.delete(`${api}/cart`).then(res => res.data);
};

export const deleteCartItem = (id: CartItemDefinition['item_id']) => {
  return axios.delete(`${api}/cart/${id}`).then(res => res.data);
};

export const updateCartItem = (id: CartItemDefinition['item_id'], quantity: number): Promise<CartItemDefinition> => {
  return axios.put(`${api}/cart/${id}`, {}, {params: {quantity}}).then(res => res.data);
};
