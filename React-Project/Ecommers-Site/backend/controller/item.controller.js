import { Product } from "../model/product.model.js";

export const getItem = async (req, res) => {
  const { itemtype } = req.params;
  const { id } = req.query;
  // console.log(itemtype, id);

  // res.send({ itemId });
  try {
    const product = await Product.find({
      _id: id,
    });


    const producttype = await Product.find({
      item_type: itemtype,
    });
    let products = [];
    products.push(product);
    products.push(producttype);

    return res.json(products);
  } catch (err) {
    console.log(err);
  }
  // try {
  //   return res.json(producttype);
  // } catch (err) {
  //   console.log(err);
  // }
};

export const findItem = async (req, res) => {
  try {
    const product = await Product.find();
    // console.log(product);
    return res.json(product);
  } catch (error) {
    console.log(error);
  }
};

export const findItemCategory = async (req, res) => {
  const { categoryId } = req.params;
  const { item_type } = req.query;
  // console.log(categoryId);

  if (item_type == null) {
    try {
      const product = await Product.find({
        category: categoryId,
      });

      // console.log(product);

      return res.json(product);
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      const product = await Product.find({
        category: categoryId,
        item_type: item_type,
      });

      // console.log(product);

      return res.json(product);
    } catch (error) {
      console.log(error);
    }
  }
};

export const insertDoc = async (req, res) => {
  // console.log(req.body);

  const {
    title,
    price,
    discount,
    discountPercent,
    rate,
    imageUrl,
    category,
    item_type,
  } = req.body;

  try {
    const insertedProd = await Product.create({
      title,
      price,
      discount,
      discountPercent,
      rate,
      imageUrl,
      category,
      item_type,
    });

    return res.json(insertedProd);
  } catch (error) {
    console.log(error);
  }
};
