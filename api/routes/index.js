// TODO: import
var express = require("express");
var router = express.Router();

var darkSky = require("../services/darkSky");

router.get("/", (req, res, next) => {
  // const results = darkSky.fetch();

  res.send({result: "Hello, world!"});
  // res.send({ response: darkSky.fetch });
});

module.exports = router;
