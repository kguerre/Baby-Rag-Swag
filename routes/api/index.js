const router = require("express").Router();
const productRoutes = require("./routes");

// Book routes
router.use("/products", productRoutes);

module.exports = router;
