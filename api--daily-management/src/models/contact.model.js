const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
    {
        id: { type: String },
        name: { type: String, required: true },
        title: { type: String, required: true },
        lastName: { type: String, required: true },
        description: { type: String, required: true },
        profilePhoto: { type: String },
        telephones: { type: [String], required: true }
    }
)

const contacts = mongoose.model('contacts', contactSchema)

module.exports = contacts;