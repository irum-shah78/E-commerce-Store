import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const useCart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  return { cartItems, isOpen, toggleCart };
};

export default useCart;
