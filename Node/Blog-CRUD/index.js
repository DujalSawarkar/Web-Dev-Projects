const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT;

//to send json body or middelware
app.use(express.json());

const blog = require("./routes/blog.js");
app.use("./api/v1", blog);

const Connectwithdb = require("./Config/database");
Connectwithdb();

app.listen(PORT, () => {
  console.log("server started");
});

app.get("/", (req, res) => {
  res.send("home");
});
