// import React from 'react';
// import { useParams } from 'react-router-dom';
// import Header from '../../components/header/Header.tsx';
// import Footer from '../../components/footer/Footer.tsx';

// const ProductDetails: React.FC = () => {
//   const { id } = useParams<{ id: string }>();

//   // For demonstration, hardcoded data
//   const productData = {
//     id,
//     title: "Product Title",
//     description: "Product Description",
//     price: 100,
//     image: "https://via.placeholder.com/150"
//   };

//   return (
//     <>
//       <Header />
//       <div className="product-details px-32 py-4 p-6 mt-14">
//         <h1 className="text-3xl">{productData.title}</h1>
//         <img src={productData.image} alt={productData.title} />
//         <p>{productData.description}</p>
//         <p>${productData.price}</p>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default ProductDetails;

// src/pages/ProductDetails.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productDetails from '../../data/ProductData.json'; 
import Header from '../../components/header/Header.tsx';
import Footer from '../../components/footer/Footer.tsx';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      const productDetail = productDetails.find((product) => product.id === parseInt(id));
      setProduct(productDetail || null);
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className="product-details">
        <img src={product.image} alt={product.title} />
        <h1>{product.title}</h1>
        {/* <p>{product.description}</p> */}
        <p>${product.price}</p>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
