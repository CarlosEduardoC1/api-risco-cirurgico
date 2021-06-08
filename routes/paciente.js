const express = require('express');
const routes = express.Router();;
const controller = require('../controllers/paciente');

routes.post('/save-paciente', controller.save);
routes.post('/get-paciente/:id/', controller.select);
routes.post('/get-paciente/:id/:nome', controller.search);
routes.post('/update-paciente', controller.update);
routes.post('/select-adm', controller.selectAdm);
routes.post('/search-adm/:nome', controller.searchAdm);
// routes.delete('/delete-user/:id', controller.delete);


module.exports = routes;