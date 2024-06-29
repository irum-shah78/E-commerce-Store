import React from 'react';
import { Link } from 'react-router-dom';
import heart from "../../assets/icons/heart.png"

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, title, price, image }) => {
  return (
    <div className="rounded-2xl w-64 h-64 border border-gray-400 pt-4 pl-4">
      <div className="flex items-stretch justify-center">
        <img className="w-32 h-32 object-cover" src={image} alt={title} />
        <div className="rounded-full w-6 h-6 p-1 text-center cursor-pointer bg-lightBlue ms-2"><img src={heart} alt="heart" /></div>
      </div>
      <div className=" mt-1">
        <p className="mt-2 font-semibold text-xs text-customBlue ">{title}</p> 
        {/* truncate w-40 */}
        <p className="mt-2 font-semibold text-gray-600 text-sm">${price}</p>
        <Link className="rounded-lg text-white text-xs bg-customYellow p-2 mt-3 inline-block" to={`/product/${id}`}>
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;