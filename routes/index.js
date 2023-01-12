const routes = require("express").Router();

const myController = require("../controllers");

routes.get("/mongoData", myController.getMongoData);

module.exports = routes;
