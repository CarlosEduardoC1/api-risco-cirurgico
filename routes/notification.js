const express = require('express');
const routes = express.Router();;
const controller = require('../controllers/notification');

routes.post('/send', function (req, res) {
    let retorno = controller.sendNotification(req.body);
    // console.log(retorno);
    res.status(200).json({msg: retorno});
});


module.exports = routes;