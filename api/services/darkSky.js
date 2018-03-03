const googleMaps = require("@google/maps");
const DarkSkyApi = require("forecast.io");

const Config = require("./config");

class DarkSky {
  fetch() {
    return new Promise(resolve => {
      const config = new Config();

      const darkSkySecretAccessKey = config.get("darkSkySecretAccessKey");
      const googleMapsSecretAccessKey = config.get("googleMapsSecretAccessKey");

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

      // TODO - actual incident location
      geocode("Westfield, IN", function(err, response) {
        const results =
          response.json.results &&
          response.json.results.length > 0 &&
          response.json.results[0];

        if (!results || !results.geometry) {
          resolve({});
          return;
        }
        const latitude = results.geometry.location.lat;
        const longitude = results.geometry.location.lng;
        const options = {
          exclude: "minutely,flags,alerts",
          extend: "hourly",
        };

        darksky.get(latitude, longitude, options, function(err, res, data) {
          resolve(data);
        });
      });
    });
  }
}

module.exports = new DarkSky();
