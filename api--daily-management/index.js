const express = require('express');
const app = express();
const todosRoutes = require('./src/routes/todos.routes.js');
const contactsRoutes = require('./src/routes/contacts.routes.js');

require('dotenv').config()

app.use(express.json());
app.use('/todos', todosRoutes);
app.use('/contacts', contactsRoutes);

app.use((req, res, next) => {
    // TODO: jwt auth
    next();
});

app.get('/', (req, res, next) => {
     //res.json({ active: true });
    console.log('function 1');
    next();
}, (req, res, next) => {
    console.log('function 2');
    next();
}, (req, res) => {
    console.log('function 3');
    res.json({ active: true });
});

module.exports = app;