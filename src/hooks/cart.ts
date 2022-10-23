import {useMutation, useQuery} from '@tanstack/react-query';
import {
  addCartItem,
  deleteCartItem,
  getCartItems,
  resetCartItems,
  updateCartItem,
} from '../api/cart';
import {CartItemDefinition} from '../types/cart';

export const useCartItems = () => {
  return useQuery<CartItemDefinition[], Error>(['cartItems'], getCartItems);
};

export const useAddCartItem = () => {
  return useMutation(addCartItem);
};

export const useUpdateCartItem = () => {
  return useMutation<
    CartItemDefinition,
    Error,
    {id: CartItemDefinition['item_id']; quantity: number}
  >(({id, quantity}) => updateCartItem(id, quantity));
};

export const useDeleteCartItem = () => {
  return useMutation(deleteCartItem);
};

export const useResetCartItems = () => {
  return useMutation(resetCartItems);
};
