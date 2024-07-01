// src/pages/cart/CartPage.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { removeFromCart, updateQuantity } from '../../store/CartSlice.ts';
import Header from '../../components/header/Header.tsx';
import Footer from '../../components/footer/Footer.tsx';

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

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-3/4">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2">Product</th>
                  <th className="py-2">Price</th>
                  <th className="py-2">Quantity</th>
                  <th className="py-2">Subtotal</th>
                  <th className="py-2">Remove</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-t">
                    <td className="py-2 flex items-center">
                      <img src={item.image} alt={item.title} className="w-16 h-16 mr-4" />
                      <div>
                        <p>{item.title}</p>
                      </div>
                    </td>
                    <td className="py-2">${item.price.toFixed(2)}</td>
                    <td className="py-2">
                      <div className="flex items-center">
                        <button
                          className="px-2 border"
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={(e) =>
                            handleQuantityChange(item.id, parseInt(e.target.value))
                          }
                          className="w-12 text-center mx-2 border"
                          min="1"
                        />
                        <button
                          className="px-2 border"
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="py-2">${(item.price * item.quantity).toFixed(2)}</td>
                    <td className="py-2">
                      <button
                        className="text-red-500"
                        onClick={() => handleRemove(item.id)}
                      >
                        &times;
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="w-full md:w-1/4 md:ml-4 mt-4 md:mt-0">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h2 className="text-lg font-bold">Cart Total</h2>
              <div className="flex justify-between py-2">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <input
                type="text"
                placeholder="Enter coupon code"
                className="w-full p-2 my-2 border rounded"
              />
              <button className="w-full py-2 bg-blue-500 text-white rounded-lg">Apply</button>
              <div className="flex justify-between py-2 mt-4">
                <span>Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <button className="w-full py-2 bg-green-500 text-white rounded-lg mt-4">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
