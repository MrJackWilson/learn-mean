const express = require('express');
const User = require('../models/User');

const router = express.Router();

router.get('/users', (req, res) => {
    User.find((err, users) => {
        res.json(users);
    });
});

router.get('/user/:id', (req, res) => {
    User.findOne({ _id: req.params.id }, (err, user) => {
        res.json(user);
    });
});

module.exports = router;