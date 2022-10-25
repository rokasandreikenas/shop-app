import {apiDelay} from '../consts/api';
import {ItemDefinition, ItemDetail} from '../types/item';
import {mockDescription, mockItems} from './mock';

export const getItems = async (): Promise<ItemDefinition[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockItems);
    }, apiDelay);
  });
};

export const getItem = (id: ItemDefinition['id']): Promise<ItemDetail> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const item = mockItems.find(i => i.id === id);
      if (item) {
        resolve({...item, description: mockDescription});
      } else {
        reject('Item not found');
      }
    }, apiDelay);
  });
};
