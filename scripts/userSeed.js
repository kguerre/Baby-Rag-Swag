const mongoose = require("mongoose");
let User = require("../models/user");
// let db = mongoose.connect;
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/brsreact", {
  useMongoClient: true
}).then(function(){
    console.log("connected");
});


const userSeed = [
  {
    _id: "1",
    name: "test",
    email: "test@gmail.com",
    password: "password",
    cart: []
  }
];

// console.log(User);
User
  .remove({})
  .then(() => User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.insertedIds.length + " products inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
