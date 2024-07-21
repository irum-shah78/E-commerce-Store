// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface WishlistItem {
//   id: number;
//   title: string;
//   price: number;
//   image: string;
// }

// interface WishlistState {
//   items: WishlistItem[];
// }

// const initialState: WishlistState = {
//   items: [],
// };

// const wishlistSlice = createSlice({
//   name: 'wishlist',
//   initialState,
//   reducers: {
//     addToWishlist: (state, action: PayloadAction<WishlistItem>) => {
//       state.items.push(action.payload);
//     },
//     removeFromWishlist: (state, action: PayloadAction<number>) => {
//       state.items = state.items.filter(item => item.id !== action.payload);
//     },
//     clearWishlist: (state) => {
//       state.items = [];
//     },
//   },
// });

// export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;
// export default wishlistSlice.reducer;


// src/store/wishlistSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface WishlistState {
  items: Product[];
}

const initialState: WishlistState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist(state, action: PayloadAction<Product>) {
      state.items.push(action.payload);
    },
    removeFromWishlist(state, action: PayloadAction<number>) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    clearWishlist(state) {
      state.items = [];
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;