export type ProductType = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export type CartItemType = {
  id: number;
  title: string;
  image: string;
  price: number;
  quantity: number;
};

export type CartStateType = {
  items: CartItemType[];
};

export type WishlistStateType = {
  items: ProductType[];
};

export type ProductStateType = {
  products: ProductType[];
  product: ProductType | null;
  categories: string[];
  loading: boolean;
  error: string | null;
};

export type ProductCardPropsType = {
  product: ProductType;
};