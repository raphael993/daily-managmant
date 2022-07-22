const express = require('express');
const router = express.Router();

const todos = [
    { id: 1, name: 'drink water', description: 'we have to drink water everyday!', type: 'health', status: 0 },
    { id: 2, name: 'feed the dog', description: 'we have to feed the dog everyday!', type: 'health', status: 1 }
];

router.get('/', (req, res) => {
    res.json(todos);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const index = findTodo(id);
     
    res.json(todos[index]);
});

router.post('/', (req, res) => {
    const { body } = req;
    todos.push(body);

    res.send('todo added!');
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { body } = req;

    const index = findTodo(id);
    todos[index] = {...todos[index], ...body}
     
    res.json(todos[index]);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const index = findTodo(id);

    todos.splice(index, 1);

    res.send('todo deleted!');
});

function findTodo(id) {
    return todos.findIndex(todo => todo.id === Number(id));
}

module.exports = router;