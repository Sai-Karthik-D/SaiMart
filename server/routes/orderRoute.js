import express from 'express';
import authUser from '../middleware/authUser.js';
import { getAllOrders, getUserOrders } from '../controllers/orderController.js';
import authSeller from '../middleware/authSeller.js';
import Product from "../models/Product.js";
import Order from "../models/Order.js";

const orderRouter = express.Router();

// ✅ Reusable total calculator
const calculateTotal = async (items) => {
  let total = 0;
  for (const item of items) {
    const product = await Product.findById(item.product);
    if (!product) throw new Error("Product not found");
    total += product.offerPrice * item.quantity;
  }
  return Math.floor(total + total * 0.02); // add 2% tax
};

// ✅ COD Order Route using authUser
orderRouter.post("/cod", authUser, async (req, res) => {
  try {
    const { items, address } = req.body;
    const userId = req.user._id; // ✅ Securely fetched from token

    if (!userId || !items || !address) {
      return res.status(400).json({ success: false, message: "Missing fields in order payload" });
    }

    const amount = await calculateTotal(items);

    const newOrder = new Order({
      userId,
      items,
      address,
      amount,
      paymentType: "COD",
      isPaid: false,
    });

    await newOrder.save();

    res.status(201).json({ success: true, message: "Order placed successfully" });
  } catch (error) {
    console.error("Order creation error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
});

// Other routes
orderRouter.get('/user', authUser, getUserOrders);
orderRouter.get('/seller', authSeller, getAllOrders);

export default orderRouter;
