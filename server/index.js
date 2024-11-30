// Importing necessary modules and packages
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");

// Import custom configurations
const database = require("./config/database");
const { cloudinaryConnect } = require("./config/cloudinary");

// Import routes
const productRoutes = require("./routes/product");

// Load environment variables
dotenv.config();

// Set up port
const PORT = process.env.PORT || 5000;

// Database connection
database.connect();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "*", // Replace with your frontend URL in production
    credentials: true,
  })
);
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

// Cloudinary connection
cloudinaryConnect();

// Routes
app.use("/api/v1/products", productRoutes);

// Root route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is up and running!",
  });
});

// Server start
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
