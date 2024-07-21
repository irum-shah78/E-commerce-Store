import api from "./services/axiosInstance";

export const fetchProducts = async () => {
  const response = await api.get(`/products`);
  return response.data;
};

export const fetchProductById = async (id: number) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};

export const fetchCategories = async () => {
  const response = await api.get(`/products/categories`);
  return response.data;
};

export const fetchProductsByCategory = async (category: string) => {
  try {
    if (category === 'all') {
      const response = await api.get('/products');
      return response.data;
    } else {
      const response = await api.get(`/products/category/${category}`);
      return response.data;
    }
  } catch (error) {
    throw new Error('Failed to fetch products');
  }
};
