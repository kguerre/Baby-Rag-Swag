const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const productSchema = require("../../product");

const userSchema = new Schema({
  name: {type: String},
  email: {type: String},
  password: {type: String},
  cart: {
    type: [],
    ref: "Product"
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
