const express = require("express");
const connectDB = require("./config/db");

const app = express();

//Connect DataBase
connectDB();

//Init Middleware
app.use(
  express.json({
    extended: false,
    createIndexes: true
  })
);

app.get("/", (req, res) => res.send("API running"));

//Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/shop", require("./routes/api/shop"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
