//todo: For better understanding of code please Install "Better Comments" extension into your vscode.😎
require("dotenv").config();

const { MongoClient } = require("mongodb");
const uri = process.env.MONGODB_CLIENT_ID;
const client = new MongoClient(uri);

//! database connection function. Start

async function main() {
  try {
    //todo: Client must be connected to MongoDB before any operations are performed
    await client.connect();

    //!  ----------------------- database Lists,  Start ----------------------------------

    //todo: Calling listDatabases on the client returns a list of all the available databases. Start
    // await listDatabases(client);
    //todo: Calling listDatabases on the client returns a list of all the available databases. End

    // ----------------------------------------------------------------------------------
    //todo: Calling single createDocument function , start
    // await createSingleListening(client, {
    //   name: "ALI",
    //   age: 18,
    //   height: 5.6,
    //   favoriteFood: "Burger",
    //   rule: "no rule",
    //   status: "active",
    // });
    //todo: Calling single createDocument function , End
    // ----------------------------------------------------------------------------------
    //todo: Calling Multiple createDocument function , start
    // await createMultipleListening(client, [
    //   {
    //     name: "Habib",
    //     age: 22,
    //     height: 5.6,
    //     favoriteFood: "pizza",
    //     rule: "no rule",
    //     status: "active",
    //   },
    //   {
    //     name: "Ali",
    //     age: 18,
    //     height: 5.6,
    //     favoriteFood: "Burger",
    //     rule: "no rule",
    //     status: "active",
    //   },
    //   {
    //     name: "Hassan",
    //     age: 15,
    //     height: 5.6,
    //     favoriteFood: "pasta  ",
    //     rule: "no rule",
    //     status: "active",
    //   },
    // ]);
    //todo: Calling single create document function , End
    // ----------------------------------------------------------------------------------
  } catch (e) {
    console.log(e);
  }
}

//! call main function Start
main().catch((e) => console.error(e));
//! calling main function End

//!  ----------------------- All DataBase Lists.  Start ----------------------------------

// async function listDatabases(client) {
//   const databasesList = await client.db().admin().listDatabases();

//   console.log("Databases:");

//   databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
// }

//!  ----------------------- All DataBase List Function. End ----------------------------------

//!  ----------------------- Creating Document To The MongoDB Collection. Start ----------------------------------

//todo: For Creating single Document into MongoDB, Start

// async function createSingleListening(client, newListening) {
//   const result = await client
//     .db("testing")
//     .collection("habib")
//     .insertOne(newListening);
//   console.log("new listen is created with the new id :", result.insertedId);
// }

//todo: Creating single Document into MongoDB, End

// ! Multiple Collections to MongoDB

//todo: Creating Multiple Document into MongoDB, Start
// async function createMultipleListening(client, newListenings) {
//   const result = await client
//     .db("testing")
//     .collection("habib")
//     .insertMany(newListenings);

//   console.log("new listen is created with the following id :");
//   console.log(result.insertedIds);
// }
//todo: Creating Multiple Document into MongoDB, End

//!  ----------------------- Creating Document To the MongoDB Collection End ----------------------------------
