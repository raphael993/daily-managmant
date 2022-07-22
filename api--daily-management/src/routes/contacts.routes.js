const express = require('express');
const router = express.Router();

const contacts = [
    { id: 1, name: 'Raphael', title: 'Mr', lastName: 'Rosa', description: 'good friend', telephones: ['11983018792'], profilePhoto: '' }
];

router.get('/', (req, res) => {
    res.json(contacts);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const index = findContact(id);
     
    res.json(contacts[index]);
});

router.post('/', (req, res) => {
    const { body } = req;
    contacts.push(body);

    res.send('contact added!');
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { body } = req;

    const index = findContact(id);
    contacts[index] = {...contacts[index], ...body}
     
    res.json(contacts[index]);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const index = findContact(id);

    contacts.splice(index, 1);

    res.send('contact deleted!');
});

function findContact(id) {
    return contacts.findIndex(contacts => contacts.id === Number(id));
}

module.exports = router;