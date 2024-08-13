import { useState } from 'react';

const useQuantity = (initialQuantity: number = 1) => {
  const [quantity, setQuantity] = useState<number>(initialQuantity);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return {
    quantity,
    setQuantity,
    increaseQuantity,
    decreaseQuantity,
  };
};

export default useQuantity;
