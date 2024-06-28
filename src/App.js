// import HomePage from "./pages/home/HomePage.tsx";
// import CategoryPage from "./pages/productlistings/CategoryPage.tsx";
// import ProductDetails from "./pages/productdetails/ProductDetails.tsx";

// function App() {
//   return (
//     <>
//    {/* <HomePage /> */}
//    {/* <CategoryPage /> */}
//    <ProductDetails />
//     </>
//   );
// }

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import CategoryPage from '../src/pages/productlistings/CategoryPage.tsx';
// import ProductDetails from '../src/pages/productdetails/ProductDetails.tsx';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" exact component={CategoryPage} />
//         <Route path="/product/:id" component={ProductDetails} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import CategoryPage from './pages/productlistings/CategoryPage.tsx';
// import ProductDetails from './pages/productdetails/ProductDetails.tsx';
// // import NotFound from './pages/notfound/NotFound';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         {/* <Route path="/" element={<CategoryPage />} /> */}
//         <Route path="/category/:category" element={<CategoryPage />} />
//         <Route path="/product/:productId" element={<ProductDetails />} />
//         {/* <Route path="*" element={<NotFound />} /> */}
//       </Routes>
//     </Router>
//   );
// };

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePage from '../src/pages/home/HomePage.tsx';
// import CategoryPage from '../src/pages/productlistings/CategoryPage.tsx';
// import ProductDetails from '../src/pages/productdetails/ProductDetails.tsx'

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route exact path="/" component={HomePage} />
//         <Route path="/category" component={CategoryPage} />
//         <Route path="/product/:id" component={ProductDetails} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../src/pages/home/HomePage.tsx';
import CategoryPage from '../src/pages/productlistings/CategoryPage.tsx';
import ProductDetailsPage from '../src/pages/productdetails/ProductDetails.tsx';
// import Header from '../src/components/header/Header.tsx';

const App = () => {
  return (
    <div>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/product/:productId" element={<ProductDetailsPage />} />
      </Routes>
    </div>
  );
};

export default App;


