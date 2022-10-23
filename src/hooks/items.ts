import {useQuery} from '@tanstack/react-query';
import {getItem, getItems} from '../api/items';
import {ItemDefinition} from '../types/item';

export const useItems = () => {
  return useQuery<ItemDefinition[], Error>(['items'], getItems);
};

export const useItem = (id: ItemDefinition['id']) => {
  return useQuery<ItemDefinition, Error>(['item'], () => getItem(id));
};
