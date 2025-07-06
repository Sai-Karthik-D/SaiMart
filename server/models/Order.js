import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // ✅
      required: true,
    },
    items: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product", // ✅ important for populate
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    amount: {
      type: Number,
      required: true,
    },
    paymentType: {
      type: String,
      enum: ["COD", "Online"],
      required: true,
    },
    isPaid: {
      type: Boolean,
      default: false,
    },
    address: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Address", // ✅ required for .populate("address")
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
