import { useState, useEffect } from 'react';
import { fetchProductById } from '../helper/api';
import { Product } from '../types/types'; 

const useFetchProductById = (id: number) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: Product = await fetchProductById(id);
        setProduct(data);
      } catch (err) {
        setError('Failed to fetch product');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { product, loading, error };
};

export default useFetchProductById;