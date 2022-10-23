import BottomSheet, {BottomSheetProps} from '@gorhom/bottom-sheet';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import CartItem from '../components/CartItem';
import BlurBackground from './BlurBackground';

interface Props {
  bottomSheetRef: React.RefObject<BottomSheet>;
  snapPoints?: BottomSheetProps['snapPoints'];
}

const items = [
  {
    id: 53,
    price: 321.23,
    name: 'Widget Adapter',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
  },
];

const CartSheet = ({bottomSheetRef, snapPoints = ['70%', '100%']}: Props) => {
  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={-1}
      snapPoints={snapPoints}
      backgroundComponent={BlurBackground}>
      <View style={styles.container}>
        <ScrollView>
          {items.map(item => (
            <View key={item.id} style={styles.cartItem}>
              <CartItem item={item} />
            </View>
          ))}
        </ScrollView>
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 32,
  },
  cartItem: {
    marginBottom: 36,
  },
});

export default CartSheet;
