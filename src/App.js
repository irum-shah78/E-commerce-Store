import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/Home.tsx';
import CategoryPage from './pages/category/Category.tsx';
import ProductDetailsPage from './pages/productdetails/ProductDetails.tsx';
import CartPage from './pages/cart/Cart.tsx';
import Wishlist from './pages/wishlist/WishList.tsx';
import NotFoundPage from './pages/notfound/NotFound.tsx';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;