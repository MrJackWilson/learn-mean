const express = require('express');
const mongoose = require('mongoose');
const apiRouter = require('./routes/api');

const mongoUri = 'mongodb+srv://jack-wilson:Sophie08@main-cluster-ymiht.mongodb.net/test?retryWrites=true';

mongoose.connect(mongoUri, { useNewUrlParser: true });

mongoose.connection.on('error', (err) => {
    console.error(err);
    process.exit(0);
});

mongoose.connection.once('open', () => {
    console.log('MongoDB connected');
});

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api/v1', apiRouter);

app.listen(3000, 'localhost', () => {
    console.log('Listening on port 3000...');
});