var express = require("express");
var router = express.Router();
var axios = require("axios");

router.get("/", (req, res, next) => {
  const uri =
    "http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Specialty/ESRI_StateCityHighway_USA/MapServer/1/query";
  const uriWithQuery = `${uri}?geometry=${req.query.latitude},${
    req.query.longitude
  }&geometryType=esriGeometryPoint&f=json`;

  axios.get(uriWithQuery).then(parcel => {
    res.send(parcel.data);
  });
});

module.exports = router;
