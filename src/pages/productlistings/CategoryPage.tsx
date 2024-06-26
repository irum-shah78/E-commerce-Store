import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, getProductsByCategory } from '../../store/ProductSlice.ts';
import { AppDispatch, RootState } from '../../store';
import Header from '../../components/header/Header.tsx';
import Footer from '../../components/footer/Footer.tsx';
import ProductCard from '../../components/productCard/ProductCard.tsx';

const CategoryPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { categories, products, loading, error } = useSelector((state: RootState) => state.products);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(() => {
    const savedCategories = localStorage.getItem('selectedCategories');
    return savedCategories ? JSON.parse(savedCategories) : [];
  });
  const [allCategoriesChecked, setAllCategoriesChecked] = useState<boolean>(() => {
    const savedAllCategoriesChecked = localStorage.getItem('allCategoriesChecked');
    return savedAllCategoriesChecked ? JSON.parse(savedAllCategoriesChecked) : false;
  });

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    if (allCategoriesChecked) {
      dispatch(getProductsByCategory('all'));
    } else if (selectedCategories.length > 0) {
      selectedCategories.forEach(category => {
        dispatch(getProductsByCategory(category));
      });
    }
  }, [selectedCategories, allCategoriesChecked, categories, dispatch]);

  useEffect(() => {
    localStorage.setItem('selectedCategories', JSON.stringify(selectedCategories));
    localStorage.setItem('allCategoriesChecked', JSON.stringify(allCategoriesChecked));
  }, [selectedCategories, allCategoriesChecked]);

  const handleCategoryChange = (category: string) => {
    if (category === 'all') {
      setAllCategoriesChecked(!allCategoriesChecked);
      setSelectedCategories([]);
      if (!allCategoriesChecked) {
        dispatch(getProductsByCategory('all'));
      }
    } else {
      setAllCategoriesChecked(false);
      if (selectedCategories.includes(category)) {
        setSelectedCategories(selectedCategories.filter(cat => cat !== category));
      } else {
        setSelectedCategories([...selectedCategories, category]);
      }
    }
  };

  return (
    <>
      <Header />
      <div className="category-page">
        <aside className="categories">
          <h2>Categories</h2>
          {loading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          <ul>
            <li>
              <label>
                <input
                  type="checkbox"
                  checked={allCategoriesChecked}
                  onChange={() => handleCategoryChange('all')}
                />
                All Categories
              </label>
            </li>
            {categories.map((category) => (
              <li key={category}>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                  />
                  {category}
                </label>
              </li>
            ))}
          </ul>
        </aside>
        <main className="products">
          <h2>Products</h2>
          {loading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          <div className="product-list">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default CategoryPage;
