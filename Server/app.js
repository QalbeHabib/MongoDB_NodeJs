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
const dataModel = new mongoos.model("MultipleData", schamaData);

// ---------------------------------------- 1. single document passing ----------------------------------------------------------

// passing Single Document to the mongoDB Atlas database in specified collection/modal name as above, "hassan"
// const CollectionFunction1 = async () => {
//   try {
//     const dataCollection = new dataModel({
//       name: "Hassan",
//       age: 15,
//       height: 5.6,
//       favoriteFood: "pasta  ",
//       rule: "no rule",
//       status: "active",
//     });
//     // saving the Document to the mongoDB Atlas database in specified collection/modal name as above, "hassan"
//     const result = await dataCollection.save();
//     // console.log(result);
//   } catch (err) {
//     console.log("error in CollectionFunction", err);
//   }
// };

// // calling the CollectionFunction
// CollectionFunction1();

// --------------------------------------------  2.  Multiple documents passing -----------------------------------------------------------

// passing Multiple Document to the MongoDB Atlas database in specified collection/modal name as above, "hassan"
// const CollectionFunction2 = async () => {
//   try {
//     const HassanCollection = new dataModel({
//       name: "Hassan",
//       age: 15,
//       height: 5.6,
//       favoriteFood: "pasta  ",
//       rule: "no rule",
//       status: "active",
//     });
//     const AliCollection = new dataModel({
//       name: "Ali Hassan",
//       age: 18,
//       height: 5.6,
//       favoriteFood: "pineapple  ",
//       rule: "Enginner",
//       status: "active",
//     });
//     const HabibCollection = new dataModel({
//       name: "Habib",
//       age: 22,
//       height: 5.7,
//       favoriteFood: "Shwarma",
//       rule: "Developer",
//       status: "Single",
//     });
//     const AmirCollection = new dataModel({
//       name: "Amir Ali",
//       age: 33,
//       height: 6,
//       favoriteFood: "pottage",
//       rule: "no rule",
//       status: "non-active",
//     });
//     const MudassarCollection = new dataModel({
//       name: "Mudassar",
//       age: 23,
//       height: 5.5,
//       favoriteFood: "rice  ",
//       rule: "no rule",
//       status: "Married",
//     });
//     // saving the Document to the mongoDB Atlas database in specified collection/modal name as above, "hassan"
//     const result = await dataModel.insertMany([
//       HassanCollection,
//       AliCollection,
//       HabibCollection,
//       AmirCollection,
//       MudassarCollection,
//     ]);
//     // console.log(result);
//   } catch (err) {
//     console.log("error in CollectionFunction", err);
//   }
// };

// // calling the CollectionFunction
// CollectionFunction2();

// -------------------------------- Reading / Querying The Documents-----------------------------------------------------------

// const getDocument = async () => {
//   try {
//     const result = await dataModel.find().select({ name: 1 }).limit(3);
//     // select() for selecting the fields of the document
//     // limit() for limiting the number of documents to be returned
//     // without select() and limit() the whole document will be returned
//     console.log(result);
//   } catch (err) {
//     console.log("error in getDocument", err);
//   }
// };
// getDocument();

// --------------------------------- query document by comparing value ------------------------------------------------
// Compersion Query Operator in MongoDB Atlas

// $eq =  Matches values that are equal to a specified value.
// $gt =  Matches values that are greater than a specified value.
// $gte = Matches values that are greater than or equal to a specified value.
// $in = Matches any of the values specified in an array.
// $lt = Matches values that are less than a specified value.
// $lte = Matches values that are less than or equal to a specified value.
// $ne = Matches all values that are not equal to a specified value.
// $nin = Matches none of the values specified in an array.

// const getCompersionDocument = async () => {
//   try {
//     const result = await dataModel
//       // .find({ age: { $gt: 20 } })
//       // .find({ age: { $eq: 23 } })
//       // .find({ age: { $gte: 23 } })
//       .find({ age: { $lte: 23 } })
//       .select({ age: 1, name: 1 });
//     console.log(result);
//   } catch (err) {
//     console.log("error in getDocument", err);
//   }
// };
// getCompersionDocument();

// --------------------------------- query document by comparing value End s------------------------------------------------

// --------------------------- query document by Logical Query Operators Start ---------------------------------------------------

// $and = Joins query clauses with a logical AND returns all documents that match the conditions of both clauses.
// $not = Inverts the effect of a query expression and returns documents that do not match the query expression.
// $nor = Joins query clauses with a logical NOR returns all documents that fail to match both clauses.
// $or = Joins query clauses with a logical OR returns all documents that match the conditions of either clause.

const getLigicalyDocument = async () => {
  try {
    const result = await dataModel
      // .find({ $and: [{ age: 22 }, { height: "5.6" }] })
      .find({ age: { $not: { $eq: 22 } } })
      .select({ age: 1, name: 1 })
      .count();
    console.log(result);
  } catch (err) {
    console.log("error in getDocument", err);
  }
};
getLigicalyDocument();

// --------------------------- query document by Logical Query Operators End ---------------------------------------------------
