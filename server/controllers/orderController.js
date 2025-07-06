// controllers/orderController.js
import Order from "../models/Order.js";
import Product from "../models/Product.js";
import Address from "../models/Address.js";

// ✅ Place Order - COD
export const placeOrderCOD = async (req, res) => {
  try {
    const userId = req.user._id; // comes from authUser middleware
    const { items, address } = req.body;

    if (!address || !items?.length) {
      return res.status(400).json({ success: false, message: "Invalid order payload" });
    }

    // Validate address
    const addressDoc = await Address.findById(address);
    if (!addressDoc || String(addressDoc.userId) !== String(userId)) {
      return res.status(400).json({ success: false, message: "Invalid or unauthorized address" });
    }

    // Calculate total
    let amount = 0;
    for (const item of items) {
      const product = await Product.findById(item.product);
      if (!product) {
        return res.status(400).json({ success: false, message: "Invalid product in order" });
      }
      amount += product.offerPrice * item.quantity;
    }

    // Add 2% tax
    amount += Math.floor(amount * 0.02);

    const order = await Order.create({
      userId,
      items,
      address,
      amount,
      paymentType: "COD",
      isPaid: false,
    });

    return res.status(201).json({ success: true, message: "Order placed successfully", order });
  } catch (error) {
    console.error("Order placement failed:", error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Get orders by user
export const getUserOrders = async (req, res) => {
  try {
    const userId = req.user._id;

    const orders = await Order.find({ userId })
      .populate({ path: "items.product", strictPopulate: false })
      .populate({ path: "address", strictPopulate: false })
      .sort({ createdAt: -1 });

    return res.status(200).json({ success: true, orders });
  } catch (error) {
    console.error("Fetch user orders error:", error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Get all orders (for admin/seller)
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      $or: [{ paymentType: "COD" }, { isPaid: true }],
    })
      .populate({ path: "items.product", strictPopulate: false })
      .populate({ path: "address", strictPopulate: false })
      .sort({ createdAt: -1 });

    return res.status(200).json({ success: true, orders });
  } catch (error) {
    console.error("Fetch all orders error:", error);
    return res.status(500).json({ success: false, message: error.message });
  }
};
