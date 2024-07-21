// src/hooks/useWishlist.ts
import { useState } from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const useWishlist = () => {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  const addToWishlist = (product: Product) => {
    setWishlist([...wishlist, product]);
  };

  const removeFromWishlist = (productId: number) => {
    setWishlist(wishlist.filter(product => product.id !== productId));
  };

  return { wishlist, addToWishlist, removeFromWishlist };
};

export default useWishlist;
