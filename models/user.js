const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const Cart = mongoose.Schema(./Cart);
// const productSchema = require("../../product");

const userSchema = new Schema({
  name: {type: String},
  email: {type: String},
  password: {type: String},
  cart: [{
    type: Schema.Types.ObjectId,
    ref: "Cart"
  }]
});

const User = mongoose.model("User", userSchema);

module.exports = User;

// User {
//     _id: 1,
//     name: 'chris',
//     ...,
//     cart: 56
// }
//
// Cart {
//   id: 3,
//   userId: 1
//   list [ 1, 2 , 3]
// }
//
// User.Cart.id
// new Cart {
//   id: 56,
//   1,
//   list []
// }
