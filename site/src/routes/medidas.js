var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/CSGO/", function (req, res) {
    medidaController.buscarCSGO(req, res);
});
router.get("/VL/", function (req, res) {
    medidaController.buscarVL(req, res);
});
router.get("/RL/", function (req, res) {
    medidaController.buscarRL(req, res);
});
router.get("/APEX/", function (req, res) {
    medidaController.buscarAPEX(req, res);
});
router.get("/LOL/", function (req, res) {
    medidaController.buscarLOL(req, res);
});

module.exports = router;