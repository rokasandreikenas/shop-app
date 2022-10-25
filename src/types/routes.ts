import {ItemDefinition} from './item';

export type RootStackParamList = {
  Home: undefined;
  Item: {
    item: ItemDefinition;
  };
};

export enum DrawerType {
  Main = 'Main',
}

export enum StackType {
  Home = 'Home',
  Item = 'Item',
}

export enum BottomTabType {
  TabHome = 'TabHome',
  TabSearch = 'TabSearch',
  TabFavorites = 'TabFavorites',
  TabCart = 'TabCart',
}

export type BottomTabs = keyof typeof BottomTabType;
