import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts, fetchProductById, fetchCategories, fetchProductsByCategory } from '../../helper/api';
import { ProductStateType } from '../../types/types';

const initialState: ProductStateType = {
  products: [],
  product: null,
  categories: [],
  loading: false,
  error: null,
};

export const getProducts = createAsyncThunk('products/getProducts', async () => {
  const products = await fetchProducts();
  return products;
});

export const getProductById = createAsyncThunk('products/getProductById', async (id: number) => {
  const product = await fetchProductById(id);
  return product;
});

export const getCategories = createAsyncThunk('products/getCategories', async () => {
  const categories = await fetchCategories();
  return categories;
});

export const getProductsByCategory = createAsyncThunk('products/getProductsByCategory', async (category: string) => {
  if (category === 'all') {
    const products = await fetchProducts();
    return products;
  } else {
    const products = await fetchProductsByCategory(category);
    return products;
  }
});

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProduct(state, action) {
      state.product = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload ?? [];
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Failed to fetch products';
      })
      .addCase(getProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload ?? null;
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Failed to fetch product';
      })
      .addCase(getCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload ?? [];
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Failed to fetch categories';
      })
      .addCase(getProductsByCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProductsByCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload ?? [];
      })
      .addCase(getProductsByCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Failed to fetch products by category';
      });
  },
});

export const { setProduct } = productSlice.actions;

export default productSlice.reducer;