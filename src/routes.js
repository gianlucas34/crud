const express = require('express');
const routes = express.Router();

const CostumerController = require('./controllers/CostumerController');

routes.get('/costumers', CostumerController.index);
routes.post('/costumers', CostumerController.create);
routes.delete('/costumers/:id', CostumerController.delete);

module.exports = routes;