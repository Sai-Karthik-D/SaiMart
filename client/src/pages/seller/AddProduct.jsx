import React, { useState } from 'react';
import { categories } from '../../assets/assets';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';
const AddProduct = () => {
  const [productData, setProductData] = useState({
    name: '',
    category: '',
    price: '',
    offerPrice: '',
    inStock: true,
    description: '',
    image: [],
  });

const {axios} = useAppContext();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setProductData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const handleImageChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setProductData((prev) => {
      const combined = [...prev.image, ...newFiles].slice(0, 4);
      return { ...prev, image: combined };
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  console.log("📦 Submitting form");

  if (!productData.name || !productData.category || !productData.price || !productData.offerPrice) {
    toast.error('Please fill all required fields');
    return;
  }

  const formData = new FormData();
  formData.append('name', productData.name);
  formData.append('category', productData.category);
  formData.append('price', productData.price);
  formData.append('offerPrice', productData.offerPrice);
  formData.append('description', productData.description);
  formData.append('inStock', productData.inStock);

  productData.image.forEach((file) => {
    formData.append('images', file);
  });

  console.log(" FormData prepared:", [...formData.entries()]);

  try {
    const res = await axios.post('/api/product/add', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    });

    console.log(" Server response:", res.data);

    if (res.data.success) {
      toast.success(' Product added successfully');
      setProductData({
        name: '',
        category: '',
        price: '',
        offerPrice: '',
        inStock: true,
        description: '',
        image: [],
      });
    } else {
      toast.error(res.data.message || ' Failed to add product');
    }
  } catch (err) {
    console.error("❌ Axios error:", err);
    toast.error(err?.response?.data?.message || ' Something went wrong while uploading.');
  }
};




  return (
    <div className="p-4 w-full max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold text-[#2e7d32] mb-6">Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium">Product Name</label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleChange}
            className="w-full border rounded p-2 mt-1 outline-primary"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Category</label>
          <select
            name="category"
            value={productData.category}
            onChange={handleChange}
            className="w-full border rounded p-2 mt-1 outline-primary"
            required
          >
            <option value="">Select a category</option>
            {categories.map((category, idx) => (
              <option key={idx} value={category.text}>
                {category.text}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Price</label>
            <input
              type="number"
              name="price"
              value={productData.price}
              onChange={handleChange}
              className="w-full border rounded p-2 mt-1 outline-primary"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Offer Price</label>
            <input
              type="number"
              name="offerPrice"
              value={productData.offerPrice}
              onChange={handleChange}
              className="w-full border rounded p-2 mt-1 outline-primary"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            name="description"
            value={productData.description}
            onChange={handleChange}
            className="w-full border rounded p-2 mt-1 outline-primary"
            rows={3}
          />
        </div>

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            name="inStock"
            checked={productData.inStock}
            onChange={handleChange}
          />
          <label>Available in stock</label>
        </div>

        <div>
          <label className="block text-sm font-medium">Product Images (up to 4)</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="w-full border rounded p-2 mt-1"
          />

          {productData.image.length > 0 && (
            <div className="flex gap-3 mt-3 flex-wrap">
              {productData.image.map((img, index) => (
                <div key={index} className="relative">
                  <img
                    src={URL.createObjectURL(img)}
                    alt={`preview-${index}`}
                    className="w-20 h-20 object-cover rounded border"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <button
          type="submit"
          className="bg-[#2e7d32] hover:bg-[#27682c] text-white px-6 py-2 rounded mt-4"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
