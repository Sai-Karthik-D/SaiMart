import React from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const ProductCard = ({ product }) => {
  const { currency, addToCart, removeFromCart, cartItems, navigate } = useAppContext();

  return (
    product && (
      <div
        onClick={() => {
          navigate(`/products/${product.category.toLowerCase()}/${product._id}`);
          scrollTo(0, 0);
        }}
        className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer w-full sm:max-w-[240px] flex flex-col"
      >
        {/* Image */}
        <img
          className="w-full h-40 object-contain p-4"
          src={product.image[0]}
          alt={product.name}
        />

        {/* Details */}
        <div className="bg-[#2e7d32] text-white p-4 rounded-tl-[40px] flex-1 flex flex-col justify-between">
          <div>
            <div className="font-semibold text-lg mb-1">{product.name}</div>
            <div className="flex gap-1 mb-1 text-yellow-300 text-sm">
              {"★".repeat(product.rating)}{"☆".repeat(5 - product.rating)}
            </div>
            <p className="text-sm text-gray-200 mb-2 line-clamp-2">
              {product.description?.[0] || "No description available"}
            </p>
          </div>

          <div className="flex items-center justify-between mt-auto pt-2">
            <p className="text-sm font-medium">
              {currency}{product.offerPrice}
              <span className="line-through text-gray-300 ml-1 text-xs">
                {currency}{product.price}
              </span>
            </p>

            {!cartItems[product._id] ? (
              <button
                className="flex items-center gap-1 bg-white text-[#2e7d32] px-3 py-1 rounded-full text-sm font-semibold hover:bg-gray-100"
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(product._id);
                }}
              >
                <img
                  src={assets.cart_icon}
                  alt="cart-icon"
                  className="w-4 h-4"
                />
                Add
              </button>
            ) : (
              <div
                className="flex items-center gap-2 bg-white px-3 py-1 rounded-full text-[#2e7d32] text-sm font-semibold"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="font-bold px-2"
                  onClick={() => removeFromCart(product._id)}
                >
                  -
                </button>
                <span>{cartItems[product._id]}</span>
                <button
                  className="font-bold px-2"
                  onClick={() => addToCart(product._id)}
                >
                  +
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default ProductCard;
