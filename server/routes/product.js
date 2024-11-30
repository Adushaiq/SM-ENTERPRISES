const express = require("express");
const router = express.Router();
const { createProduct, getAllProducts, getProductById, deleteProduct } = require("../controllers/product");

// Route to create a product
router.post("/", createProduct);

// Route to get all products
router.get("/", getAllProducts);

// Route to get a single product by ID
router.get("/:id", getProductById);

// Route to delete a product
router.delete("/:id", deleteProduct);

module.exports = router;
