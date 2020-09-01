const mongoose = require('mongoose');

const CostumerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    uf: {
        type: String,
        required: true
    }
});

mongoose.model('Costumer', CostumerSchema);