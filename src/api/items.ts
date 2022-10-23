import axios from 'axios';
import {api} from '../consts/api';
import {ItemDefinition} from '../types/item';

export const getItems = () => {
  return axios.get(`${api}/items`).then(res => res.data);
};

export const getItem = (id: ItemDefinition['id']) => {
  return axios.get(`${api}/items/${id}`).then(res => res.data);
};
