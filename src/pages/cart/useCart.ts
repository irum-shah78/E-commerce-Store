import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeFromCart, updateCart, updateQuantity } from '../../store/cartSlice';
import { toast } from 'react-hot-toast';
import { RootState } from '../../store/store';

const useCartActions = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart?.items ?? []);

  const handleClearCart = () => {
    try {
      dispatch(clearCart());
      toast.success('Cart cleared successfully!');
    } catch (error) {
      toast.error('Failed to clear cart.');
    }
  };

  const handleRemove = (id: number) => {
    try {
      dispatch(removeFromCart(id));
      toast.success('Product removed successfully!');
    } catch (error) {
      toast.error('Failed to remove product.');
    }
  };

  const handleUpdateCart = () => {
    try {
      dispatch(updateCart(cartItems));
      toast.success('Cart updated successfully!');
    } catch (error) {
      toast.error('Failed to update cart.');
    }
  };

  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  return {
    cartItems,
    handleClearCart,
    handleRemove,
    handleUpdateCart,
    handleQuantityChange,
  };
};

export default useCartActions;