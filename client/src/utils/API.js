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
  // Gets items by type
  getProductType: function(id) {
    return axios.get("/api/products/" + item);
  },
  // Deletes the item with the given id
  deleteProduct: function(id) {
    return axios.delete("/api/products/" + id);
  },
  // Saves an item to the database
  saveProduct: function(productData) {
    return axios.post("/api/products", productData);
  },
  //Get all images
  getImages: function() {
    return axios.get("/api/products/" + image);
  },
  //Get image by id
  getImage: function() {
    return axios.get("/api/products/" + image + id);
  },
  //Get cart by id
  getCart: function() {
    return axios.get("api/cart/" + id);
  },
  //Remove item from cart
  removeFromCart: function() {
    return axios.put("api/cart/" + id)
  }
};




