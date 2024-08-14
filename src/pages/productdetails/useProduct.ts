import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById, fetchLimitedProducts } from '../../helper/api';
import { ProductType } from '../../types/types';

const useProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [categoryProducts, setCategoryProducts] = useState<ProductType[]>([]);
  const [quantity, setQuantity] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const fetchedProduct = await fetchProductById(Number(id));
        setProduct(fetchedProduct);

        const limit = 4;
        const relatedCategoryProducts = await fetchLimitedProducts(limit);
        setCategoryProducts(relatedCategoryProducts);

      } catch (err) {
        setError('Failed to fetch product details or category products.');
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [id]);

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return {
    product,
    categoryProducts,
    quantity,
    loading,
    error,
    setQuantity,
    increaseQuantity,
    decreaseQuantity,
  };
};

export default useProductPage;