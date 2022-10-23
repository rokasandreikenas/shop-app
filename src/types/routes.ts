import {ItemDefinition} from './item';

export type RootStackParamList = {
  Home: undefined;
  Item: {
    item: ItemDefinition;
  };
};
