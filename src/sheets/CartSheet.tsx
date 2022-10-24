import BottomSheet, {BottomSheetProps} from '@gorhom/bottom-sheet';
import {BottomTabNavigationEventMap} from '@react-navigation/bottom-tabs';
import {NavigationHelpers, ParamListBase} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Pressable, ScrollView, StyleSheet, View} from 'react-native';
import Button from '../components/Button';
import CartItem from '../components/CartItem';
import {ITEM} from '../consts/routes';
import {useCartItems, useDeleteCartItem, useResetCartItems, useUpdateCartItem} from '../hooks/cart';
import {CartItemDefinition} from '../types/cart';
import BlurBackground from './BlurBackground';

type Navigation = NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;

interface Props {
  navigation: Navigation;
  bottomSheetRef: React.RefObject<BottomSheet>;
  setCount: (count: number) => void;
  snapPoints?: BottomSheetProps['snapPoints'];
}

const CartSheet = ({navigation, bottomSheetRef, snapPoints = ['70%', '100%'], setCount}: Props) => {
  const {data} = useCartItems();
  const {mutateAsync: updateCartItem, isLoading: updateLoading} = useUpdateCartItem();
  const {mutateAsync: deleteCartItem, isLoading: deleteLoading} = useDeleteCartItem();
  const {mutateAsync: resetCartItems, isLoading: resetLoading} = useResetCartItems();

  const isLoading = updateLoading || deleteLoading || resetLoading;

  useEffect(() => {
    setCount(data?.length || 0);
  }, [setCount, data?.length]);

  const handleUpdateQuantity = (id: CartItemDefinition['item_id'], quantity: number, type: 'reduce' | 'increase') => {
    const newQuantity = type === 'reduce' ? quantity - 1 : quantity + 1;
    if (newQuantity === 0) {
      deleteCartItem(id);
    } else {
      updateCartItem({id, quantity: newQuantity});
    }
  };

  return (
    <BottomSheet ref={bottomSheetRef} index={-1} snapPoints={snapPoints} backgroundComponent={BlurBackground}>
      <View style={styles.container}>
        <ScrollView>
          {data?.map((cartItem, index) => (
            <Pressable
              key={cartItem.item_id}
              onPress={() =>
                navigation.navigate(ITEM, {
                  item: {id: cartItem.item_id, ...cartItem},
                })
              }>
              <View style={[styles.cartItem, index !== data?.length - 1 && styles.borderBottom]}>
                <CartItem cartItem={cartItem} isLoading={isLoading} handleUpdateQuantity={handleUpdateQuantity} />
              </View>
            </Pressable>
          ))}
        </ScrollView>
        <View style={styles.buttonContainer}>
          <Button title="Proceed to buy" disabled={isLoading} onPress={resetCartItems} />
        </View>
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
  borderBottom: {
    borderBottomWidth: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default CartSheet;
