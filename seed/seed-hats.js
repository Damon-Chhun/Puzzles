const shopData = require("../shop-data");
const Shop = require("../models/Shop");

const MongoClient = require("mongodb");
const config = require("config");
const url = config.get("mongoURI");

const hats = [];

const { hatNames, hatImageUrls, hatPrices } = shopData;

for (var i = 0; i < shopData.hatNames.length; ++i) {
  let hat = {
    title: hatNames[i],
    imageURL: hatImageUrls[i],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quia, non repellat vel praesentium itaque omnis animi earum quam perspiciatis minima ipsum et quibusdam asperiores nostrum labore autem! Explicabo, in.",
    price: hatPrices[i]
  };
  hats.push(hat);
}

console.log(hats);

shop = new Shop({
  Department: "hat",
  product: hats
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
