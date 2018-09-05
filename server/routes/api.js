const express = require('express');
const User = require('../../models/User');

const router = express.Router();

router.get('/users', (req, res) => {
    User.find((err, users) => {
        res.json(users);
    });
});

router.get('/users/:id', (req, res) => {
    User.findOne({ _id: req.params.id }, (err, user) => {
        res.json(user);
    });
});

router.post('/users', (req, res) => {
    if (!req.body ||
        !req.body.firstName ||
        !req.body.lastName ||
        !req.body.email ||
        !req.body.password) {
        res.statusCode = 400;
        res.end();
        return;
    }

    var newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    });

    newUser.save((err) => {
        if (err) {
            console.error(err);
            res.send({ error: err });
        }
    });

    res.statusCode = 200;
    res.end();
});

module.exports = router;