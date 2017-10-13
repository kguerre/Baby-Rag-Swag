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
    image: "/assets/images/bugstee.jpg",
    title: "BRS Buggy Tee",
    description: "We don't sell clothes. This is a lifestyle. Dress your baby in cool, quality clothing. Made with 100% Cotton. Sizes available: XS, SM, M, L",
    quantity: 50,
    price: 24
  },
  {
    product_id: 2,
    item: "tops",
    image: "/assets/images/graphictee.jpg",
    title: "BRS Graphic Tee",
    description: "We don't sell clothes. This is a lifestyle. Dress your baby in cool, quality clothing. Made with 100% Cotton. Sizes available: XS, SM, M, L",
    quantity: 50,
    price: 20
  },
  {
    product_id: 3,
    item: "tops",
    image: "/assets/images/patternedtee.jpg",
    title: "BRS Patterned Tee",
    description: "We don't sell clothes. This is a lifestyle. Dress your baby in cool, quality clothing. Made with 100% Cotton. Sizes available: XS, SM, M, L",
    quantity: 50,
    price: 20
  },
  {
    product_id: 4,
    item: "tops",
    image: "/assets/images/penguinonesie.jpg",
    title: "BRS Penguin Onesie",
    description: "We don't sell clothes. This is a lifestyle. Dress your baby in cool, quality clothing. Made with 100% Cotton. Sizes available: XS, SM, M, L",
    quantity: 50,
    price: 30
  },
  {
    product_id: 5,
    item: "tops",
    image: "/assets/images/redtee.jpg",
    title: "BRS Basic Red Tee",
    description: "We don't sell clothes. This is a lifestyle. Dress your baby in cool, quality clothing. Made with 100% Cotton. Sizes available: XS, SM, M, L",
    quantity: 50,
    price: 25
  },
  {
    product_id: 6,
    item: "tops",
    image: "/assets/images/stripedtank.jpg",
    title: "BRS Striped Tank",
    description: "We don't sell clothes. This is a lifestyle. Dress your baby in cool, quality clothing. Made with 100% Cotton. Sizes available: XS, SM, M, L",
    quantity: 20,
    price: 45
  },
  {
    product_id: 7,
    item: "bottoms",
    image: "/assets/images/bluepants.jpg",
    title: "Basic BRS Baby Blues",
    description: "We don't sell clothes. This is a lifestyle. Dress your baby in cool, quality clothing. Made with 100% Cotton. Sizes available: XS, SM, M, L",
    quantity: 60,
    price: 30
  },
  {
    product_id: 8,
    item: "bottoms",
    image: "/assets/images/blueshorts.jpg",
    title: "BRS Baby Shorts",
    description: "We don't sell clothes. This is a lifestyle. Dress your baby in cool, quality clothing. Made with 100% Cotton. Sizes available: XS, SM, M, L",
    quantity: 55,
    price: 30
  },
  {
    product_id: 9,
    item: "bottoms",
    image: "/assets/images/graypants.jpg",
    title: "BRS Gray Pants",
    description: "We don't sell clothes. This is a lifestyle. Dress your baby in cool, quality clothing. Made with 100% Cotton. Sizes available: XS, SM, M, L",
    quantity: 55,
    price: 30
  },
  {
    product_id: 10,
    item: "bottoms",
    image: "/assets/images/truckpants.jpg",
    title: "BRS Baby Sweats",
    description: "We don't sell clothes. This is a lifestyle. Dress your baby in cool, quality clothing. Made with 100% Cotton. Sizes available: XS, SM, M, L",
    quantity: 55,
    price: 30
  },
  {
    product_id: 11,
    item: "bottoms",
    image: "/assets/images/jeanshorts.jpg",
    title: "BRS Jean Shorts",
    description: "We don't sell clothes. This is a lifestyle. Dress your baby in cool, quality clothing. Made with 100% Cotton. Sizes available: XS, SM, M, L",
    quantity: 55,
    price: 20
  },
  {
    product_id: 12,
    item: "bottoms",
    image: "/assets/images/stripedpants.jpg",
    title: "Striped BSR Pants",
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
