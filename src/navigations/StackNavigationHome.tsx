import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import Avatar from '../components/Avatar';
import {bgColor} from '../consts/colors';
import {images} from '../consts/images';
import {HOME, ITEM} from '../consts/routes';
import HomeScreen from '../screens/HomeScreen';
import ItemScreen from '../screens/ItemScreen';
import {RootStackParamList} from '../types/routes';
import StackNavigationHeader from './StackNavigationHeader';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigationHome = () => {
  return (
    <Stack.Navigator initialRouteName={HOME}>
      <Stack.Screen
        name={HOME}
        component={HomeScreen}
        options={({navigation}) => ({
          headerStyle: {
            backgroundColor: bgColor,
          },
          headerTitle: () => <StackNavigationHeader />,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image style={styles.iconStyle} source={images.menu} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <Avatar image={images.logo} rounded />
            </TouchableOpacity>
          ),
          headerShadowVisible: false,
        })}
      />
      <Stack.Screen name={ITEM} component={ItemScreen} />
    </Stack.Navigator>
  );
};
const styles = StyleSheet.create({
  iconStyle: {width: 24, height: 24},
});

export default StackNavigationHome;
