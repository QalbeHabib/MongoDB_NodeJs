require("dotenv").config();

const { MongoClient } = require("mongodb");
// For environment variables, see:
// For environment variables, see:

// database connection function

async function main() {
  const uri = process.env.MONGODB_CLIENT_ID;

  const client = new MongoClient(uri);

  try {
    await client.connect();

    //  ----------------------- database Lists  Start ----------------------------------

    // Calling listDatabases on the client returns a list of all the available databases. Start
    // await listDatabases(client);
    // Calling listDatabases on the client returns a list of all the available databases. End
    // ////////////////////////////////////////////////////////////////////////////////

    // ----------------------------------------------------------------------------------
    // Calling single createDocument function , start
    // await createSingleListening(client, {
    //   name: "ALI",
    //   age: 18,
    //   height: 5.6,
    //   favoriteFood: "Burger",
    //   rule: "no rule",
    //   status: "active",
    // });
    // Calling single createDocument function , End
    // ----------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------
    // Calling Multiple createDocument function , start
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
    // Calling single create document function , End
    // ----------------------------------------------------------------------------------
  } catch (e) {
    console.log(e);
  }
}

// call main function Start
main().catch((e) => console.error(e));
// calling main function End

//  ----------------------- DataBase Lists.  Start ----------------------------------

// DataBaseList Function started

// async function listDatabases(client) {
//   const databasesList = await client.db().admin().listDatabases();

//   console.log("Databases:");

//   databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
// }
// DataBaseList Function End

//  ----------------------- DataBaseList Function. End ----------------------------------

//  ----------------------- Creating document To The mongoDB Collection. Start ----------------------------------

// Creating single Document into MongoDB, Start

// async function createSingleListening(client, newListening) {
//   // first we need to get the collection from the database
//   const result = await client
//     .db("testing")
//     .collection("habib")
//     .insertOne(newListening);
//   console.log("new listen is created with the new id :", result.insertedId);
// }

// Creating single Document into MongoDB, End

// Creating Multiple Document into MongoDB, Start
// async function createMultipleListening(client, newListenings) {
//   const result = await client
//     .db("testing")
//     .collection("habib")
//     .insertMany(newListenings);

//   console.log("new listen is created with the following id :");
//   console.log(result.insertedIds);
// }
// Creating Multiple Document into MongoDB, End

//  ----------------------- Creating Document To the MongoDB Collection End ----------------------------------
