import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {addCartItem, deleteCartItem, getCartItems, resetCartItems, updateCartItem} from '../api/cart';
import {CartItemDefinition} from '../types/cart';

const CART_ITEMS = 'cartItems';

export const useCartItems = () => {
  return useQuery<CartItemDefinition[], Error>([CART_ITEMS], getCartItems);
};

export const useAddCartItem = () => {
  const queryClient = useQueryClient();

  return useMutation(addCartItem, {
    onMutate: async newItem => {
      await queryClient.cancelQueries([CART_ITEMS]);

      const previousCartItems = queryClient.getQueryData([CART_ITEMS]);
      const cartItem: CartItemDefinition = {...newItem, item_id: newItem.id, quantity: 1};
      queryClient.setQueryData<CartItemDefinition[]>([CART_ITEMS], old => [...(old || []), cartItem]);

      return {previousCartItems};
    },
  });
};

export const useUpdateCartItem = () => {
  const queryClient = useQueryClient();

  return useMutation<CartItemDefinition, Error, {id: CartItemDefinition['item_id']; quantity: number}>(
    ({id, quantity}) => updateCartItem(id, quantity),
    {
      onMutate: async ({id, quantity}) => {
        await queryClient.cancelQueries([CART_ITEMS]);

        const previousCartItems = queryClient.getQueryData<CartItemDefinition[]>([CART_ITEMS]);
        const item = previousCartItems?.find(c => c.item_id === id);
        if (item) {
          const newItem = {...item, quantity};
          const newItems = (old?: CartItemDefinition[]) => old?.map(i => (i.item_id === item.item_id ? newItem : i));
          queryClient.setQueryData<CartItemDefinition[]>([CART_ITEMS], old => newItems(old));
        }

        return {previousCartItems};
      },
    },
  );
};

export const useDeleteCartItem = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteCartItem, {
    onMutate: async id => {
      await queryClient.cancelQueries([CART_ITEMS]);

      const previousCartItems = queryClient.getQueryData<CartItemDefinition[]>([CART_ITEMS]);
      const item = previousCartItems?.find(c => c.item_id === id);
      if (item) {
        const newItems = (old?: CartItemDefinition[]) => old?.filter(i => i.item_id !== item.item_id);
        queryClient.setQueryData<CartItemDefinition[]>([CART_ITEMS], old => newItems(old));
      }

      return {previousCartItems};
    },
  });
};

export const useResetCartItems = () => {
  const queryClient = useQueryClient();

  return useMutation(resetCartItems, {
    onMutate: async () => {
      await queryClient.cancelQueries([CART_ITEMS]);

      const previousCartItems = queryClient.getQueryData<CartItemDefinition[]>([CART_ITEMS]);
      queryClient.setQueryData<CartItemDefinition[]>([CART_ITEMS], []);

      return {previousCartItems};
    },
  });
};
