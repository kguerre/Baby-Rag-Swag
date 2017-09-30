const router = require("express").Router();
const productRoutes = require("./routes");

// Product routes
router.use("/products", productRoutes);

module.exports = router;
