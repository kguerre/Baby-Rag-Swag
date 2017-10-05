const router = require("express").Router();
const productRoutes = require("./routes");
const userRoutes = require("./routes");
const cartRoutes = require("./routes");


// Product routes
router.use("/user", userRoutes);
router.use("/product", productRoutes);
router.use("/cart", cartRoutes);


//if no API routes are hit, send the React App

// router.use(function(req,res) {
//   res.sendFile(path.join(__dirname))
// })

module.exports = router;
