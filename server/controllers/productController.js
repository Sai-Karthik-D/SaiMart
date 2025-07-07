// ✅ FULL: productController.js

import { v2 as cloudinary } from 'cloudinary';
import Product from '../models/Product.js';

// ADD PRODUCT : POST /api/product/add
export const addProduct = async (req, res) => {
  try {
    const productData = {
      name: req.body.name,
      category: req.body.category,
      price: req.body.price,
      offerPrice: req.body.offerPrice,
      description: req.body.description,
      inStock: req.body.inStock === 'true' || req.body.inStock === true
    };

    const images = req.files;

    if (!images || images.length === 0) {
      return res.json({ success: false, message: 'No images uploaded' });
    }

    let imageUrls = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: 'image',
        });
        return result.secure_url;
      })
    );

    await Product.create({ ...productData, image: imageUrls });

    res.json({ success: true, message: 'Product Added' });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

// LIST PRODUCTS : GET /api/product/list
export const productList = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json({ success: true, products });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET PRODUCT BY ID : GET /api/product/id
export const productById = async (req, res) => {
  try {
    const { id } = req.body;
    const product = await Product.findById(id);
    res.json({ success: true, product });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};


// PATCH: /api/product/stock
export const changeStock = async (req, res) => {
  try {
    const { id, inStock } = req.body;

    if (!id) {
      return res.status(400).json({ success: false, message: "Product ID is required" });
    }

    await Product.findByIdAndUpdate(id, { inStock });

    res.json({ success: true, message: "Stock Updated" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.json({ success: true, message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Deletion failed" });
  }
};
