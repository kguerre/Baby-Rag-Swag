const db = require("../models/cart");

// Defining methods for the cartController
module.exports = {
  //get all cart data
  findAllCarts: function(req, res) {
    db.Cart
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //get cart by id
  findCartById: function(req, res) {
    db.Cart
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createCart: function(req, res) {
    db.Cart
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //update cart
  updateCart: function(req, res) {
    db.Cart
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //remove cart
  removeCart: function(req, res) {
    db.Cart
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
