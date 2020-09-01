const mongoose = require('mongoose');

const Costumer = mongoose.model('Costumer');

module.exports = {
    async index(req, res) {
        const costumers = await Costumer.find();

        return res.json(costumers);
    },

    async create(req, res) {
        const costumer = await Costumer.create(req.body);

        return res.json(costumer);
    },

    async delete(req, res) {
        await Costumer.findByIdAndRemove(req.params.id);

        return res.send();
    }
};