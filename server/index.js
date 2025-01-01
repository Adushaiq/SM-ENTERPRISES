const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const nodemailer = require("nodemailer"); // Import Nodemailer

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

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: "gmail", // You can use other services like Outlook, Yahoo, etc.
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS, // Your email password or app-specific password
  },
});
// Email-sending route
app.post("/api/v1/send-email", async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "All fields are required!" });
  }
  try {
    const mailOptions = {
      from: email, // Sender's email address
      to: "saadsayyed9604@gmail.com", // Recipient's email address
      subject: `Message from ${name}`,
      text: message,
    };
    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email!" });
  }
});
// Server start
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});