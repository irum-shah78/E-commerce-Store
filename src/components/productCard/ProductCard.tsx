import React from 'react';
import { Link } from 'react-router-dom';
import heart from "../../assets/icons/heart.png"
import "../../styles/ProductCard.css"

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, title, price, image }) => {
  return (
    <div className="rounded-2xl w-64 h-64 product-card">
      <div className="flex items-stretch justify-center mt-6">
      <img className="w-28 h-28 object-cover" src={image} alt={title} />
      <div className="rounded-full w-6 h-6 p-1 text-center cursor-pointer favorite-product"><img src={heart} alt="heart" /></div>
      </div>
      <div className="ms-2 mt-1">
      <p className="mt-2 font-semibold text-sm">{title}</p>
      <p className="mt-2 font-semibold text-gray-600">${price}</p>
      <Link className="mt-4 inline-block bg-blue-500 text-white p-2" to={`/product/${id}`}>
        View Details
      </Link>
    </div>
    </div>
  );
};

export default ProductCard;
