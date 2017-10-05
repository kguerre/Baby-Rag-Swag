const router = require("express").Router();
const userController = require("../../controllers/usercontroller");
const productController = require("../../controllers/productcontroller");
const cartController = require("../../controllers/cartController");


// Matches with "/api/products"
router
  .route("/")
  .get(productController.findAll)
  // .post(productController.create)
  .get(userController.findAllUsers)
  .post(userController.createUser);

// Matches with "/api/products/:id"
router
  .route("/:id")
  .get(productController.findById)
  .put(productController.update)
  // .delete(productController.remove)
  .get(userController.findUserById)
  // .put(userController.updateUser)
  // .delete(userController.removeUser);


module.exports = router;
