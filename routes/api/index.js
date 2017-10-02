const router = require("express").Router();
const productRoutes = require("./routes");
const userRoutes = require("./routes");


// Product routes
router.use("/users", userRoutes);
router.use("/product", productRoutes);

module.exports = router;
