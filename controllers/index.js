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

const createNewContact = async (req, res, next) => {
  await mongodb.getDb().db('sample_data').collection('contacts').insertOne({
    firstName: 'Carly',
    LastName: 'West',
    email: 'carly.west99@gmail.com',
    favoriteColor: 'blue',
    birthday: '09-20-1999'
  });

  const result = await mongodb
    .getDb()
    .db('sample_data')
    .collection('contacts')
    .find({ firstName: 'Carly' });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const updateContact = async (req, res, next) => {
  const userId = new client(req.params.id);

  await mongodb
    .getDb()
    .db('sample_data')
    .collection('contacts')
    .updateOne(
      { _id: userId },
      {
        $set: { email: 'carly.correa8@gmail.com', LastName: 'Correa' },
        $currentDate: { lastModified: true }
      }
    );

  res.status(200).send('Status: 200 OK');
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
