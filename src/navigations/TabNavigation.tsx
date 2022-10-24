import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import EmptyScreen from '../screens/EmptyScreen';
import StackNavigationHome from './StackNavigationHome';
import TabNavigationBar from './TabNavigationBar';

const BottomTab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <BottomTab.Navigator screenOptions={{headerShown: false}} tabBar={props => <TabNavigationBar {...props} />}>
      <BottomTab.Screen name="TabHome" component={StackNavigationHome} />
      <BottomTab.Screen name="TabSearch" component={EmptyScreen} />
      <BottomTab.Screen name="TabFavourites" component={EmptyScreen} />
    </BottomTab.Navigator>
  );
};

export default TabNavigation;
