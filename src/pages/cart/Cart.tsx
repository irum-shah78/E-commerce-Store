import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { removeFromCart, updateQuantity, clearCart, updateCart } from '../../store/cartSlice';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import closeCircle from "../../assets/icons/close-circle.svg";
import { Link } from 'react-router-dom';

const CartPage: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const handleUpdateCart = () => {
    dispatch(updateCart(cartItems));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      <Header />
      <section className='px-2 sm:px-2 md:px-8 lg:px-16 py-4 mt-14 mb-14'>
        <div className="flex flex-col lg:flex-row lg:justify-around">
          <div className="w-full lg:w-3/5 overflow-x-auto">
            <table className="bg-white w-full min-w-full lg:min-w-min" style={{ borderSpacing: '0' }}>
              <thead>
                <tr className='bg-sky-100'>
                  <th className="text-start px-2 py-2">Product</th>
                  <th className="text-start px-2 py-2">Price</th>
                  <th className="text-start px-2 py-2">Quantity</th>
                  <th className="text-start px-2 py-2">Subtotal</th>
                  <th className="text-start px-2 py-2">Remove</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td className="py-4 px-2 flex items-center space-x-2">
                      <img src={item.image} alt={item.title} className="w-12 h-12" />
                      <div className='w-32'>
                        <p className='truncate w-24'>{item.title}</p>
                      </div>
                    </td>
                    <td className="py-4 px-2 whitespace-nowrap">${item.price.toFixed(2)}</td>
                    <td className="py-4 px-2 whitespace-nowrap">
                      <div className="flex items-center space-x-1">
                        <button className="px-2 border border-gray-400 bg-gray-200" onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                        <input type="number" value={item.quantity} onChange={(e) =>
                          handleQuantityChange(item.id, parseInt(e.target.value))}
                          className="w-10 text-center mx-1 border border-gray-400 bg-gray-200" min="1" />
                        <button className="px-2 border border-gray-400 bg-gray-200"
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                      </div>
                    </td>
                    <td className="py-4 px-2 whitespace-nowrap">${(item.price * item.quantity).toFixed(2)}</td>
                    <td className="py-4 px-2 whitespace-nowrap">
                      <button className="ml-4" onClick={() => handleRemove(item.id)}><img src={closeCircle} alt="remove" /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex flex-col sm:flex-row justify-around w-full mt-8">
              <Link to={`/category/all`}>
                <button className="w-full sm:w-auto px-4 py-3 bg-customYellow text-white font-semibold rounded-2xl mb-4 sm:mb-0">Continue shopping</button>
              </Link>

              <button className="w-full sm:w-auto px-5 py-3 text-gray-500 font-semibold rounded-2xl border border-gray-300 mb-4 sm:mb-0" onClick={handleUpdateCart}>Update cart</button>
              <button className="w-full sm:w-auto px-5 py-3 text-red-700 font-semibold rounded-2xl border border-red-600" onClick={handleClearCart}>Clear cart</button>
            </div>
          </div>

          <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
            <div className="border border-gray-200">
              <h2 className="text-lg font-bold bg-sky-100 py-2 text-center">Cart total</h2>
              <div className="flex justify-between py-4 px-4">
                <span className="font-semibold">Subtotal</span>
                <span className="font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              <hr className='border-1 border-gray-400' />
              <div className="flex items-center px-2 py-4 border rounded-2xl mx-2 mt-4">
                <input type="text" placeholder="Enter coupon code" className="flex-grow outline-none placeholder:text-black" />
                <button className="text-customBlue">Apply</button>
              </div>
              <hr className='mt-4 border-1 border-gray-400' />
              <div className="flex items-center my-2 px-4 py-4 border rounded-2xl mx-2 mt-6">
                <select className="flex-grow outline-none">
                  <option>Country</option>
                </select>
              </div>
              <div className="flex justify-between py-2 px-4 mt-4">
                <span>Total amount</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="px-4">
                <button className="w-full py-2 px-3 bg-customYellow text-white rounded-3xl mt-4 mb-2 font-semibold">
                  Proceed to checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CartPage;