const faker = require("faker");
const User = require("../../models/User");
const gravatar = require("gravatar");
const MongoClient = require("mongodb");
const config = require("config");
const url = config.get("mongoURI");

const email = faker.internet.email();
const avatar = gravatar.url(email, { s: "200", r: "pg", d: "mm" });

user = new User({
  name: faker.name.firstName() + " " + faker.name.lastName(),
  email,
  avatar,
  password: faker.internet.password()
});

console.log("HELLLOOOOO!!!!");
console.log(user);

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  const dbo = db.db("Puzzles");
  dbo.collection("users").insertOne(user, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
