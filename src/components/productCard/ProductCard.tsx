import React from 'react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, title, price, image }) => {
  return (
    <div className="border p-4">
      <img className="w-full h-64 object-cover" src={image} alt={title} />
      <h3 className="mt-2">{title}</h3>
      <p className="mt-2">${price}</p>
      <Link className="mt-4 inline-block bg-blue-500 text-white p-2" to={`/product/${id}`}>
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
