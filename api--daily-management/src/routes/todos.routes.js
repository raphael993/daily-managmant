const express = require('express');
const TodoController = require('../controllers/todo.controller.js');
const router = express.Router();

router
    .get('/', TodoController.getTodos)
    .get('/:_id', TodoController.getTodoPerId)
    .post('/', TodoController.addTodo)
    .put('/:_id', TodoController.updateTodo)
    .delete('/:_id', TodoController.deleteTodo)

module.exports = router;