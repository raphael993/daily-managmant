const express = require('express');

const app = express();

app.use(express.json());

const todos = [
    { id: 1, name: 'drink water', description: 'we have to drink water everyday!', type: 'health', status: 0 },
    { id: 2, name: 'feed the dog', description: 'we have to feed the dog everyday!', type: 'health', status: 1 }
];

const contacts = [
    { id: 1, name: 'Raphael', title: 'Mr', lastName: 'Rosa', description: 'good friend', telephones: ['11983018792'], profilePhoto: '' }
]

/* todos resources */

app.get('/', (req, res) => {
     res.json({ active: true });
});

app.get('/todos', (req, res) => {
    res.json(todos);
});

app.get('/todos/:id', (req, res) => {
    const { id } = req.params;
    const index = findTodos(id);
     
    res.json(todos[index]);
});


/* contacts resources */
app.get('/contacts', (req, res) => {
    res.json(contacts);
});

app.get('/contacts/:id', (req, res) => {
    const { id } = req.params;
    const index = findContacts(id);
     
    res.json(contacts[index]);
});

function findTodos(id) {
    return todos.findIndex(todo => todo.id === Number(id));
}

function findContacts(id) {
    return contacts.findIndex(contacts => contacts.id === Number(id));
}

module.exports = app;