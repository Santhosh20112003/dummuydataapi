const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse request body as JSON

// MongoDB Connection
mongoose
  .connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("MongoDB database connection established successfully");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit the application if unable to connect to MongoDB
  });

// Routes
const ecommerceRouter = require("./routes/ecommerce");
const musicRouter = require("./routes/music");
app.use("/ecommerces", ecommerceRouter);
app.use("/music", musicRouter);

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to Santhosh Technologies Api Hub");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});