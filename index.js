const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect(
    process.env.MONGO_URL || 'mongodb://localhost:27017/crud',
    { useUnifiedTopology: true }
);
require('./src/models/Costumer')

app.use('/', require('./src/routes'));

app.listen(process.env.PORT || 3001);