// // import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// // interface CartItem {
// //   id: number;
// //   title: string;
// //   price: number;
// //   quantity: number;
// // }

// // interface CartState {
// //   items: CartItem[];
// // }

// // const initialState: CartState = {
// //   items: [],
// // };

// // const cartSlice = createSlice({
// //   name: 'cart',
// //   initialState,
// //   reducers: {
// //     addToCart(state, action: PayloadAction<CartItem>) {
// //       const item = state.items.find((item) => item.id === action.payload.id);
// //       if (item) {
// //         item.quantity += action.payload.quantity;
// //       } else {
// //         state.items.push(action.payload);
// //       }
// //     },
// //     removeFromCart(state, action: PayloadAction<number>) {
// //       state.items = state.items.filter((item) => item.id !== action.payload);
// //     },
// //     updateQuantity(state, action: PayloadAction<{ id: number; quantity: number }>) {
// //       const item = state.items.find((item) => item.id === action.payload.id);
// //       if (item) {
// //         item.quantity = action.payload.quantity;
// //       }
// //     },
// //   },
// // });

// // export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;

// // export default cartSlice.reducer;


// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface CartItem {
//   id: number;
//   title: string;
//   price: number;
//   quantity: number;
//   image: string;
// }

// interface CartState {
//   items: CartItem[];
// }

// const initialState: CartState = {
//   items: []
// };

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addToCart: (state, action: PayloadAction<CartItem>) => {
//       const existingItem = state.items.find(item => item.id === action.payload.id);
//       if (existingItem) {
//         existingItem.quantity += action.payload.quantity;
//       } else {
//         state.items.push(action.payload);
//       }
//     },
//     removeFromCart: (state, action: PayloadAction<number>) => {
//       state.items = state.items.filter(item => item.id !== action.payload);
//     },
//     updateQuantity: (state, action: PayloadAction<{ id: number, quantity: number }>) => {
//       const item = state.items.find(item => item.id === action.payload.id);
//       if (item) {
//         item.quantity = action.payload.quantity;
//       }
//     }
//   }
// });

// export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
// export default cartSlice.reducer;


import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
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
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
