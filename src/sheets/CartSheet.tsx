import BottomSheet, {BottomSheetProps} from '@gorhom/bottom-sheet';
import {BottomTabNavigationEventMap} from '@react-navigation/bottom-tabs';
import {NavigationHelpers, ParamListBase} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Button from '../components/Button';
import CartItem from '../components/CartItem';
import {ITEM} from '../consts/routes';
import {useCartItems, useDeleteCartItem, useResetCartItems, useUpdateCartItem} from '../hooks/cart';
import {CartItemDefinition} from '../types/cart';
import {arraySum} from '../utils/number';
import BlurBackground from './BlurBackground';

type Navigation = NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;

interface Props {
  navigation: Navigation;
  bottomSheetRef: React.RefObject<BottomSheet>;
  handleToggleCartSheet: () => void;
  setCount: (count: number) => void;
  snapPoints?: BottomSheetProps['snapPoints'];
}

const CartSheet = ({
  navigation,
  bottomSheetRef,
  snapPoints = ['70%', '100%'],
  handleToggleCartSheet,
  setCount,
}: Props) => {
  const {data} = useCartItems();
  const {mutateAsync: updateCartItem, isLoading: updateLoading} = useUpdateCartItem();
  const {mutateAsync: deleteCartItem, isLoading: deleteLoading} = useDeleteCartItem();
  const {mutateAsync: resetCartItems, isLoading: resetLoading} = useResetCartItems();
  const count = arraySum(data?.map(i => i.quantity) || []);

  const isLoading = updateLoading || deleteLoading || resetLoading;

  useEffect(() => {
    setCount(count);
  }, [setCount, count]);

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
            <View key={cartItem.item_id} style={[styles.cartItem, index !== data?.length - 1 && styles.borderBottom]}>
              <CartItem
                cartItem={cartItem}
                isLoading={isLoading}
                handleUpdateQuantity={handleUpdateQuantity}
                openItemDetails={() => {
                  handleToggleCartSheet();
                  navigation.navigate(ITEM, {item: {id: cartItem.item_id, ...cartItem}});
                }}
              />
            </View>
          ))}
        </ScrollView>
        {data?.length ? (
          <View style={styles.buttonContainer}>
            <Button title="Proceed to buy" disabled={isLoading} onPress={resetCartItems} />
          </View>
        ) : (
          <Text style={styles.empty}>Cart is empty!</Text>
        )}
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
  empty: {
    textAlign: 'center',
    fontSize: 20,
  },
});

export default CartSheet;
