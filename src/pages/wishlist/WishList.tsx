import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import favorite from "../../assets/icons/favorite.svg";
import Header from 'src/components/header/Header';
import Footer from 'src/components/footer/Footer';
import { Toaster } from 'react-hot-toast';
import useAddToCart from '../../hooks/useAddToCart';
import useWishlistActions from './useWishlistActions';

const Wishlist = () => {
  const wishlistItems = useSelector((state: RootState) => state.wishlist?.items ?? []);
  const { addToCartHandler } = useAddToCart();
  const { removeFromWishlistHandler, clearWishlistHandler } = useWishlistActions();

  return (
    <>
      <Header />
      <div className="px-4 md:px-8 lg:px-32 py-4">
        <h1 className="text-3xl font-bold text-center mb-8 flex items-center justify-center">
          <span className="mr-2 text-customBlue">My Wishlist</span>
          <img src={favorite} alt="heart icon" className="w-6 h-6" />
        </h1>
        {wishlistItems?.length > 0 ? (
          <>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="w-full">
                    <th className="px-6 py-3 text-left text-lg font-bold text-black uppercase tracking-wider">Product</th>
                    <th className="px-6 py-3 text-left text-lg font-bold text-black uppercase tracking-wider">Price</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                  </tr>
                </thead>
                <tbody>
                  {wishlistItems?.map((item) => (
                    <tr key={item?.id} className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap flex items-center">
                        <img src={item?.image} alt={item?.title} className="w-12 h-12 object-cover" />
                        <span className="ml-4 text-sm font-semibold text-customBlue">{item?.title}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm font-semibold text-customBlue">${item?.price}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button onClick={() => removeFromWishlistHandler(item.id)}
                          className="text-red-700">
                          Remove
                        </button>
                        <button onClick={() => addToCartHandler(item)} className="bg-customYellow text-white px-3 py-3 rounded-lg ms-4">
                          Add to cart
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className='mt-6'>
              <button
                className="w-full sm:w-auto px-5 py-3 text-red-700 font-semibold rounded-2xl border border-red-600"
                onClick={clearWishlistHandler}
                style={{ display: 'block', margin: '0 auto' }}
              >
                Clear Wishlist
              </button>
            </div>
          </>
        ) : (
          <p>Your wishlist is empty.</p>
        )}
      </div>
      <Footer />
      <Toaster />
    </>
  );
};

export default Wishlist;