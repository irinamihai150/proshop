import asyncHandler from "express-async-handler"
import Product from "../models/productModel.js"


// //@desc fetch all products
// //@route get/api/products
// //@access Public

const getProducts = asyncHandler(async (req, res) => {
	const products = await Product.find({})
	res.json(products)
})

const getProductById = asyncHandler(async (req, res) => {
	const product = await Product.findById(req.params.id)
	if (product) {
		res.json(product)
	} else {
		res.status(404).json({ message: "Product not found" })
		throw new Error("Product not found")
	}
})

export { getProductById, getProducts }
