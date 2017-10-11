const mongoose = require("mongoose");
let Product = require("../models/product");
mongoose.Promise = global.Promise;


mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/brsreact",
  {
    useMongoClient: true
  }
);

const productSeed = [
  {
    product_id: 1,
    item: "tops",
    image: "/assets/images/baby1.jpeg",
    title: "BRS Striped Tee",
    description: "Made with 100% Cotton. Sizes available: XS, SM, M, L, XL",
    quantity: 50,
    price: 24
  },
  {
    product_id: 2,
    item: "tops",
    image: "/assets/images/baby1.jpeg",
    title: "Basic BRS Tee",
    description: "Made with 100% Cotton. Sizes available: XS, SM, M, L, XL",
    quantity: 50,
    price: 20
  },
  {
    product_id: 3,
    item: "tops",
    image: "/assets/images/baby1.jpeg",
    title: "Navy BRS Baseball Tee",
    description: "Made with 100% Cotton. Sizes available: XS, SM, M, L, XL",
    quantity: 50,
    price: 20
  },
  {
    product_id: 4,
    item: "tops",
    image: "/assets/images/baby1.jpeg",
    title: "Camo BRS Baseball Tee",
    description: "Made with 100% Cotton. Sizes available: XS, SM, M, L, XL",
    quantity: 50,
    price: 30
  },
  {
    product_id: 5,
    item: "tops",
    image: "/assets/images/baby1.jpeg",
    title: "BRS Basic Tank",
    description: "We don't sell clothes. This is a lifestyle. Dress your baby in cool, quality clothing. Made with 100% Cotton. Sizes available: XS, SM, M, L",
    quantity: 50,
    price: 25
  },
  {
    product_id: 6,
    item: "tops",
    image: "/assets/images/baby1.jpeg",
    title: "Limited BRS Logo Tank",
    description: "We don't sell clothes. This is a lifestyle. Dress your baby in cool, quality clothing. Made with 100% Cotton. Sizes available: XS, SM, M, L",
    quantity: 20,
    price: 45
  },
  {
    product_id: 7,
    item: "bottoms",
    image: "/assets/images/baby1.jpeg",
    title: "Basic BRS Baby Joggers",
    description: "Made with 100% Cotton. Sizes available: XS, SM, M, L, XL",
    quantity: 60,
    price: 30
  },
  {
    product_id: 8,
    item: "bottoms",
    image: "/assets/images/baby1.jpeg",
    title: "Camo BRS Baby Joggers",
    description: "We don't sell clothes. This is a lifestyle. Dress your baby in cool, quality clothing. Made with 100% Cotton. Sizes available: XS, SM, M, L",
    quantity: 55,
    price: 30
  },
  {
    product_id: 9,
    item: "bottoms",
    image: "/assets/images/baby1.jpeg",
    title: "BRS Leggings",
    description: "We don't sell clothes. This is a lifestyle. Dress your baby in cool, quality clothing. Made with 100% Cotton. Sizes available: XS, SM, M, L",
    quantity: 55,
    price: 30
  },
  {
    product_id: 10,
    item: "bottoms",
    image: "/assets/images/baby1.jpeg",
    title: "BRS Baby Sweats",
    description: "We don't sell clothes. This is a lifestyle. Dress your baby in cool, quality clothing. Made with 100% Cotton. Sizes available: XS, SM, M, L",
    quantity: 55,
    price: 30
  },
  {
    product_id: 11,
    item: "bottoms",
    image: "/assets/images/baby1.jpeg",
    title: "BRS Shorts",
    description: "We don't sell clothes. This is a lifestyle. Dress your baby in cool, quality clothing. Made with 100% Cotton. Sizes available: XS, SM, M, L",
    quantity: 55,
    price: 20
  },
  {
    product_id: 12,
    item: "bottoms",
    image: "/assets/images/baby1.jpeg",
    title: "Basic BSR Pants",
    description: "We don't sell clothes. This is a lifestyle. Dress your baby in cool, quality clothing. Made with 100% Cotton. Sizes available: XS, SM, M, L",
    quantity: 60,
    price: 25
  }
];

Product
  .remove({})
  .then(() => Product.collection.insertMany(productSeed))
  .then(data => {
    console.log(data.insertedIds.length + " products inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
