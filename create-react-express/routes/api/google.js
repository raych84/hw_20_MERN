const router = require("express").Router();
const googleController = require("../../contollers/googleController");

router
.route("/")
.get(googleController.findAll);

module.exports = router;