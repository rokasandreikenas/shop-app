import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {MAIN} from '../consts/routes';
import TabNavigation from './TabNavigation';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName={MAIN}
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name={MAIN} component={TabNavigation} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
