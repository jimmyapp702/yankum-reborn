// Shopify Storefront API Types

export interface Money {
  amount: string;
  currencyCode: string;
}

export interface Image {
  url: string;
  altText: string | null;
  width?: number;
  height?: number;
}

export interface SelectedOption {
  name: string;
  value: string;
}

export interface ProductVariant {
  id: string;
  title: string;
  availableForSale: boolean;
  quantityAvailable: number | null;
  price: Money;
  compareAtPrice: Money | null;
  selectedOptions: SelectedOption[];
  image: Image | null;
}

export interface Metafield {
  key: string;
  value: string;
  namespace: string;
}

export interface Product {
  id: string;
  title: string;
  handle: string;
  description: string;
  descriptionHtml: string;
  productType: string;
  tags: string[];
  vendor: string;
  availableForSale: boolean;
  priceRange: {
    minVariantPrice: Money;
    maxVariantPrice: Money;
  };
  compareAtPriceRange: {
    minVariantPrice: Money;
  };
  featuredImage: Image | null;
  images: {
    edges: Array<{ node: Image }>;
  };
  variants: {
    edges: Array<{ node: ProductVariant }>;
  };
  metafields: Metafield[] | null;
}

export interface Collection {
  id: string;
  title: string;
  handle: string;
  description: string;
  descriptionHtml: string;
  image: Image | null;
  products?: {
    edges: Array<{ node: Product }>;
  };
}

export interface CartLineItem {
  id: string;
  quantity: number;
  merchandise: {
    id: string;
    title: string;
    price: Money;
    product: {
      title: string;
      handle: string;
      featuredImage: Image | null;
    };
  };
}

export interface Cart {
  id: string;
  checkoutUrl: string;
  lines: {
    edges: Array<{ node: CartLineItem }>;
  };
  cost: {
    totalAmount: Money;
    subtotalAmount: Money;
  };
}

export interface Shop {
  name: string;
  description: string;
  primaryDomain: {
    url: string;
  };
  brand: {
    logo: { image: { url: string } } | null;
    squareLogo: { image: { url: string } } | null;
  } | null;
}

// Response Types
export interface ProductsResponse {
  products: {
    edges: Array<{ node: Product }>;
  };
}

export interface ProductByHandleResponse {
  productByHandle: Product | null;
}

export interface CollectionsResponse {
  collections: {
    edges: Array<{ node: Collection }>;
  };
}

export interface CollectionByHandleResponse {
  collectionByHandle: Collection | null;
}

export interface ShopResponse {
  shop: Shop;
}

export interface CartCreateResponse {
  cartCreate: {
    cart: Cart;
  };
}

export interface CartResponse {
  cart: Cart;
}

export interface CartLinesAddResponse {
  cartLinesAdd: {
    cart: Cart;
  };
}

export interface CartLinesUpdateResponse {
  cartLinesUpdate: {
    cart: Cart;
  };
}

export interface CartLinesRemoveResponse {
  cartLinesRemove: {
    cart: Cart;
  };
}
