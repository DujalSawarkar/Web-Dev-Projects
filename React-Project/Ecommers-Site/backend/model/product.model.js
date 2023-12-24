import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
  },
  discountPercent: {
    type: String,
  },
  rate: {
    type: Number,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  item_type: {
    type: String,
    required: true,
  },
});

export const Product = mongoose.model("Product", productSchema);
