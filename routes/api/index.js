const router = require("express").Router();
const productRoutes = require("./routes");
const userRoutes = require("./routes");
const cartRoutes = require("./routes");


// Product routes
router.use("/user", userRoutes);
router.use("/product", productRoutes);
router.use("/cart", cartRoutes);

module.exports = router;
