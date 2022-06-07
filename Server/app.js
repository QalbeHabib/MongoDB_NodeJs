const mongoos = require("mongoose");

const uri =
  "mongodb+srv://root:root@cluster0.lmm3q.mongodb.net/testing?retryWrites=true&w=majority";

// connecting mongoos to mongoDB Altas
mongoos
  .connect(uri)
  .then(() => {
    console.log("mongoos connection successfully established");
  })
  .catch((err) => {
    console.log("mongoos connection failed", err);
  });

// Modal Schema for mongoDB Atlas
const schamaData = new mongoos.Schema({
  name: String,
  age: Number,
  height: Number,
  favoriteFood: String,
  rule: String,
  status: String,
});

// Model for mongoDB Atlas with -> mongoos.model("collection Name" , schema)
const dataModel = new mongoos.model("hassan", schamaData);

// passing Document to the mongoDB Atlas database in specified collection name as above, "hassan"
const CollectionFunction = async () => {
  try {
    const dataCollection = new dataModel({
      name: "Hassan",
      age: 15,
      height: 5.6,
      favoriteFood: "pasta  ",
      rule: "no rule",
      status: "active",
    });
    // saving the Document to the mongoDB Atlas database in specified collection name as above, "hassan"
    const result = await dataCollection.save();
    // console.log(result);
  } catch (err) {
    console.log("error in CollectionFunction", err);
  }
};

// calling the CollectionFunction
CollectionFunction();
