var express = require("express");
var router = express.Router();
var axios = require("axios");

router.get("/", (req, res, next) => {
  const uri =
    "http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Specialty/ESRI_StateCityHighway_USA/MapServer/1/query";
  // TODO: limit fields returned
  const fields = "outFields=*";
  // const geometry = `geometry=${req.query.longitude}%2C${req.query.latitude}`;
  const geometry = `geometry=${req.query.longitude},${req.query.latitude}`;
  const geometrySettings =
    "geometryType=esriGeometryPoint&spatialRel=esriSpatialRelIntersects";
  const returnSettings =
    "returnCountOnly=false&returnIdsOnly=false&returnGeometry=false";
  const uriWithQuery = `${uri}?text&${geometry}&${geometrySettings}&${returnSettings}&${fields}&f=json`;

  console.warn("ZZZZ parcel.js", "uriWithQuery", uriWithQuery);

  axios.get(uriWithQuery).then(parcel => {
    res.send(parcel.data);
  });
});

module.exports = router;
