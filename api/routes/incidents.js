var express = require("express");
var router = express.Router();

var incidentService = require("../services/incidents");

router.get("/", (req, res, next) => {
  incidentService.fetch().then(incidents => {
    res.send(incidents);
  });
});

module.exports = router;
