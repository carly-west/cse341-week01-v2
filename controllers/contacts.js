const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

const getAllContacts = async (req, res, next) => {
  const result = await mongodb.getDb().db().collection("contacts").find();
  result.toArray().then((lists) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(lists);
  });
};

// const getSingleContact = async (req, res, next) => {
//   const requestedUserId =
//   const result = await mongodb.getDb().db().collection("contacts").find();
//   result.toArray().then((lists) => {
//     res.setHeader("Content-Type", "application/json");
//     res.status(200).json(lists);
//   });
// };

// console.log(client);

// console.log(getMongoData.);

module.exports = { getAllContacts };
