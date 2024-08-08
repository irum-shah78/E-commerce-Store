import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../helper/api';
import { ProductType } from '../types/types';

const useProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct = await fetchProductById(Number(id));
        setProduct(fetchedProduct);
      } catch (err) {
        setError('Failed to fetch product.');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return { product, loading, error };
};

export default useProductDetails;