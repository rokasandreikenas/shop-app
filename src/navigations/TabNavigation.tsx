import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image, ImageSourcePropType, StyleSheet} from 'react-native';
import {activeIndicatorColor, indicatorColor} from '../consts/colors';
import {images} from '../consts/images';
import EmptyScreen from '../screens/EmptyScreen';
import StackNavigationHome from './StackNavigationHome';

const BottomTab = createBottomTabNavigator();

const tabIcons: Record<string, ImageSourcePropType> = {
  TabHome: images.home,
  TabSearch: images.search,
  TabFavourites: images.heartFilled,
  TabCart: images.basket,
};

const TabNavigation = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({route}) => ({
        tabBarInactiveTintColor: indicatorColor,
        tabBarActiveTintColor: activeIndicatorColor,
        tabBarShowLabel: false,

        tabBarStyle: styles.floatingBar,
        tabBarIcon: ({focused}) => {
          return (
            <Image
              style={[
                {
                  tintColor: focused ? activeIndicatorColor : indicatorColor,
                },
                styles.tabBarIcon,
              ]}
              source={tabIcons[route.name]}
            />
          );
        },
        headerShown: false,
      })}>
      <BottomTab.Screen name="TabHome" component={StackNavigationHome} />
      <BottomTab.Screen name="TabSearch" component={EmptyScreen} />
      <BottomTab.Screen name="TabFavourites" component={EmptyScreen} />
      <BottomTab.Screen name="TabCart" component={EmptyScreen} />
    </BottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  floatingBar: {
    position: 'absolute',
    bottom: 32,
    left: 16,
    right: 16,
    borderRadius: 50,
    borderTopWidth: 0,
    elevation: 0,
  },
  tabBarIcon: {
    marginTop: 30,
  },
});

export default TabNavigation;
