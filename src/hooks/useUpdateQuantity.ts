import { useDispatch } from 'react-redux';
import { updateQuantity } from '../store/cartSlice'; 

const useUpdateQuantity = () => {
  const dispatch = useDispatch();

  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  return { handleQuantityChange };
};

export default useUpdateQuantity;
