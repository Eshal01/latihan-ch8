const routes = require('express').Router();
const { Player } = require("../../models");

const WebController = require("../../controllers/web.controller");

routes.get('/', WebController.index)

routes.get('/create', WebController.create)

routes.delete('/:id', WebController.delete)

routes.get('/edit/:id', WebController.updatePlayer)

routes.get('/detail/:id', WebController.show)



module.exports = routes;
