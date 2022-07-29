const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema(
    {
        id: { type: String },
        name: { type: String, required: true },
        description: { type: String, required: true },
        type: { type: String, required: true },
        status: { type: Number, required: true }
    }
)

const todos = mongoose.model('todos', todoSchema)

module.exports = todos;