const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema(
    {
        todoName: { type: String, required: true },
        todoDescription: { type: String, required: true },
        todoDate: { type: String, required: true },
        todoTime: { type: String, required: true },
        todoLocation: { type: String, required: true },
        todoStatus: { type: Number }
    }
)

const todos = mongoose.model('todos', todoSchema)

module.exports = todos;