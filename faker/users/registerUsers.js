const faker = require("faker");
const User = require("../../models/User");
const gravatar = require("gravatar");

const MongoClient = require("mongodb");
const config = require("config");
const url = config.get("mongoURI");
const jsonwebtoken = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

let users = [];
let counter = 0;

const seedUsers = async () => {
  while (counter < 10) {
    let email = faker.internet.email();
    let avatar = gravatar.url(email, { s: "200", r: "pg", d: "mm" });

    user = new User({
      name: faker.name.firstName() + " " + faker.name.lastName(),
      email,
      avatar,
      password: faker.internet.password()
    });

    console.log(user.password);

    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(user.password, salt);

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

  const payload = {
    user: {
      id: user.id
    }
  };

  jsonwebtoken.sign(
    payload,
    config.get("jwtSecret"),
    { expiresIn: 3600 },
    (err, token) => {
      if (err) throw err;
      res.json({ token });
    }
  );
};

seedUsers();
