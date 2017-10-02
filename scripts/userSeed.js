const mongoose = require("mongoose");
let db = require("../models/User");
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/brsreact", {
  useMongoClient: true
});

const userSeed = [
  {
    name: "test",
    email: "test@gmail.com",
    password: "password",
    cart: []
  },
   {
    name: "test2",
    email: "test2@gmail.com",
    password: "abc123",
    cart: []
  },
   {
    name: "test3",
    email: "test3@gmail.com",
    password: "123456",
    cart: []
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.insertedIds.length + " products inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
