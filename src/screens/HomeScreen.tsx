import React from 'react';
import {Text} from 'react-native';
import Carousel from '../components/Carousel';
import MainLayout from '../layouts/MainLayout';
import {images} from '../consts/images';

const HomeScreen = () => {
  return (
    <MainLayout>
      <Carousel images={[images.bag1, images.bag2, images.bag3]} />
      <Text>HomeScreen</Text>
    </MainLayout>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default HomeScreen;
