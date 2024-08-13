import { useState, useEffect } from 'react';
import { fetchProductsByCategory } from '../../../helper/api';
import { ProductType } from '../../../types/types'; 

const useFetchProductsByCategory = (category: string) => {
  const [products, setProducts] = useState<ProductType[]>([]); 
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: ProductType[] = await fetchProductsByCategory(category); 
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
