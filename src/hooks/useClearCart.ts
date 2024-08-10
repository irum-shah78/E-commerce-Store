import { useDispatch } from 'react-redux';
import { clearCart } from '../store/cartSlice';
import { toast } from 'react-hot-toast';

const useClearCart = () => {
  const dispatch = useDispatch();

  const handleClearCart = () => {
    try {
      dispatch(clearCart());
      toast.success('Cart cleared successfully!');
    } catch (error) {
      toast.error('Failed to clear cart.');
    }
  };

  return { handleClearCart };
};

export default useClearCart;
