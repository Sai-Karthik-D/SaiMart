import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { useParams, Link } from "react-router-dom";
import { assets } from "../assets/assets";
import ProductCard from "../components/ProductCard";

const ProductDetails = () => {
  const { products, navigate, currency, addToCart } = useAppContext();
  const { id } = useParams();

  const [thumbnail, setThumbnail] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  const product = products.find((item) => item._id === id);

  useEffect(() => {
    if (product && products.length > 0) {
      const related = products
        .filter((item) => item.category === product.category && item._id !== product._id)
        .slice(0, 5);
      setRelatedProducts(related);
    }
  }, [products, product]);

  useEffect(() => {
    if (product?.image?.length > 0) {
      setThumbnail(product.image[0]);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="text-center text-lg text-gray-600 mt-12">
        Loading product details...
      </div>
    );
  }

  return (
    <div className="mt-12 px-4 md:px-10">
      <p className="text-sm text-gray-600 mb-2">
        <Link to="/">Home</Link> /
        <Link to="/products" className="mx-1">Products</Link> /
        <Link to={`/products/${product.category.toLowerCase()}`} className="mx-1">
          {product.category}
        </Link> /
        <span className="text-[#2e7d32]">{product.name}</span>
      </p>

      <div className="flex flex-col md:flex-row gap-10 mt-6">
        {/* Thumbnails */}
        <div className="flex gap-4">
          <div className="flex flex-col gap-3">
            {product.image.map((img, index) => (
              <img
                key={index}
                onClick={() => setThumbnail(img)}
                className={`cursor-pointer w-20 h-20 object-cover rounded border ${
                  thumbnail === img ? "border-[#2e7d32]" : "border-gray-300"
                }`}
                src={img}
                alt={`Thumbnail ${index + 1}`}
              />
            ))}
          </div>
          <div className="border border-gray-300 rounded max-w-[300px]">
            <img
              src={thumbnail}
              alt="Selected product"
              className="object-contain w-full h-full"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-semibold text-gray-800">{product.name}</h1>

          <div className="flex items-center gap-1 mt-2">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <img
                  key={i}
                  src={i < product.rating ? assets.star_icon : assets.star_dull_icon}
                  alt="rating"
                  className="w-4"
                />
              ))}
            <span className="ml-2 text-sm text-gray-500">(4)</span>
          </div>

          <div className="mt-6">
            <p className="line-through text-gray-500">
              MRP: {currency}
              {product.price}
            </p>
            <p className="text-2xl font-semibold text-[#2e7d32]">
              {currency}
              {product.offerPrice}
            </p>
            <p className="text-xs text-gray-500">(inclusive of all taxes)</p>
          </div>

          <p className="font-medium mt-6 mb-2 text-gray-700">About Product</p>
          <ul className="list-disc ml-4 text-gray-600 text-sm">
            {product.description.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>

          <div className="flex gap-4 mt-10">
            <button
              onClick={() => addToCart(product._id)}
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded transition"
            >
              Add to Cart
            </button>
            <button
              onClick={() => {
                addToCart(product._id);
                navigate("/cart");
              }}
              className="w-full bg-[#2e7d32] hover:bg-primary-dull text-white py-3 rounded transition"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <div className="flex flex-col items-center">
            <p className="text-2xl font-semibold text-gray-800">Related Products</p>
            <div className="w-16 h-1 bg-[#2e7d32] rounded mt-2" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-6">
            {relatedProducts
              .filter((p) => p.inStock)
              .map((item) => (
                <ProductCard key={item._id} product={item} />
              ))}
          </div>

          <button
            onClick={() => {
              navigate("/products");
              scrollTo(0, 0);
            }}
            className="mx-auto mt-10 px-8 py-2 border text-[#2e7d32] border-[#2e7d32] hover:bg-primary-dull rounded transition"
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
