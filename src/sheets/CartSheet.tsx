import BottomSheet, {BottomSheetProps} from '@gorhom/bottom-sheet';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BlurBackground from './BlurBackground';

type Props = {
  bottomSheetRef: React.RefObject<any>;
  snapPoints?: BottomSheetProps['snapPoints'];
};

const CartSheet = ({bottomSheetRef, snapPoints = ['60%', '25%']}: Props) => {
  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={-1}
      snapPoints={snapPoints}
      backgroundComponent={BlurBackground}>
      <View style={styles.container}>
        <Text>Awesome 🎉</Text>
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});

export default CartSheet;
