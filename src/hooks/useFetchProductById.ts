import { useState, useEffect } from 'react';
import { fetchProductById } from '../helper/api';

const useFetchProductById = (id: number) => {
  const [product, setProduct] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProductById(id);
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