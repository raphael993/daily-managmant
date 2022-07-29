const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://raphael:13050311@cluster0.y9ptd.mongodb.net/daily--management');

const db = mongoose.connection;

module.exports = db;