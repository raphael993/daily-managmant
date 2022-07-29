const contacts = require('../models/contact.model.js')

class ContactController {

    static getContacts = async (req, res) => {
        try {
            await contacts.find((err, result) => {
                res.status(200).json(result);
            })
        } catch(err) {}
    }

    static getContactPerId = async (req, res) => {

        const { _id } = req.params;

        try {
            await contacts.find({ _id }, (err, result) => {
                res.status(200).json(result);
            })
        } catch(err) {
            res.status(500);
        }
    }

    static addContact = async (req, res) => {

        const contact = req.body;

        try {
            await contacts.insertMany([contact], (err, result) => res.status(201).send('contact added!'))
        } catch(err) {
            res.status(500);
        }
    }

    static updateContact = async (req, res) => {

        const { _id } = req.params;
        const contact = req.body;

        try {
            await contacts.updateOne({ _id }, { $set: contact }, (err, result) => {
                res.status(200).json(result);
            })
        } catch(err) {
            res.status(500);
        }
    }

    static deleteContact = async (req, res) => {
        const { _id } = req.params

        try {
            await contacts.deleteOne({ _id }, (err, result) => res.status(200).send('contact deleted'))
        } catch(err) {
            res.status(500);
        }
    }
}

module.exports = ContactController;