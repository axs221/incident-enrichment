const googleMaps = require("@google/maps");
const DarkSkyApi = require("forecast.io");

const Config = require("./config");

class DarkSky {
  fetchHistorical({latitude, longitude, timestamp}) {
    const unixTime = Math.round(new Date(timestamp).getTime() / 1000);

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

      const options = {
        exclude: "minutely,hourly,daily,flags,alerts",
      };

      darksky.getAtTime(latitude, longitude, unixTime, options, function(
        err,
        res,
        data,
      ) {
        resolve(data);
      });
    });
  }
}

module.exports = new DarkSky();
