// import React from "react";
// import Header from "../../components/header/Header.tsx";
// // import Footer from "../../components/footer/Footer.tsx";

// const CategoryPage = ()=>{
// return (
//   <>
//   <Header />
//   {/* <Footer /> */}
//   </>
// )
// }

// export default CategoryPage;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../../components/productCard/ProductCard.tsx';

const CategoryPage: React.FC = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>console.log(json))

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/category/${category}`).then(response => setProducts(response.data));
  }, [category]);

  return (
    <div>
      <h2 className="text-2xl my-4">Category: {category}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;


