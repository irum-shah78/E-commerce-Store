import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const useHeaderState = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);
  const [isWishlistOpen, setWishlistOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const cartItems = useSelector((state: RootState) => state.cart?.items ?? []);
  const wishlistItems = useSelector((state: RootState) => state.wishlist?.items ?? []);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
  const toggleCart = () => setCartOpen(!isCartOpen);
  const toggleWishlist = () => setWishlistOpen(!isWishlistOpen);
  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return {
    isDropdownOpen,
    toggleDropdown,
    isCartOpen,
    toggleCart,
    cartItems,
    isWishlistOpen,
    toggleWishlist,
    wishlistItems,
    isMenuOpen,
    toggleMenu,
  };
};

export default useHeaderState;
