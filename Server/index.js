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
    // await createSingleListing(client, {
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
    // await createMultipleListing(client, [
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

    // todo: Calling findOneListingByName function , start
    findOneListingByName(client, "Hassan");
    // todo: Calling findOneListingByName function , End
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

// async function createSingleListing(client, newlisting) {
//   const result = await client
//     .db("testing")
//     .collection("habib")
//     .insertOne(newlisting);
//   console.log("new list is created with the new id :", result.insertedId);
// }

//todo: Creating single Document into MongoDB, End

// ! Multiple Collections to MongoDB

//todo: Creating Multiple Document into MongoDB, Start
// async function createMultipleListing(client, newListings) {
//   const result = await client
//     .db("testing")
//     .collection("habib")
//     .insertMany(newListings);

//   console.log("new list is created with the following id :");
//   console.log(result.insertedIds);
// }
//todo: Creating Multiple Document into MongoDB, End

//!  ----------------------- Creating Document To the MongoDB Collection, End ----------------------------------

// ! ------------------------ query Function For Reading the single Listing from  Database's Collection , Start -------------------------------

async function findOneListingByName(client, nameOfListing) {
  const result = await client
    .db("testing")
    .collection("habib")
    .findOne({ name: nameOfListing });

  if (result) {
    console.log(`Listing found with the following name : ${nameOfListing}`);
    console.log(result);
  } else {
    console.log(`No listing found with the following name : ${nameOfListing}`);
  }
  // todo: Note, We can find Listing with any of the field's value like (id, age, height etc). in the collection, in this function we are finding with 'name'.
}
// ! ------------------------ query Function For Reading the single Listing from  Database's Collection , End -------------------------------
