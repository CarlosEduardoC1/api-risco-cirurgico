const express = require('express');
const routes = express.Router();;
const controller = require('../controllers/sendmail');

routes.post('/send', controller.envia);


module.exports = routes;