import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import productDetails from '../../data/ProductData.json';
import Header from '../../components/header/Header.tsx';
import Footer from '../../components/footer/Footer.tsx';
import star from "../../assets/icons/star.png"
import tick from "../../assets/icons/Vector.png"
import favorite from "../../assets/icons/favorite.png"
import google from "../../assets/icons/google.svg"
import facebook from "../../assets/icons/facebook.svg"
import whatsApp from "../../assets/icons/whatsapp.svg"
import camera from "../../assets/images/camera.png"
import headphone from "../../assets/images/wireless-headphones.png"
import playGame from "../../assets/images/play-games.png"
import heart from "../../assets/icons/heart.png"
import cart from "../../assets/icons/shopping-cart.svg"
import eye from "../../assets/icons/eye.svg"
import laptop from "../../assets/images/laptop.png"
import vector from "../../assets/icons/Vector.svg"
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/CartSlice.ts';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

const ProductDetails: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    if (id) {
      const productDetail = productDetails.find((product) => product.id === parseInt(id));
      setProduct(productDetail || null);
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart({ ...product, quantity }));
      navigate('/cart');
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <Header />
      <section className='px-32 py-4 p-6 mt-14'>
        <div className="flex justify-around">
          <div className="w-full px-4">
            <div className="overflow-hidden flex">
              <div className="w-1/2 p-4 border-2 border-gray-400 rounded-lg flex items-center justify-center">
                <img className="w-96 h-96" src={product.image} alt={product.title} />
              </div>
              <div className="p-6 flex-1">
                <h1 className="text-2xl mb-2 text-customBlue">{product.title}</h1>
                <p className="text-lg mb-2 text-Gray font-semibold">${product.price}</p>
                <div className="flex items-center mb-2">
                  <div className="text-yellow-400 flex gap-2">
                    <img src={star} alt='star' />
                    <img src={star} alt='star' />
                    <img src={star} alt='star' />
                    <img src={star} alt='star' />
                    <img src={star} alt='star' />
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
                  <label className=" mb-1 font-semibold">Size:</label>
                  <div className='inline-block'>
                    <div className="flex space-x-2 ml-2">
                      <button className="px-2 py-1 border rounded bg-gray-200">30</button>
                      <button className="px-2 py-1 border rounded bg-gray-200">56</button>
                      <button className="px-2 py-1 border rounded bg-gray-200">42</button>
                      <button className="px-2 py-1 border rounded bg-gray-200">48</button>
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="mb-1 text-sm font-semibold">Quantity:</label>
                  <div className="inline-block">
                    <div className="flex items-center ml-2">
                      <button className="px-2 border border-gray-400 bg-gray-200" onClick={decreaseQuantity}>-</button>
                      <input type="number" className="w-10 text-center border border-gray-400 bg-gray-200" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value) || 1)} />
                      <button className=" px-2 border border-gray-400 bg-gray-200" onClick={increaseQuantity}>+</button>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-4 mb-4">
                  <button className="px-8 bg-customYellow text-white rounded-full text-sm font-semibold"  onClick={handleAddToCart}>Add to cart</button>
                  <button className="px-8 bg-customYellow text-white rounded-full text-sm font-semibold">Buy it now</button>
                  <div className="rounded-full border bg-gray-300 w-14 h-14 flex items-center justify-center cursor-pointer"><img src={favorite} alt="heart" className='h-6 w-6' /></div>
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
          </div>
        </div>

        <div>
          <div className='flex items-center justify-center gap-3 mt-12' >
            <button className="rounded-xl border border-gray-400 py-2 px-4">Description</button>
            <button className="text-white bg-customBlue rounded-xl py-2 px-6">Reviews</button>
          </div>
          <div className="border boredr-1 border-gray-400 rounded-lg mt-6 p-6">
            <div className="w-full">
              <h2 className="text-lg font-bold mb-2 text-customBlue">Customer reviews</h2>
              <p className='text-gray-600'>No reviews yet</p>
              <button className='text-white bg-customBlue mt-2 px-4 py-2 underline'>Write a review</button>
            </div>
          </div>
        </div>

        <div className='mt-12'>
          <p className='text-lg font-semibold'>Related Product</p>

          <div className="flex items-center justify-between cursor-pointer mt-10">
            <div className="rounded-2xl w-64 h-64 product-card">
              <div className="flex items-stretch justify-center mt-6">
                <img className="w-36 h-30" src={camera} alt="camera" />
                <div className="rounded-full w-6 h-6 p-1 text-center cursor-pointer favorite-product"><img src={heart} alt="heart" /></div>
              </div>
              <div className="flex justify-between mt-7">
                <div className=" flex justify-between gap-4 rounded-xl ms-2 px-5 py-3 cursor-pointer add-to-cart">
                  <p className="text-black font-semibold">Add to cart</p>
                  <div className="cart-btn h-6 w-6 rounded-full p-0.5 text-center">
                    <button><img alt="cart" src={cart} className="w-4 h-4" /></button>
                  </div>
                </div>
                <div className="rounded-xl eye-icon px-4 py-2 mr-2 p-0.5 text-center cursor-pointer"><img src={eye} alt="eye" /></div>
              </div>
            </div>

            <div className="rounded-2xl w-64 h-64 product-card">
              <div className="flex items-stretch justify-center mt-6">
                <img className="w-36 h-30" src={headphone} alt="headphone" />
                <div className="rounded-full w-6 h-6 p-1 text-center cursor-pointer favorite-product"><img src={heart} alt="heart" /></div>
              </div>
              <div className="ms-2 mt-1">
                <p className="font-semibold text-sm">Wireless headphones</p>
                <p className="font-semibold text-gray-600 mt-2">$11,70</p>
                <div className="flex gap-2 mt-2">
                  <img src={vector} alt="star" />
                  <img src={vector} alt="star" />
                  <img src={vector} alt="star" />
                  <img src={vector} alt="star" />
                  <img src={vector} alt="star" />
                </div>
              </div>
            </div>

            <div className="rounded-2xl w-64 h-64 product-card">
              <div className="flex items-stretch justify-center mt-6">
                <img className="w-36 h-30" src={playGame} alt="playGame" />
                <div className="rounded-full w-6 h-6 p-1 text-center cursor-pointer favorite-product"><img src={heart} alt="heart" /></div>
              </div>
              <div className="ms-2 mt-1">
                <p className="font-semibold text-sm">Play game</p>
                <p className="font-semibold text-gray-600 mt-2">$11,70</p>
                <div className="flex gap-2 mt-2">
                  <img src={vector} alt="star" />
                  <img src={vector} alt="star" />
                  <img src={vector} alt="star" />
                  <img src={vector} alt="star" />
                  <img src={vector} alt="star" />
                </div>
              </div>
            </div>

            <div className="rounded-2xl w-64 h-64 product-card">
              <div className="flex items-stretch justify-center mt-6">
                <img className="w-36 h-30" src={laptop} alt="laptop" />
                <div className="rounded-full w-6 h-6 p-1 text-center cursor-pointer favorite-product"><img src={heart} alt="heart" /></div>
              </div>
              <div className="ms-2 mt-1">
                <p className="font-semibold text-sm">Tablet as a aptop</p>
                <p className="font-semibold text-gray-600 mt-2">$11,70</p>
                <div className="flex gap-2 mt-2">
                  <img src={vector} alt="star" />
                  <img src={vector} alt="star" />
                  <img src={vector} alt="star" />
                  <img src={vector} alt="star" />
                  <img src={vector} alt="star" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductDetails;


