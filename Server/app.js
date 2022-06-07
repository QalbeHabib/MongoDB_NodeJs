const mongoos = require("mongoose");

mongoos
  .connect(
    "mongodb+srv://root:root@cluster0.lmm3q.mongodb.net/testing?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connection successful to mongoDB");
  })
  .catch((err) => {
    console.log("error in connection to mongoDB", err);
  });

//   createing a schema
const newData = new mongoos.Schema({
  name: String,
  age: Number,
  height: Number,
  favoriteFood: String,
  rule: String,
  status: Boolean,
});
// Schema End

// creating a model / Collection

const newDataModel = mongoos.model("habibs", newData);

// creating a document

const dataDocumentFunction = async () => {
  try {
    const newDataDocument = new newDataModel({
      name: "Muhammad jabbar",
      age: 40,
      height: 6.0,
      favoriteFood: "rice",
      rule: ".net Developer",
      status: true,
    });

    const result = await newDataDocument.save();

    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

dataDocumentFunction();
