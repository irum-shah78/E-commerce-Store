import { useState, useEffect } from 'react';
import { fetchProducts } from '../helper/api';
import { ProductType } from '../types/types'; 

const useFetchProducts = () => {
  const [products, setProducts] = useState<ProductType[]>([]); 
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: ProductType[] = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { products, loading, error };
};

export default useFetchProducts;