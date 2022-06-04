// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");

// const { MongoClient, ServerApiVersion } = require("mongodb");
// const uri =
//   "mongodb+srv://root:root@cluster0.lmm3q.mongodb.net/habib?retryWrites=true&w=majority";
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverApi: ServerApiVersion.v1,
// });
// client.connect((err) => {
//   const collection = client.db("test").collection("devices");
//   var myobj = { name: "Company Inc", address: "Highway 37" };
//   collection.insertOne(myobj, function (err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//   });
//   app.listen(4000, () => {
//     console.log("Welcome to the Nodejs 4000");
//   });
// });

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });
