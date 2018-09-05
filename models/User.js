const mongoose = require('mongoose');

var schema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String
});

var User = mongoose.model('User', schema);

module.exports = User;