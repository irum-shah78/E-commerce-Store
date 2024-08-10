import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const useWishlist = () => {
  const [isOpen, setIsOpen] = useState(false);
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);

  const toggleWishlist = () => {
    setIsOpen(!isOpen);
  };

  return { wishlistItems, isOpen, toggleWishlist };
};

export default useWishlist;
