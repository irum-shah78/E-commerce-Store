import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../store/cartSlice';
import toast from 'react-hot-toast';

const useAddToCart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addToCartHandler = (item: any, quantity: number = 1) => {
    dispatch(addToCart({ ...item, quantity }));
    toast.success('Product added to cart successfully!');
    navigate('/cart');
  };

  return { addToCartHandler };
};

export default useAddToCart;
