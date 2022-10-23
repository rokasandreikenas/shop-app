import axios from 'axios';
import {api} from '../consts/api';
import {ItemDefinition} from '../types/item';

export const getCartItems = () => {
  return axios.get(`${api}/cart`).then(res => res.data);
};

export const addItemToCart = (item: ItemDefinition) => {
  return axios.post(`${api}/cart`, {item}).then(res => res.data);
};

export const resetCartItems = () => {
  return axios.delete(`${api}/cart`).then(res => res.data);
};

export const deleteItemFromCart = (id: ItemDefinition['id']) => {
  return axios.delete(`${api}/cart/${id}`).then(res => res.data);
};
