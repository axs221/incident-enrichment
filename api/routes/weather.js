var express = require("express");
var router = express.Router();

var darkSky = require("../services/darkSky");

router.get("/", (req, res, next) => {
  darkSky.fetch().then(weather => {
    res.send(weather);
  });
});

module.exports = router;
