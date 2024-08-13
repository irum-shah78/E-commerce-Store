import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { addToWishlist } from '../../store/wishlistSlice';
import { ProductCardPropsType } from '../../types/types';

const useWishlistHandler = () => {
  const dispatch = useDispatch();

  const handleAddToWishlist = (product: ProductCardPropsType['product']) => {
    try {
      dispatch(addToWishlist(product));
      toast.success(`Product added to wishlist!`);
    } catch (error: any) {
      toast.error(`Failed to add product to wishlist.`);
    }
  };

  return { handleAddToWishlist };
};

export default useWishlistHandler;