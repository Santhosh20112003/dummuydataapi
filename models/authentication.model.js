const mongoose = require("mongoose");
const { Schema } = mongoose;

const authSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
	  unique:true
    },
    name: {
      type: String,
      required: true,
    },
    token: {
      type: String,
      required: true,
    }
    
  },
  {
    timestamps: true,
  }
);

const auth = mongoose.model("auth", authSchema);

auth.createIndexes().catch((error) => {
  console.error("Error creating indexes:", error);
});

module.exports = auth;