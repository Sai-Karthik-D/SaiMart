import User from "../models/User.js"

export const updateCart = async (req, res) => {
  try {
    const { cartItems } = req.body;

    const userId = req.user.id; // ✅ use authenticated user

    if (!userId) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    await User.findByIdAndUpdate(userId, { cartItems });

    res.json({ success: true, message: "Cart updated" });
  } catch (error) {
    console.log("🛠️ Error updating cart:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};
