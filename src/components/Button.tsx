import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface Props {
  onPress: () => void;
  title: string | number;
  disabled?: boolean;
}

const Button = ({onPress, title, disabled}: Props) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      disabled={disabled}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    paddingHorizontal: 22,
    backgroundColor: '#000000',
  },
  text: {
    color: '#ffffff',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: '500',
    fontSize: 15,
  },
});

export default Button;
