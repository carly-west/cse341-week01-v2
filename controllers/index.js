const mongodb = require("../db/connect");
const client = require("mongodb").ObjectId;

const getAllContacts = async (req, res, next) => {
  const result = await mongodb.getDb().db("sample_data").collection("contacts").find();
  result.toArray().then((lists) => {
    res.status(200).json(lists);
  });
};

const getSingleContacts = async (req, res, next) => {
  const userId = new client(req.params.id);
  const result = await mongodb.getDb().db("sample_data").collection("contacts").find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(lists);
  });
};

module.exports = { getAllContacts, getSingleContacts };
