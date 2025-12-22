import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  shopifyFetch,
  GET_ALL_PRODUCTS,
  GET_PRODUCT_BY_HANDLE,
  GET_ALL_COLLECTIONS,
  GET_COLLECTION_BY_HANDLE,
  GET_FEATURED_PRODUCTS,
  GET_SHOP_INFO,
  CREATE_CART,
  ADD_TO_CART,
  UPDATE_CART_LINES,
  REMOVE_FROM_CART,
  GET_CART,
} from '@/lib/shopify';
import type {
  ProductsResponse,
  ProductByHandleResponse,
  CollectionsResponse,
  CollectionByHandleResponse,
  ShopResponse,
  CartCreateResponse,
  CartLinesAddResponse,
  CartLinesUpdateResponse,
  CartLinesRemoveResponse,
  CartResponse,
} from '@/types/shopify';

// Products
export function useProducts(first = 50) {
  return useQuery({
    queryKey: ['products', first],
    queryFn: () => shopifyFetch<ProductsResponse>(GET_ALL_PRODUCTS, { first }),
  });
}

export function useProductByHandle(handle: string) {
  return useQuery({
    queryKey: ['product', handle],
    queryFn: () => shopifyFetch<ProductByHandleResponse>(GET_PRODUCT_BY_HANDLE, { handle }),
    enabled: !!handle,
  });
}

export function useFeaturedProducts(first = 8) {
  return useQuery({
    queryKey: ['featuredProducts', first],
    queryFn: () => shopifyFetch<ProductsResponse>(GET_FEATURED_PRODUCTS, { first }),
  });
}

// Collections
export function useCollections(first = 20) {
  return useQuery({
    queryKey: ['collections', first],
    queryFn: () => shopifyFetch<CollectionsResponse>(GET_ALL_COLLECTIONS, { first }),
  });
}

export function useCollectionByHandle(handle: string, first = 50) {
  return useQuery({
    queryKey: ['collection', handle, first],
    queryFn: () => shopifyFetch<CollectionByHandleResponse>(GET_COLLECTION_BY_HANDLE, { handle, first }),
    enabled: !!handle,
  });
}

// Shop
export function useShopInfo() {
  return useQuery({
    queryKey: ['shop'],
    queryFn: () => shopifyFetch<ShopResponse>(GET_SHOP_INFO),
  });
}

// Cart Hook
const CART_ID_KEY = 'yankum_cart_id';

function getStoredCartId(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(CART_ID_KEY);
}

function setStoredCartId(cartId: string) {
  if (typeof window !== 'undefined') {
    localStorage.setItem(CART_ID_KEY, cartId);
  }
}

export function useCart() {
  const cartId = getStoredCartId();
  
  return useQuery({
    queryKey: ['cart', cartId],
    queryFn: () => shopifyFetch<CartResponse>(GET_CART, { cartId }),
    enabled: !!cartId,
  });
}

export function useCreateCart() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (lines?: Array<{ merchandiseId: string; quantity: number }>) =>
      shopifyFetch<CartCreateResponse>(CREATE_CART, { lines }),
    onSuccess: (data) => {
      const cartId = data.cartCreate.cart.id;
      setStoredCartId(cartId);
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
  });
}

export function useAddToCart() {
  const queryClient = useQueryClient();
  const createCart = useCreateCart();
  
  return useMutation({
    mutationFn: async ({ merchandiseId, quantity }: { merchandiseId: string; quantity: number }) => {
      const cartId = getStoredCartId();
      
      if (!cartId) {
        return createCart.mutateAsync([{ merchandiseId, quantity }]);
      }
      
      return shopifyFetch<CartLinesAddResponse>(ADD_TO_CART, {
        cartId,
        lines: [{ merchandiseId, quantity }],
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
  });
}

export function useUpdateCartLine() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ lineId, quantity }: { lineId: string; quantity: number }) => {
      const cartId = getStoredCartId();
      if (!cartId) throw new Error('No cart found');
      
      return shopifyFetch<CartLinesUpdateResponse>(UPDATE_CART_LINES, {
        cartId,
        lines: [{ id: lineId, quantity }],
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
  });
}

export function useRemoveFromCart() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (lineId: string) => {
      const cartId = getStoredCartId();
      if (!cartId) throw new Error('No cart found');
      
      return shopifyFetch<CartLinesRemoveResponse>(REMOVE_FROM_CART, {
        cartId,
        lineIds: [lineId],
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
  });
}
