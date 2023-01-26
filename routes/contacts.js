const express = require('express');
const router = express.Router();

const contactsController = require('../controllers');

router.get('/', contactsController.getAllContacts);

router.get('/:id', contactsController.getSingleContacts);

router.post('/', contactsController.createNewContact);

router.put('/:id', contactsController.updateContact);

router.delete('/:id', contactsController.deleteContact);

module.exports = router;
