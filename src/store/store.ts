import { configureStore } from '@reduxjs/toolkit';
import productSlice from './productSlice';
import cartReducer from './cartSlice';
import wishlistReducer from './wishlistSlice';

const store = configureStore({
  reducer: {
    product: productSlice,
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
