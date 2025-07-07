import React, { useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const ProductList = () => {
  const { products, currency ,changeProductStock } = useAppContext();
  const [localProducts, setLocalProducts] = useState(products);

const toggleStock = (id) => {
  setLocalProducts((prev) =>
    prev.map((prod) =>
      prod._id === id ? { ...prod, inStock: !prod.inStock } : prod
    )
  );

  const currentProduct = localProducts.find((prod) => prod._id === id);
  if (currentProduct) {
    changeProductStock(id, !currentProduct.inStock); // Call API
  }
};


const deleteProduct = async (id) => {
  if (window.confirm('Are you sure you want to delete this product?')) {
    try {
      const { data } = await axios.delete(`/api/product/delete/${id}`);
      if (data.success) {
        toast.success("Product deleted");
        setLocalProducts((prev) => prev.filter((prod) => prod._id !== id));
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Server error");
    }
  }
};



  return (
    <div className="no-scrollbar flex-1 h-[95vh] overflow-y-scroll flex flex-col justify-between">
      <div className="w-full md:p-10 p-4">
        <h2 className="pb-4 text-lg font-medium">All Products</h2>
        <div className="flex flex-col items-center max-w-6xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
          <table className="w-full overflow-hidden text-left">
            <thead className="text-gray-900 text-sm">
              <tr className="border-b border-gray-200">
                <th className="px-4 py-3 font-semibold w-[35%]">Product</th>
                <th className="px-4 py-3 font-semibold w-[20%]">Category</th>
                <th className="px-4 py-3 font-semibold w-[15%] hidden md:table-cell">Price</th>
                <th className="px-4 py-3 font-semibold w-[15%]">Stock</th>
                <th className="px-4 py-3 font-semibold w-[15%] text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700">
              {localProducts.map((product) => (
                <tr
                  key={product._id}
                  className={`border-t border-gray-200 ${!product.inStock ? 'bg-red-50' : ''}`}
                >
                  <td className="px-4 py-4 flex items-center gap-4">
                    <img
                      src={product.image[0]}
                      alt="Product"
                      className="w-20 h-20 object-cover rounded border"
                    />
                    <span className="truncate max-w-[150px]">{product.name}</span>
                  </td>
                  <td className="px-4 py-4">{product.category}</td>
                  <td className="px-4 py-4 hidden md:table-cell">
                    {currency}
                    {product.offerPrice}
                  </td>
                  <td className="px-4 py-4">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={product.inStock}
                        onChange={() => toggleStock(product._id)}
                      />
                      <div className="w-12 h-7 bg-slate-300 rounded-full peer peer-checked:bg-[#2e7d32] transition-colors duration-200"></div>
                      <span className="dot absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
                    </label>
                  </td>
                  <td className="px-4 py-4 text-right">
                    <button
                      onClick={() => deleteProduct(product._id)}
                      className="text-red-600 hover:underline text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
