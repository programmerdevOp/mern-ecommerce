//import mongoose from "mongoose";
import product from "../models/product";
import Product from "../models/product";

export const createProduct = async (req, res) => {

    try {
        const product = await Product.create(req.body);
        return res.status(200).json({
            message: "Product created successfully",
            product
        });
    } catch (error) {
        res.status(404).json({
            message: "Internal server error", error
        })
    }

}

export const getProducts = async = (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({
            message: "All product fetched successfully",
            data: products
        });
    } catch (error) {
        res.status(400).json({
            message: "internal server error", error
        });
    }

}

export const getProductById = (req, res) => {
    try {
        const product = Product.findById(req.params.id);
        return res.status(200).json({
            message: "product get successfully",
            data: product,
        });
    } catch (error) {
        res.status(400).json({
            message: "internal server error", error
        });
    }
}

export const updateProduct = async (req, res) => {

    try {
        const updated = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true },
        );

        return res.status(200).json({
            message: "product updated successfully",
            data: updated,
        });
    } catch (error) {
        res.status(400).json({ message: "internal server error", error });
    }
}

export const deleteProduct = async (req, res) => {
    try {
        await product.findByIdAndDelete(req.params.id);
        res.status(500).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(404).json({ message: "Internal server error", error });
    }

}