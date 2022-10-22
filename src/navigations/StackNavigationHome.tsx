import React from 'react';
import {Image, Pressable, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import Avatar from '../components/Avatar';
import StackNavigationHeader from './StackNavigationHeader';
import {images} from '../consts/images';

const Stack = createNativeStackNavigator();

const StackNavigationHome = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({navigation}) => ({
          headerTitle: () => <StackNavigationHeader />,
          headerLeft: () => (
            <Pressable onPress={() => navigation.openDrawer()}>
              <Image style={styles.iconStyle} source={images.menu} />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable onPress={() => {}}>
              <Avatar image={images.logo} rounded />
            </Pressable>
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
