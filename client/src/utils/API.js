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
  getCart: function(id) {
    return axios.get("api/cart/" + id);
  },
  //Remove item from cart
  removeFromCart: function(id) {
    return axios.put("api/cart/" + id)
  }
};

