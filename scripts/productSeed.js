const mongoose = require("mongoose");
let db = require("../models/product");
mongoose.Promise = global.Promise;


mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/brsreact",
  {
    useMongoClient: true
  }
);

const productSeed = [
  {
    item: "tops",
    title: "BRS Striped Tee",
    description: "Made with 100% Cotton. Sizes available: XS, SM, M, L, XL",
    quantity: 50,
    price: 24
  },
  {
    item: "tops",
    title: "Basic BRS Tee",
    description: "Made with 100% Cotton. Sizes available: XS, SM, M, L, XL",
    quantity: 50,
    price: 20
  },
  {
    item: "tops",
    title: "Navy BRS Baseball Tee",
    description: "Made with 100% Cotton. Sizes available: XS, SM, M, L, XL",
    quantity: 50,
    price: 20
  },
  {
    item: "tops",
    title: "Camo BRS Baseball Tee",
    description: "Made with 100% Cotton. Sizes available: XS, SM, M, L, XL",
    quantity: 50,
    price: 30
  },
  {
    item: "tops",
    title: "BRS Basic Tank",
    description: "Made with 100% Cotton. Sizes available: XS, SM, M, L, XL",
    quantity: 50,
    price: 25
  },
  {
    item: "tops",
    title: "Limited BRS Logo Tank",
    description: "Made with 100% Cotton. Sizes available: XS, SM, M, L, XL",
    quantity: 20,
    price: 45
  },
  {
    item: "bottoms",
    title: "Basic BRS Baby Joggers",
    description: "Made with 100% Cotton. Sizes available: XS, SM, M, L, XL",
    quantity: 60,
    price: 30
  },
  {
    item: "bottoms",
    title: "Camo BRS Baby Joggers",
    description: "Made with 100% Cotton. Sizes available: XS, SM, M, L, XL",
    quantity: 55,
    price: 30
  },
  {
    item: "bottoms",
    title: "BRS Leggings",
    description: "Made with 100% Cotton. Sizes available: XS, SM, M, L, XL",
    quantity: 55,
    price: 30
  },
  {
    item: "bottoms",
    title: "BRS Baby Sweats",
    description: "Made with 100% Cotton. Sizes available: XS, SM, M, L, XL",
    quantity: 55,
    price: 30
  },
  {
    item: "bottoms",
    title: "BRS Shorts",
    description: "Made with 100% Cotton. Sizes available: XS, SM, M, L, XL",
    quantity: 55,
    price: 20
  },
  {
    item: "bottoms",
    title: "Basic BSR Pants",
    description: "Made with 100% Cotton. Sizes available: XS, SM, M, L, XL",
    quantity: 60,
    price: 25
  }
];

db.Product
  .remove({})
  .then(() => db.Product.collection.insertMany(productSeed))
  .then(data => {
    console.log(data.insertedIds.length + " products inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });