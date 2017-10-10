const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const Product = mongoose.Schema("./Product");


const cartSchema = new Schema({
  productlist: [{type: Schema.Types.Object,
    ref: "Product"}]
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
