const express = require('express');
const ContactController = require('../controllers/contact.controller.js');
const router = express.Router();

router
    .get('/', ContactController.getContacts)
    .get('/:_id', ContactController.getContactPerId)
    .post('/', ContactController.addContact)
    .put('/:_id', ContactController.updateContact)
    .delete('/:_id', ContactController.deleteContact)

module.exports = router;