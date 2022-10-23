import {UseMutationResult} from '@tanstack/react-query';
import {ItemDefinition} from './item';

export type RootStackParamList = {
  Home: undefined;
  Item: {
    item: ItemDefinition;
    mutation: UseMutationResult<any, unknown, number, unknown>;
  };
};
