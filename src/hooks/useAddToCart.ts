import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../store/slices/cartSlice';
import toast from 'react-hot-toast';
import { ProductType } from 'src/types/types';

const useAddToCart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addToCartHandler = (item: ProductType, quantity: number = 1) => {
    dispatch(addToCart({ ...item, quantity }));
    toast.success('Product added to cart successfully!');
    navigate('/cart');
  };

  return { addToCartHandler };
};

export default useAddToCart;
