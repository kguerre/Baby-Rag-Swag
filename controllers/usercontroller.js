const db = require("../models/user");

// Defining methods for the userController
module.exports = {
  //get user by id
  findUser: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

};
