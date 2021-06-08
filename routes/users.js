const express = require('express');
const routes = express.Router();;
const controller = require('../controllers/users');

routes.post('/save-user', controller.save);
routes.post('/auth', controller.auth);
routes.get('/get-user', controller.select);
routes.post('/update-user', controller.update);
routes.delete('/delete-user/:id', controller.delete);
routes.get('/get-comuns', controller.comuns);
routes.get('/get-appid', controller.appid);


module.exports = routes;