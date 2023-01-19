const express = require('express');
const router = express.Router();

const contactsController = require('../controllers');

router.get('/', contactsController.getAllContacts);

router.get('/:id', contactsController.getSingleContacts);

router.post('/new/contact', contactsController.createNewContact);

router.put('/update/:id', contactsController.updateContact);

router.delete('/delete/:id', contactsController.deleteContact);

module.exports = router;
