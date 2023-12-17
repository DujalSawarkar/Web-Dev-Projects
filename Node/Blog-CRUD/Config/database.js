const mongoose = require("mongoose");

require("dotenv").config();

const Connectwithdb = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    })
    .then(console.log("connected"))
    .catch((error) => {
      console.log("error in db connection");
      console.log(error);
      process.exit(1);
    });
};

module.exports = Connectwithdb;
