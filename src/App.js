import React from 'react';
import HomePage from './pages/home/HomePage.tsx';
// import Header from './components/header/Header.tsx';
// import Footer from './components/footer/Footer.tsx';



// import { Route, Routes } from 'react-router-dom';
// import HomePage from '../src/pages/home/HomePage.tsx';
// import CategoryPage from '../src/pages/productlistings/CategoryPage.tsx';
// import ProductDetailsPage from '../src/pages/productdetails/ProductDetails.tsx';
// import CartPage from '../src/pages/shoppingcart/CartPage.tsx';

const App = () => {
  return (
    <div>
      {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes> */}


      <HomePage />
      {/* <Header />
      <Footer /> */}
    </div>
  );
};

export default App;

