const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const ratelimit = require("express-rate-limit");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

const apiratelimiter = ratelimit({
  windowMs: 1 * 60 * 1000,
  max:10
})

app.use(apiratelimiter);

app.use(cors()); 
app.use(express.json()); 


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
    process.exit(1); 
  });


const ecommerceRouter = require("./routes/ecommerce");
const musicRouter = require("./routes/music");
const jokesRouter = require("./routes/jokes");
app.use("/ecommerce", ecommerceRouter);
app.use("/music", musicRouter);
app.use("/jokes",jokesRouter);



app.get("/", (req, res) => {
  res.send("Welcome to Santhosh Technologies Api Hub");
});

app.get("*", (req, res) => {
  res.status(404).send("Content Not Found Here...☹️");
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});