// import { configureStore } from '@reduxjs/toolkit';
// import productReducer from '../store/ProductSlice.ts';
// import cartReducer from '../store/CartSlice.ts';

// const store = configureStore({
//   reducer: {
//     products: productReducer,
//     cart: cartReducer,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// export default store;

// src/index.ts
import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../store/ProductSlice.ts';
import cartReducer from '../store/CartSlice.ts';

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
