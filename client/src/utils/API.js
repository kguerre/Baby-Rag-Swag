import axios from "axios";

export default {
  // Gets all items
  getProducts: function() {
    return axios.get("/api/products");
  },
  // Gets the item with the given id
  getProduct: function(id) {
    return axios.get("/api/products/" + id);
  },
  // Deletes the item with the given id
  deleteProduct: function(id) {
    return axios.delete("/api/products/" + id);
  },
  // Saves a product to cart database
  addCart: function(cartData) {
    return axios.post("/api/cart", cartData);
  }
};
