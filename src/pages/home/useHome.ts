import { useState, useEffect } from 'react';
import {
  fetchCategories,
  fetchProducts,
  fetchProductsByCategory,
  fetchLimitedProducts,
} from '../../helper/api';
import { ProductType } from '../../types/types';

const useHomePageData = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [allProducts, setAllProducts] = useState<ProductType[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [categoryProducts, setCategoryProducts] = useState<ProductType[]>([]);
  const [upperSwiperProducts, setHeroProducts] = useState<ProductType[]>([]);
  const [lowerSwiperProducts, setFeaturedProducts] = useState<ProductType[]>([]);
  const [categoriesProducts, setCategoryProductsForSwiper] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedCategories = await fetchCategories();
        setCategories(fetchedCategories);

        const fetchedProducts = await fetchProducts();
        setAllProducts(fetchedProducts);

        const fetchedUpperProducts = await fetchLimitedProducts(4);
        setHeroProducts(fetchedUpperProducts);

        const fetchedLowerProducts = await fetchLimitedProducts(3);
        setFeaturedProducts(fetchedLowerProducts);

        const fetchedCategoryProducts = await fetchLimitedProducts(3);
        setCategoryProductsForSwiper(fetchedCategoryProducts);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      if (selectedCategory === 'all') {
        setCategoryProducts(allProducts);
      } else {
        try {
          const data: ProductType[] = await fetchProductsByCategory(selectedCategory);
          setCategoryProducts(Array.isArray(data) ? data : []);
        } catch (err) {
          setError('Failed to fetch category products');
        }
      }
    };

    fetchCategoryProducts();
  }, [selectedCategory, allProducts]);

  return {
    categories,
    allProducts,
    selectedCategory,
    setSelectedCategory,
    categoryProducts,
    upperSwiperProducts,
    setHeroProducts,
    lowerSwiperProducts,
    setFeaturedProducts,
    categoriesProducts,
    loading,
    error,
  };
};

export default useHomePageData;