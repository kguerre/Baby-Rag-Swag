const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const Cart = mongoose.Schema(./Cart);
// const productSchema = require("../../product");

const userSchema = new Schema({
  _id: {type: Number},
  name: {type: String},
  email: {type: String},
  password: {type: String},
  cart: [{
    type: Schema.Types.Object,
    ref: "Cart"
  }]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
