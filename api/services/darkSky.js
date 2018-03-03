const googleMaps = require("@google/maps");
const DarkSkyApi = require("forecast.io");

const Config = require("./config");

class DarkSky {
  fetch() {
    const config = new Config();

    const darkSkySecretAccessKey = this.config.get("darkSkySecretAccessKey");
    const googleMapsSecretAccessKey = this.config.get(
      "googleMapsSecretAccessKey",
    );

    const googleMapsClient = googleMaps.createClient({
      key: googleMapsSecretAccessKey,
    });

    const geocode = function(address, cb) {
      const query = {
        address,
      };

      googleMapsClient.geocode(query, cb);
    };

    const darksky = new DarkSkyApi({
      APIKey: darkSkySecretAccessKey,
    });

    geocode(event.queryStringParameters.address, function(err, response) {
      const results =
        response.json.results &&
        response.json.results.length > 0 &&
        response.json.results[0];

      if (!results || !results.geometry) {
        const response = {
          statusCode: 200,
          body: JSON.stringify({}),
        };
        callback(null, response);
      }
      const latitude = results.geometry.location.lat;
      const longitude = results.geometry.location.lng;
      const options = {
        exclude: "minutely,flags,alerts",
        extend: "hourly",
      };

      darksky.get(latitude, longitude, options, function(err, res, data) {
        callback(null, {
          statusCode: 200,
          headers: {
            "Access-Control-Allow-Origin": "*", // Required for CORS support to work
            "Access-Control-Allow-Credentials": true, // Required for cookies, authorization headers with HTTPS
          },
          body: JSON.stringify(data),
        });
      });
    });
  }
}

module.exports = new DarkSky();
