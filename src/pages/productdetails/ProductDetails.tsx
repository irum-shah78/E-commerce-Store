import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../store/ProductSlice.ts';
import { RootState, AppDispatch } from '../../store';
import Header from '../../components/header/Header.tsx';
import Footer from '../../components/footer/Footer.tsx';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch: AppDispatch = useDispatch();
  const { product, loading, error } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    if (id) {
      dispatch(getProductById(Number(id)));
    }
  }, [dispatch, id]);

  return (
    <>
      <Header />
      <div className="product-details-page px-32 p-6 mt-14">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {product && (
          <div className="product-details">
            <div className="flex">
              <img src={product.image} alt={product.title} className="w-1/3 h-1/3 object-cover" />
              <div className="ml-8">
                <h2 className="text-2xl font-bold">{product.title}</h2>
                <p className="text-xl mt-2">${product.price}</p>
                <p className="mt-4">{product.description}</p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">Add to Cart</button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;



