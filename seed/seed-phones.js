const shopData = require("../shop-data");
const Shop = require("../models/Shop");

const MongoClient = require("mongodb");
const config = require("config");
const url = config.get("mongoURI");

const { phoneNames, phoneImageUrls, phonePrices } = shopData;

for (var i = 0; i < shopData.phoneNames.length; ++i) {
  let shop = new Shop({
    Department: "Phone",
    title: phoneNames[i],
    imageURL: phoneImageUrls[i],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quia, non repellat vel praesentium itaque omnis animi earum quam perspiciatis minima ipsum et quibusdam asperiores nostrum labore autem! Explicabo, in.",
    price: phonePrices[i]
  });
  console.log(shop);
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    const dbo = db.db("Puzzles");
    dbo.collection("shop").insertOne(shop, function(err, res) {
      if (err) throw err;
      console.log(`${i} of documents inserted into users collection`);
      db.close();
    });
  });
}
