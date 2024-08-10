import { useDispatch } from 'react-redux';
import { updateCart } from '../store/cartSlice'; 
import { toast } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store'; 

const useUpdateCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleUpdateCart = () => {
    dispatch(updateCart(cartItems));
    toast.success('Cart updated successfully!');
  };

  return { handleUpdateCart };
};

export default useUpdateCart;
