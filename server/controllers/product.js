const Product = require("../models/Product");
const cloudinary = require("cloudinary").v2;

// Create a new product
exports.createProduct = async (req, res) => {
  try {
    const { name, brand } = req.body;

    // Validate required fields
    if (!name || !brand || !req.files || !req.files.primaryImage) {
      return res.status(400).json({ success: false, message: "Name and primary image are required." });
    }

    // Upload primary image to Cloudinary in the "SMEnterprises" folder
    const primaryImageResult = await cloudinary.uploader.upload(req.files.primaryImage.tempFilePath, {
      folder: "SMEnterprises",
    });

    // Upload secondary image if provided, to the "SMEnterprises" folder
    let secondaryImageResult = null;
    if (req.files.secondaryImage) {
      secondaryImageResult = await cloudinary.uploader.upload(req.files.secondaryImage.tempFilePath, {
        folder: "SMEnterprises",
      });
    }

    // Create product in the database
    const product = await Product.create({
      brand,
      name,
      primaryImage: primaryImageResult.secure_url,
      secondaryImage: secondaryImageResult?.secure_url || null,
    });

    res.status(201).json({ success: true, product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};


// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ success: true, products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};

// Get a product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    res.status(200).json({ success: true, product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};

// Delete a product
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    res.status(200).json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};
