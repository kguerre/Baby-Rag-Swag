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
    title: "BRS Patterned Tee",
    image: "/assets/images/brs1.pg",
    description: "We don't sell clothes. This is a lifestyle. Dress your baby in cool, quality clothing. Made with 100% Cotton. Sizes available: XS, SM, M, L",
    quantity: 50,
    price: 24
  },
  {
    product_id: 2,
    item: "tops",
    title: "Basic Elephant Overalls",
    image: "/assets/images/brs2.jpg",
    description: "We don't sell clothes. This is a lifestyle. Dress your baby in cool, quality clothing. Made with 100% Cotton. Sizes available: XS, SM, M, L",
    quantity: 50,
    price: 20
  },
  {
    product_id: 3,
    item: "tops",
    title: "BRS Shark Onesie",
    image: "/assets/images/brs4.jpg",
    description: "We don't sell clothes. This is a lifestyle. Dress your baby in cool, quality clothing. Made with 100% Cotton. Sizes available: XS, SM, M, L",
    quantity: 50,
    price: 20
  },
  {
    product_id: 4,
    item: "tops",
    title: "BRS Light Blue Anchor Tank",
    image: "/assets/images/brs5.jpg",
    description: "We don't sell clothes. This is a lifestyle. Dress your baby in cool, quality clothing. Made with 100% Cotton. Sizes available: XS, SM, M, L",
    quantity: 50,
    price: 30
  },
  {
    product_id: 5,
    item: "tops",
    title: "BRS Basic Tank",
    description: "We don't sell clothes. This is a lifestyle. Dress your baby in cool, quality clothing. Made with 100% Cotton. Sizes available: XS, SM, M, L",
    quantity: 50,
    price: 25
  },
  {
    product_id: 6,
    item: "tops",
    title: "Limited BRS Logo Tank",
    description: "We don't sell clothes. This is a lifestyle. Dress your baby in cool, quality clothing. Made with 100% Cotton. Sizes available: XS, SM, M, L",
    quantity: 20,
    price: 45
  },
  {
    product_id: 7,
    item: "bottoms",
    title: "Basic BRS Baby Shorts",
    image: "/assets/images/brs3.jpg",
    description: "We don't sell clothes. This is a lifestyle. Dress your baby in cool, quality clothing. Made with 100% Cotton. Sizes available: XS, SM, M, L",
    quantity: 60,
    price: 30
  },
  {
    product_id: 8,
    item: "bottoms",
    title: "Camo BRS Baby Joggers",
    description: "We don't sell clothes. This is a lifestyle. Dress your baby in cool, quality clothing. Made with 100% Cotton. Sizes available: XS, SM, M, L",
    quantity: 55,
    price: 30
  },
  {
    product_id: 9,
    item: "bottoms",
    title: "BRS Leggings",
    description: "We don't sell clothes. This is a lifestyle. Dress your baby in cool, quality clothing. Made with 100% Cotton. Sizes available: XS, SM, M, L",
    quantity: 55,
    price: 30
  },
  {
    product_id: 10,
    item: "bottoms",
    title: "BRS Baby Sweats",
    description: "We don't sell clothes. This is a lifestyle. Dress your baby in cool, quality clothing. Made with 100% Cotton. Sizes available: XS, SM, M, L",
    quantity: 55,
    price: 30
  },
  {
    product_id: 11,
    item: "bottoms",
    title: "BRS Shorts",
    description: "We don't sell clothes. This is a lifestyle. Dress your baby in cool, quality clothing. Made with 100% Cotton. Sizes available: XS, SM, M, L",
    quantity: 55,
    price: 20
  },
  {
    product_id: 12,
    item: "bottoms",
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
