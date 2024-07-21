// src/hooks/useCart.ts
import { useState } from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

const useCart = () => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }
      return [...prevCart, product];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart(cart.filter(product => product.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    setCart(cart.map(product =>
      product.id === productId ? { ...product, quantity } : product
    ));
  };

  return { cart, addToCart, removeFromCart, updateQuantity };
};

export default useCart;
