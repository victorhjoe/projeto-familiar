const express = require('express');
const routes = express.Router();
const FamiliarController = require('./src/controllers/FamiliarController');
const familiarController = new FamiliarController();

routes.get("/familiar", familiarController.obterTodos);
routes.get("/familiar/:id", familiarController.obterPorId);
routes.post("/familiar", familiarController.adicionar);
routes.put("/familiar/:id", familiarController.atualizar);
routes.delete("/familiar/:id", familiarController.deletar);

module.exports = routes;