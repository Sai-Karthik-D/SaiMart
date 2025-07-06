import Address from "../models/Address.js";

// POST /api/address/add
export const addAddress = async (req, res) => {
  try {
    const addressData = req.body; // this is address object from frontend
    const userId = req.user.id;   // ✅ safely fetched from token (authUser middleware)

    await Address.create({ ...addressData, userId });

    res.json({ success: true, message: "Address added successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET /api/address/get
// GET /api/address/get
export const getAddress = async (req, res) => {
  try {
    const userId = req.user.id; // ✅ pulled from auth middleware
    const addresses = await Address.find({ userId });
    res.json({ success: true, addresses });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

