const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

var schema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String
});

schema.pre('save', function (next) {
    var user = this;

    if (!user.isModified('password')) return next();

    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            console.error(err);
            next(err);
        }

        bcrypt.hash(user.password, salt, (err, encrypted) => {
            user.password = encrypted;
            next();
        });
    });
});

var User = mongoose.model('User', schema);

module.exports = User;