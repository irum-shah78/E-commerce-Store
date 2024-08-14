import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WishlistStateType, ProductType } from '../types/types';

const initialState: WishlistStateType = {
  items: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist(state, action: PayloadAction<ProductType>) {
      state.items.push(action?.payload);
    },
    removeFromWishlist(state, action: PayloadAction<number>) {
      state.items = state?.items?.filter(item => item?.id !== action?.payload);
    },
    clearWishlist(state) {
      state.items = [];
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;