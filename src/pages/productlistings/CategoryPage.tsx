// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getCategories, getProductsByCategory } from '../../store/ProductSlice.ts';
// import { AppDispatch, RootState } from '../../store/index.ts';
// import Header from '../../components/header/Header.tsx';
// import Footer from '../../components/footer/Footer.tsx';
// import ProductCard from '../../components/productCard/ProductCard.tsx';

// const CategoryPage: React.FC = () => {
//   const dispatch = useDispatch<AppDispatch>();
//   const { categories, products, loading, error } = useSelector((state: RootState) => state.products);

//   useEffect(() => {
//     dispatch(getCategories());
//   }, [dispatch]);

//   const handleCategoryClick = (category: string) => {
//     dispatch(getProductsByCategory(category));
//   };

//   return (
//     <>
//       <Header />
//       <div className="categories">
//         <h2>Categories</h2>
//         {loading && <p>Loading...</p>}
//         {error && <p>{error}</p>}
//         <ul>
//           {categories.map((category) => (
//             <li key={category} onClick={() => handleCategoryClick(category)}>
//               {category}
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="products">
//         <h2>Products</h2>
//         {loading && <p>Loading...</p>}
//         {error && <p>{error}</p>}
//         <div className="product-list">
//           {products.map((product) => (
//             <ProductCard key={product.id} {...product} />
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default CategoryPage;


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
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    if (selectedCategory) {
      dispatch(getProductsByCategory(selectedCategory));
    }
  }, [selectedCategory, dispatch]);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
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
            {categories.map((category) => (
              <li key={category} onClick={() => handleCategoryClick(category)}>
                {category}
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
