// src/api.ts
import axios from 'axios';

const API_URL = 'https://fakestoreapi.com';

export const fetchProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data;
};

export const fetchProductById = async (id: number) => {
  const response = await axios.get(`${API_URL}/products/${id}`);
  return response.data;
};

export const fetchCategories = async () => {
  const response = await axios.get(`${API_URL}/products/categories`);
  return response.data;
};

// export const fetchProductsByCategory = async (category: string) => {
//   const response = await axios.get(`${API_URL}/products/category/${category}?limit=12`);
//   return response.data;
// };

export const fetchProductsByCategory = async (category: string, limit: number = 12) => {
  const response = await axios.get(`${API_URL}/products/category/${category}?limit=${limit}`);
  return response.data;
};