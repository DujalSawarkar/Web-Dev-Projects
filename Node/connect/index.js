import { MongoClient } from "mongodb";

// Replace the uri string with your connection string.
const uri = "mongodb+srv://admin:dujal123@cluster0.884micm.mongodb.net/";
// const uri = "mongodb://0.0.0.0:27017/";

const client = new MongoClient(uri);
console.log("connected Succesfully");
async function run() {
  try {
    const database = client.db("Viva");
    const movies = database.collection("Question");

    // Query for a movie that has the title 'Back to the Future'
    const query = { title: "DDL" };
    // const movie = await movies.findOne(query);
    // insert
    const result = await movies.insertOne(query);
    console.log(result);

    //read
    // const result = await movies.findOne(query);
    // console.log(result);

    // update
    // const result = await movies.findOneAndUpdate(query, {
    //   $set: { title: "DML" },
    // });
    // console.log("ghe zatu dml`");

    // delete
    // const result = await movies.findOneAndDelete({ title: "DML" });
  } catch (err) {
    console.log(err);
  }
}
run();
