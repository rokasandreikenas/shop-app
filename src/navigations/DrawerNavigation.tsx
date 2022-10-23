import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigation from './TabNavigation';
import {MAIN} from '../consts/routes';

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
