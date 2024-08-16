import { useDispatch } from 'react-redux';
import { removeFromWishlist, clearWishlist } from '../../store/slices/wishlistSlice';
import toast from 'react-hot-toast';

const useWishlistActions = () => {
  const dispatch = useDispatch();

  const removeFromWishlistHandler = (itemId: number) => {
    dispatch(removeFromWishlist(itemId));
    toast.success('Item removed from wishlist!');
  };

  const clearWishlistHandler = () => {
    dispatch(clearWishlist());
    toast.success('Wishlist cleared successfully!');
  };

  return {
    removeFromWishlistHandler,
    clearWishlistHandler,
  };
};

export default useWishlistActions;
