import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import star from "../../assets/icons/star.svg";
import tick from "../../assets/icons/tick.svg";
import favorite from "../../assets/icons/favorite.svg";
import google from "../../assets/icons/google.svg";
import facebook from "../../assets/icons/facebook.svg";
import whatsApp from "../../assets/icons/whatsapp.svg";
import vector from "../../assets/icons/Vector.svg";
import Loader from 'src/components/loader/Loader';
import useAddToCart from '../../hooks/useAddToCart';
import Reviews from 'src/components/reviews/Reviews';
import useProduct from "./useProduct";
import { size, stars } from 'src/constants/sizes';

const ProductDetails: React.FC = () => {
  const { product, categoryProducts, quantity, loading, error, increaseQuantity, decreaseQuantity, setQuantity, } = useProduct();
  const { addToCartHandler } = useAddToCart();

  if (loading) return <Loader />;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <Loader />;

  return (
    <>
      <Header />
      <section className='px-4 py-4 md:px-6 lg:px-32 md:py-8 lg:py-4 mt-14'>
        {/* DETAILS SECTION */}
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="w-full lg:w-1/2 px-2 lg:px-4">
            <div className="overflow-hidden flex justify-center lg:justify-start">
              <div className="w-full lg:w-full p-4 border-2 border-gray-400 rounded-lg flex items-center justify-center">
                <img className="w-48 h-48 md:w-96 md:h-96" src={product?.image} alt={product?.title} />
              </div>
            </div>
          </div>
          <div className="flex-1 p-4 lg:px-6">
            <h1 className="text-xl md:text-2xl mb-2 text-customBlue">{product?.title}</h1>
            <p className="text-lg mb-2 text-gray-700 font-semibold">${product?.price}</p>
            <div className="flex items-center mb-2">
              <div className="text-yellow-400 flex gap-2">
                {stars?.map((_, index) => (
                  <img key={index} src={star} alt="star" />
                ))}
              </div>
              <p className="ml-2 text-gray-700 text-sm">No reviews</p>
            </div>
            <div className='flex'>
              <p className='text-black'>Availability: </p>
              <img src={tick} alt='tick' className='w-5 h-3 mt-2 ml-4' />
              <p className="text-green-600 mb-2 ml-2">In stock</p>
            </div>
            <p className="text-gray-500 mb-4 text-sm">Hurry up! Only 34 products left in stock!</p>
            <hr className='mb-4 border-gray-400' />

            <div className="mb-4">
              <label className="inline-block mr-2 text-sm font-semibold">Color:</label>
              <div className='inline-block'>
                <div className="flex gap-2">
                  <div className="w-6 h-6 bg-lime-500 rounded-full border-2 border-gray-200 cursor-pointer"></div>
                  <div className="w-6 h-6 bg-gray-600 rounded-full border-2 border-gray-200 cursor-pointer"></div>
                </div>
              </div>
            </div>

            <div className="mb-4 text-sm">
              <label className="mb-1 font-semibold">Size:</label>
              <div className="inline-block">
                <div className="flex space-x-2 ml-2">
                  {size?.map((size, index) => (
                    <button key={index} className="px-2 py-1 border rounded bg-gray-200">
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label className="mb-1 text-sm font-semibold">Quantity:</label>
              <div className="inline-block">
                <div className="flex items-center ml-2">
                  <button className="px-2 border border-gray-400 bg-gray-200" onClick={decreaseQuantity}>-</button>
                  <input type="number" className="w-10 text-center border border-gray-400 bg-gray-200" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value) || 1)} />
                  <button className="px-2 border border-gray-400 bg-gray-200" onClick={increaseQuantity}>+</button>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-4">
              <button className="px-4 py-2 md:px-8 md:py-3 bg-customYellow text-white rounded-full text-sm font-semibold" onClick={() => addToCartHandler(product, quantity)}>Add to cart</button>
              <button className="px-4 py-2 md:px-8 md:py-3 bg-customYellow text-white rounded-full text-sm font-semibold">Buy it now</button>
              <div className="rounded-full border bg-gray-300 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center cursor-pointer">
                <img src={favorite} alt="heart" className='h-5 w-5 md:h-6 md:w-6' />
              </div>
            </div>

            <hr className='mb-4 border-gray-400' />

            <div className="flex space-x-4 cursor-pointer">
              <p className='text-sm font-semibold text-black'>Share:</p>
              <img src={google} alt='google' className='h-5 w-5' />
              <img src={facebook} alt='facebook' className='h-5 w-5' />
              <img src={whatsApp} alt='whatsapp' className='h-5 w-5' />
            </div>
          </div>
        </div>

        <Reviews />

        {/* RELATED PRODUCT */}
        <section className="flex flex-wrap justify-between mt-12 gap-6">
          {categoryProducts?.length === 0 ? (
            <p>No related products found.</p>
          ) : (
            categoryProducts?.map((product) => (
              <div key={product.id} className="rounded-2xl border border-productCardBorder w-full sm:w-[23%] mb-6 sm:mb-0 p-4">
                <div className="flex flex-col h-full">
                  <div className="flex justify-center w-full mb-4">
                    <img className="object-cover w-40 h-40" src={product?.image} alt={product?.title} />
                  </div>
                  <div className="leading-normal">
                    <p className="font-semibold text-base text-customBlue truncate w-40">{product?.title}</p>
                    <p className="font-semibold text-base text-gray-600 mt-2">${product?.price}</p>
                    <div className="flex gap-2 mt-2">
                      {[...Array(5)].map((_, starIndex) => (
                        <img key={starIndex} src={vector} alt="star" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </section>
      </section>
      <Footer />
    </>
  );
};

export default ProductDetails;