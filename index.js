const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

app.use(express.json());
app.use(cors());

mongoose.connect(
    process.env.MONGO_URL || 'mongodb://localhost:27017/crud',
    { useUnifiedTopology: true }
);
require('./src/models/Costumer')

app.use('/', require('./src/routes'));

app.listen(process.env.PORT || 3001);