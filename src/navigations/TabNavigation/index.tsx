import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import EmptyScreen from '../../screens/EmptyScreen';
import {BottomTabType} from '../../types/routes';
import StackNavigationHome from '../StackNavigation';
import TabNavigationBar from './TabNavigationBar';

const BottomTab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <BottomTab.Navigator screenOptions={{headerShown: false}} tabBar={props => <TabNavigationBar {...props} />}>
      <BottomTab.Screen name={BottomTabType.TabHome} component={StackNavigationHome} />
      <BottomTab.Screen name={BottomTabType.TabSearch} component={EmptyScreen} />
      <BottomTab.Screen name={BottomTabType.TabFavorites} component={EmptyScreen} />
    </BottomTab.Navigator>
  );
};

export default TabNavigation;
