import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import DrawerNavigation from './DrawerNavigation';

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  );
};

export default AppNavigation;
