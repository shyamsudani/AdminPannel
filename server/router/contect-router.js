const express = require("express");
const contect_router = express.Router();
const contect = require("../controllers/contect-controler")

contect_router.route("/contect").post(contect);

module.exports = contect_router;

