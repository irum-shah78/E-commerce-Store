import { useDispatch } from 'react-redux';
import { removeFromCart } from '../store/cartSlice';
import { toast } from 'react-hot-toast';

const useRemoveFromCart = () => {
  const dispatch = useDispatch();

  const handleRemove = (id: number) => {
    try {
      dispatch(removeFromCart(id));
      toast.success('Product removed successfully!');
    } catch (error) {
      toast.error('Failed to remove product.');
    }
  };

  return { handleRemove };
};

export default useRemoveFromCart;
