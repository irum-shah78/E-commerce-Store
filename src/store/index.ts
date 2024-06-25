import { configureStore } from '@reduxjs/toolkit';
import productReducer from './ProductSlice';
import cartReducer from './CartSlice';

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
