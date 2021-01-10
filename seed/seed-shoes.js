const shopData = require("../shop-data");
const Shop = require("../models/Shop");

const MongoClient = require("mongodb");
const config = require("config");
const url = config.get("mongoURI");

const { shoeNames, shoeImageUrls, shoePrices } = shopData;

for (var i = 0; i < shopData.shoeNames.length; ++i) {
  let shop = new Shop({
    Department: "shoe",
    title: shoeNames[i],
    imageURL: shoeImageUrls[i],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quia, non repellat vel praesentium itaque omnis animi earum quam perspiciatis minima ipsum et quibusdam asperiores nostrum labore autem! Explicabo, in.",
    price: shoePrices[i]
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
