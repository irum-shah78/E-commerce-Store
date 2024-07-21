import { useState, useEffect } from 'react';
import { fetchProductsByCategory } from '../api';

const useFetchProductsByCategory = (category: string) => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProductsByCategory(category);
        setProducts(Array.isArray(data) ? data : []);
      } catch (err) {
        setError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  return { products, loading, error };
};

export default useFetchProductsByCategory;