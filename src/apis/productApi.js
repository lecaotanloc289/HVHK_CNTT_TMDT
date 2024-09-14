import { request, response } from "express";
import Product from "../models/Product.js";
import mongoose from "mongoose";

const getAllProducts = async (request, response) => {
  try {
    const products = await Product.find();
    if (!products.length) {
      return response
        .status(404)
        .json({ success: false, message: "Products not found!" });
    }
    response.status(200).json({ success: true, data: products });
  } catch (error) {
    response.status(500).json({ success: false, message: error.message });
  }
};

const getProductById = async (request, response) => {
  try {
    const id = request.params.id;
    const product = await Product.findById(id);
    if (!product) {
      return response
        .status(404)
        .json({ success: false, message: "Product with ID not found" });
    }
    response.status(200).json({ success: true, data: product });
  } catch (error) {
    response.status(500).json({ success: false, message: error.message });
  }
};

const createProduct = async (request, response) => {
  const newProductData = {
    name: request.body.name,
    description: request.body.description,
    images: request.body.images,
    brand: request.body.brand,
    price: request.body.price,
    category: request.body.category,
  };
  try {
    console.log(newProductData);
    const newProduct = new Product(request.body);
    const savedProduct = await newProduct.save();
    if (!savedProduct) {
      return response
        .status(400)
        .json({ success: false, message: "Error creating product" });
    }
    response.status(201).json({
      success: true,
      data: savedProduct,
      message: "Product created successfully!",
    });
  } catch (error) {
    response.status(500).json({ success: false, message: error.message });
  }
};

const updateProductById = async (request, response) => {
  try {
    const id = request.params.id;
    if (!mongoose.isValidObjectId(id)) {
      return response
        .status(400)
        .json({ success: false, message: "Invalid product ID" });
    }

    const productUpdate = request.body;
    console.log(id, productUpdate);
    const updatedProduct = await Product.findByIdAndUpdate(id, productUpdate, {
      new: true,
    });

    if (!updatedProduct) {
      return response
        .status(404)
        .json({ success: false, message: "Product with ID not found" });
    }
    response.status(200).json({
      success: true,
      data: updatedProduct,
      message: "Product updated successfully!",
    });
  } catch (error) {
    response.status(500).json({ success: false, message: error.message });
  }
};

const deleteProductById = async (request, response) => {
  try {
    const id = request.params.id;
    if (!mongoose.isValidObjectId(id)) {
      return response
        .status(400)
        .json({ success: false, message: "Invalid product ID" });
    }
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return response
        .status(404)
        .json({ success: false, message: "Product with ID not found" });
    }
    response
      .status(200)
      .json({ success: true, message: "Product delete successfully!" });
  } catch (error) {
    response.status(500).json({ success: false, message: error.message });
  }
};
export {
  getAllProducts,
  getProductById,
  createProduct,
  updateProductById,
  deleteProductById,
};
