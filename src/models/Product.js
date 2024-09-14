import mongoose from "mongoose";

const ProductSchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    description: { type: String, require: true },
    images: [{ type: String }],
    brand: { type: String, require: true },
    price: { type: Number, default: 0, require: true },
    category: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("Product", ProductSchema);
