const router = require("express").Router();
const userController = require("../../controllers/usercontroller");
const productController = require("../../controllers/productcontroller");


// Matches with "/api/products"
router
  .route("/")
  .get(productController.findAll)
  .post(productController.create);

// Matches with "/api/products/:id"
router
  .route("/:id")
  .get(productController.findById)
  .get(userController.findUser)
  .put(productController.update)
  .delete(productController.remove);


module.exports = router;
