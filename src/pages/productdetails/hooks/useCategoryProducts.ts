import { useState, useEffect } from 'react';
import { fetchProductById } from '../../../helper/api';
import { ProductType } from '../../../types/types';

const useCategoryProducts = () => {
  const [categoryProducts, setCategoryProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContentProducts = async () => {
      const categoryProductIds = [3, 10, 12, 17];
      try {
        const categoryProductsPromises = categoryProductIds.map(id => fetchProductById(id));
        const categoryProducts = await Promise.all(categoryProductsPromises);
        setCategoryProducts(categoryProducts);
      } catch (err) {
        setError('Failed to fetch category products.');
      } finally {
        setLoading(false);
      }
    };

    fetchContentProducts();
  }, []);

  return { categoryProducts, loading, error };
};

export default useCategoryProducts;