const mongodb = require('../db/connect');
const client = require('mongodb').ObjectId;

const getAllContacts = async (req, res, next) => {
  const result = await mongodb.getDb().db('sample_data').collection('contacts').find();
  result.toArray().then((lists) => {
    res.status(200).json(lists);
  });
};

const getSingleContacts = async (req, res, next) => {
  const userId = new client(req.params.id);
  const result = await mongodb
    .getDb()
    .db('sample_data')
    .collection('contacts')
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const createNewContact = async (req, res) => {
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
  const response = await mongodb
    .getDb()
    .db('sample_data')
    .collection('contacts')
    .insertOne(contact);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'Some error occurred while creating the contact.');
  }
};

const updateContact = async (req, res, next) => {
  const userId = new client(req.params.id);
  // be aware of updateOne if you only want to update specific fields
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
  const response = await mongodb
    .getDb()
    .db('sample_data')
    .collection('contacts')
    .replaceOne({ _id: userId }, contact);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while updating the contact.');
  }
};

const deleteContact = async (req, res, next) => {
  const userId = new client(req.params.id);

  await mongodb.getDb().db('sample_data').collection('contacts').deleteOne({ _id: userId });

  res.status(200).send('Status: 200 OK');
};

module.exports = {
  getAllContacts,
  getSingleContacts,
  createNewContact,
  updateContact,
  deleteContact
};
