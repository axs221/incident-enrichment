var express = require("express");
var router = express.Router();
var axios = require("axios");

router.get("/", (req, res, next) => {
  console.warn("ZZZZ parcel.js", "PARSEL FETCH");
  axios
    .get(
      "http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Specialty/ESRI_StateCityHighway_USA/MapServer/1/query?where=STATE_NAME='Florida'&f=json",
    )
    .then(parcel => {
      console.warn("ZZZZ parcel.js", "parcel", parcel);
      res.send(parcel.data);
    });
});

module.exports = router;
