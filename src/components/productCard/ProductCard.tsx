import React from 'react';
import { Link } from 'react-router-dom';
import heart from "../../assets/icons/favorite-heart.svg";
import useProductCard from './useProductCard';
import { ProductCardPropsType } from '../../types/types';

const ProductCard: React.FC<ProductCardPropsType> = ({ product }) => {
  const { handleAddToWishlist } = useProductCard();

  return (
    <div className="rounded-2xl w-[308px] h-[313px] border border-gray-400 pt-4 pl-4">
      <div className="flex items-stretch justify-center">
        <img className="w-[187px] h-[178px] object-cover" src={product.image} alt={product.title} />
        <div
          className="rounded-full w-6 h-6 p-1 text-center cursor-pointer bg-lightBlue ms-2"
          onClick={() => handleAddToWishlist(product)}
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
