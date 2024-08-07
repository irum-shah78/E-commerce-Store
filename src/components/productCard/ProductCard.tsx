import React from 'react';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../../store/WishlistSlice';
import { Link } from 'react-router-dom';
import heart from "../../assets/icons/favorite-heart.svg";

interface ProductCardProps {
  product: {
    id: number;
    title: string;
    price: number;
    image: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToWishlist = () => {
    dispatch(addToWishlist(product));
  };

  return (
    <div className="rounded-2xl w-64 h-64 border border-gray-400 pt-4 pl-4">
      <div className="flex items-stretch justify-center">
        <img className="w-32 h-32 object-cover" src={product.image} alt={product.title} />
        <div
          className="rounded-full w-6 h-6 p-1 text-center cursor-pointer bg-lightBlue ms-2"
          onClick={handleAddToWishlist}
        >
          <img src={heart} alt="heart" />
        </div>
      </div>
      <div className="mt-1">
        <p className="mt-2 font-semibold text-xs text-customBlue truncate w-40">{product.title}</p>
        <p className="mt-2 font-semibold text-gray-600 text-sm">${product.price}</p>
        <Link className="rounded-lg text-white text-xs bg-customYellow p-2 mt-3 inline-block" to={`/product/${product.id}`}>
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;