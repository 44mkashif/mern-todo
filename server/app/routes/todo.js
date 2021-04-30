const Router = require("express").Router();
const TodoController = require("./../controllers").Todo;
const { methodNotAllowed } = require("./../functions/requests");

Router.get("/", TodoController.list);
Router.get("/:id", TodoController.retrieve);
Router.post("/", TodoController.create);
Router.delete("/:id", TodoController.destroy);

Router.all('/', methodNotAllowed);
Router.all('/:id', methodNotAllowed);

module.exports = Router;