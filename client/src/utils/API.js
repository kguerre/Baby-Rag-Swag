import axios from "axios";

export default {

  // Gets all items
  getProducts: function() {
    return axios.get("/api/product");
  },
  // Gets the item with the given id
  getItem: function(id) {
    return axios.get("/api/product/" + id);
  },
  // Gets items by type
  // getProductType: function(id) {
  //   return axios.get("/api/products/" + item);
  // },
  // Deletes the item with the given id
  // deleteProduct: function(id) {
  //   return axios.delete("/api/product/" + id);
  // },
  // // Saves an item to the database
  // saveProduct: function(productData) {
  //   return axios.post("/api/product", productData);
  // },
  //Get all images
  // getImages: function() {
  //   return axios.get("/api/products/" + image);
  // },
  // //Get image by id
  // getImage: function() {
  //   return axios.get("/api/products/" + image + id);
  // },
  //Get cart by user id
  getCart: function(id) {
    return axios.get("api/cart/" + id);
  },
  //Remove item from cart
  removeFromCart: function(id) {
    return axios.put("api/cart/" + id)
  }
};

  // homeCarousel: function () {
  //   return axios.get("/api/products")
  // }
  // // Gets all items
  // getProducts: function() {
  //   return axios.get("/api/products");
  // },
  // // Gets the item with the given id
  // getProduct: function(id) {
  //   return axios.get("/api/products/" + id);
  // },
  // // Deletes the item with the given id
  // deleteProduct: function(id) {
  //   return axios.delete("/api/products/" + id);
  // },
  // // Saves a product to cart database
  // addCart: function(cartData) {
  //   return axios.post("/api/cart", cartData);
  // }
