import { useState, useEffect } from 'react';
import { fetchCategories, fetchProductsByCategory } from '../../helper/api';
import { ProductType } from '../../types/types';

const useCategoryFilter = () => {
  // State for selected categories and "all categories" checkbox
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [allCategoriesChecked, setAllCategoriesChecked] = useState<boolean>(false);

  // State for categories and products data, loading, and error
  const [categories, setCategories] = useState<string[]>([]);
  const [categoriesLoading, setCategoriesLoading] = useState<boolean>(true);
  const [categoriesError, setCategoriesError] = useState<string | null>(null);

  const [products, setProducts] = useState<ProductType[]>([]);
  const [productsLoading, setProductsLoading] = useState<boolean>(true);
  const [productsError, setProductsError] = useState<string | null>(null);

  // Fetch categories data on initial render
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
    };

    fetchData();
  }, []);

  // Fetch products based on selected categories or "all categories" checkbox
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const categoryParam = allCategoriesChecked ? 'all' : selectedCategories.join(',');
        const productsData = await fetchProductsByCategory(categoryParam);
        setProducts(productsData);
        setProductsLoading(false);
      } catch (error) {
        setProductsError('Failed to fetch products');
        setProductsLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategories, allCategoriesChecked]);

  // Handle category checkbox change
  const handleCategoryChange = (category: string) => {
    if (category === 'all') {
      setAllCategoriesChecked(!allCategoriesChecked);
      setSelectedCategories([]);
    } else {
      setAllCategoriesChecked(false);
      if (selectedCategories.includes(category)) {
        setSelectedCategories(selectedCategories.filter(cat => cat !== category));
      } else {
        setSelectedCategories([...selectedCategories, category]);
      }
    }
  };

  // Reset selected categories and "all categories" checkbox
  const handleReset = () => {
    setSelectedCategories([]);
    setAllCategoriesChecked(false);
  };

  return {
    selectedCategories,
    allCategoriesChecked,
    handleCategoryChange,
    handleReset,
    categories,
    categoriesLoading,
    categoriesError,
    products,
    productsLoading,
    productsError,
  };
};

export default useCategoryFilter;
