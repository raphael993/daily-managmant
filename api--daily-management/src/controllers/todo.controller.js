const todos = require('../models/todo.model.js')

class TodoController {

    static getTodos = async (req, res) => {
        try {
            await todos.find((err, result) => {
                res.status(200).json(result);
            })
        } catch(err) {}
    }

    static getTodoPerId = async (req, res) => {

        const { _id } = req.params;

        try {
            await todos.find({ _id }, (err, result) => {
                res.status(200).json(result);
            })
        } catch(err) {
            res.status(500);
        }
    }

    static addTodo = async (req, res) => {

        const todo = req.body;

        try {
            await todos.insertMany([todo], (err, result) => res.status(201).send('todo added!'))
        } catch(err) {
            res.status(500);
        }
    }

    static updateTodo = async (req, res) => {

        const { _id } = req.params;
        const todo = req.body;

        try {
            await todos.updateOne({ _id }, { $set: todo }, (err, result) => {
                res.status(200).json(result);
            })
        } catch(err) {
            res.status(500);
        }
    }

    static deleteTodo = async (req, res) => {
        const { _id } = req.params

        try {
            await todos.deleteOne({ _id }, (err, result) => res.status(200).send('todo deleted'))
        } catch(err) {
            res.status(500);
        }
    }
}

module.exports = TodoController;