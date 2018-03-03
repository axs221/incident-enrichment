var express = require("express");
var router = express.Router();

var darkSky = require("../services/darkSky");

router.get("/", (req, res, next) => {
  const {latitude, longitude, timestamp} = req.query;

  darkSky.fetchHistorical({latitude, longitude, timestamp}).then(weather => {
    res.send(weather);
  });
});

module.exports = router;
