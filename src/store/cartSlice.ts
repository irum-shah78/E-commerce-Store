import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItemType, CartStateType } from '../types/types';

const initialState: CartStateType = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItemType>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
    updateCart: (state, action: PayloadAction<CartItemType[]>) => {
      state.items = action.payload;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart, updateCart } = cartSlice.actions;
export default cartSlice.reducer;