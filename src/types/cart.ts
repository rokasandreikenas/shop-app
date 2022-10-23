import {ItemDefinition} from './item';

export type CartItemDefinition = {
  item_id: ItemDefinition['id'];
  name: string;
  quantity: number;
  price: number;
  image: string;
};
