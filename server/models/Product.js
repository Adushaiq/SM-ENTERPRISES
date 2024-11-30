const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    primaryImage: {
      type: String,
      required: true, // Ensure at least the primary image is mandatory
    },
    secondaryImage: {
      type: String, // Optional
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields automatically
  }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
