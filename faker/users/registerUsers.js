const faker = require("faker");
const User = require("../../models/User");
const gravatar = require("gravatar");

const email = faker.internet.email();
const avatar = gravatar.url(email, { s: "200", r: "pg", d: "mm" });

user = new User({
  name: faker.name.firstName() + " " + faker.name.lastName(),
  email,
  avatar,
  password: faker.internet.password()
});

console.log("HELLLOOOOO!!!!");

console.log("HELLLOOOOO!!!!");
