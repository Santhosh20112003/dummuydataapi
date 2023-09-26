const mongoose = require("mongoose");
const { Schema } = mongoose;

const ecommerceSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    
  },
  {
    timestamps: true,
  }
);

const Ecommerce = mongoose.model("Ecommerce", ecommerceSchema);

Ecommerce.createIndexes().catch((error) => {
  console.error("Error creating indexes:", error);
});

module.exports = Ecommerce;