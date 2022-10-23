import React from 'react';
import {Image, TouchableOpacity, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import Avatar from '../components/Avatar';
import StackNavigationHeader from './StackNavigationHeader';
import {images} from '../consts/images';
import {bgColor} from '../consts/colors';
import {HOME} from '../consts/routes';

const Stack = createNativeStackNavigator();

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
            <TouchableOpacity onPress={() => {}}>
              <Avatar image={images.logo} rounded />
            </TouchableOpacity>
          ),
          headerShadowVisible: false,
        })}
      />
    </Stack.Navigator>
  );
};
const styles = StyleSheet.create({
  iconStyle: {width: 24, height: 24},
});

export default StackNavigationHome;
