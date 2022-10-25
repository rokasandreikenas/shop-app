import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {DrawerType} from '../../types/routes';
import TabNavigation from '../TabNavigation';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName={DrawerType.Main} screenOptions={{headerShown: false}}>
      <Drawer.Screen name={DrawerType.Main} component={TabNavigation} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
