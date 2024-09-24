const express = require("express");
const route = express.Router();

const formController = require("../controllers/form");
route.post("/addform", formController.create);

module.exports = route;
