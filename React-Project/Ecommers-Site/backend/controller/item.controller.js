import { Product } from "../model/product.model.js";

export const getItem = async (req, res) => {
  try {
    const product = await Product.create({
      title: "Dujal",
      price: 500,
    });
    return res.json(product);
  } catch (err) {
    console.log(err);
  }
};

export const findItem = async (req, res) => {
  try {
    const product = await Product.find();
    return res.json(product);
  } catch (error) {
    console.log(error);
  }
};
