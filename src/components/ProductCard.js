// src/components/ProductCard.js
import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <img src={product.image} alt={product.title} className="h-40 object-contain mx-auto" />
      <h2 className="text-lg font-bold mt-2">{product.title}</h2>
      <p className="text-gray-600">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-green-500 text-white px-4 py-2 mt-4 rounded hover:bg-green-700"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
