const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect(
    "mongodb+srv://deploy:gianlucas88@cluster0.qyhgi.mongodb.net/<dbname>?retryWrites=true&w=majority",
    { useUnifiedTopology: true }
);
require('./src/models/Costumer')

app.use('/', require('./src/routes'));

app.listen(process.env.PORT || 3001);