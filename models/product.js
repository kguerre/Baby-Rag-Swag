const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    product_id: { type: Number },
    item: { type: String },
    image: {type: String},
    title: { type: String, required: true },
    description: { type: String, required: true },
    quantity: { type: Number },
    price: { type: Number }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
