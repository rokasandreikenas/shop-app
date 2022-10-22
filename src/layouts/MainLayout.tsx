import React from 'react';
import {View, StyleSheet} from 'react-native';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const MainLayout = ({children}: Props) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {padding: 16},
});

export default MainLayout;
