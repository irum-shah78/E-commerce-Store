import { useState, useEffect } from 'react';
import { fetchCategories, fetchProductsByCategory } from '../helper/api';

interface ProductType {
  id: number;
  title: string;
  price: number;
  image: string;
}

const useCategoryData = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [categoriesLoading, setCategoriesLoading] = useState<boolean>(true);
  const [categoriesError, setCategoriesError] = useState<string | null>(null);

  const [products, setProducts] = useState<ProductType[]>([]);
  const [productsLoading, setProductsLoading] = useState<boolean>(true);
  const [productsError, setProductsError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesData = await fetchCategories();
        setCategories(categoriesData);
        setCategoriesLoading(false);
      } catch (error) {
        setCategoriesError('Failed to fetch categories');
        setCategoriesLoading(false);
      }

      try {
        const productsData = await fetchProductsByCategory('all');
        setProducts(productsData);
        setProductsLoading(false);
      } catch (error) {
        setProductsError('Failed to fetch products');
        setProductsLoading(false);
      }
    };
    fetchData();
  }, []);

  return {
    categories,
    categoriesLoading,
    categoriesError,
    products,
    productsLoading,
    productsError
  };
};

export default useCategoryData;
