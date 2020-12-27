const faker = require("faker");
const User = require("../../models/User");
const gravatar = require("gravatar");

const MongoClient = require("mongodb");
const config = require("config");
const url = config.get("mongoURI");

let users = [];
let counter = 0;

while (counter < 50) {
  let email = faker.internet.email();
  let avatar = gravatar.url(email, { s: "200", r: "pg", d: "mm" });

  user = new User({
    name: faker.name.firstName() + " " + faker.name.lastName(),
    email,
    avatar,
    password: faker.internet.password()
  });

  users.push(user);
  ++counter;
}

console.log(users);

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  const dbo = db.db("Puzzles");
  dbo.collection("users").insertMany(users, function(err, res) {
    if (err) throw err;
    console.log(`${counter} of documents inserted into users collection`);
    db.close();
  });
});
