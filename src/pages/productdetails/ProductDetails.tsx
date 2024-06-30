import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productDetails from '../../data/ProductData.json';
import Header from '../../components/header/Header.tsx';
import Footer from '../../components/footer/Footer.tsx';
import star from "../../assets/icons/star.png"
import vector from "../../assets/icons/Vector.png"
import heart from "../../assets/icons/favorite.png"
import google from "../../assets/icons/google.svg"
import facebook from "../../assets/icons/facebook.svg"
import whatsApp from "../../assets/icons/whatsapp.svg"


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
      {/* <div className="product-details">
        <img src={product.image} alt={product.title} />
        <h1>{product.title}</h1>
        <p>${product.price}</p>
      </div> */}

      {/* <div className="flex flex-col items-center justify-center py-8">
        <div className="max-w-3xl bg-white shadow-md rounded-lg overflow-hidden flex">        
          <img className="w-64 h-auto object-contain" src={product.image} alt={product.title} />
          <div className="p-6 flex-1">
            <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
            <p className="text-gray-700 text-lg mb-4">${product.price}</p>
          </div>
        </div>
      </div> */}

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
                  <img src={vector} alt='tick' className='w-5 h-3 mt-2 ml-4' />
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
                      <button className="px-2 border border-gray-400 bg-gray-200">-</button>
                      <input type="number" className="w-10 text-center border border-gray-400 bg-gray-200" value="1" min="1" />
                      <button className=" px-2 border border-gray-400 bg-gray-200">+</button>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-4 mb-4">
                  <button className="px-8 bg-customYellow text-white rounded-full text-sm font-semibold">Add to cart</button>
                  <button className="px-8 bg-customYellow text-white rounded-full text-sm font-semibold">Buy it now</button>
                  <div className="rounded-full border bg-gray-300 w-14 h-14 flex items-center justify-center cursor-pointer"><img src={heart} alt="heart" className='h-6 w-6' /></div>
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


        <div className="max-w-3xl bg-white shadow-md rounded-lg mt-6 p-6 w-full">
          <div className="flex space-x-4 mb-4">
            <button className="flex-1 py-2 text-center border-b-2 border-blue-500">Description</button>
            <button className="flex-1 py-2 text-center border-b-2">Reviews</button>
          </div>
          <div className="w-full">
            <h2 className="text-xl font-bold mb-2">Customer reviews</h2>
            <p>No reviews yet</p>
            <button className="px-4 py-2 bg-blue-500 text-white rounded mt-2">Write button review</button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductDetails;


