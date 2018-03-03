const dataFile1 = require("../mock_data/F01705150050.json");
const dataFile2 = require("../mock_data/F01705150090.json");

class IncidentFetcher {
  fetch() {
    const incidents = [];

    incidents.push(dataFile1);
    incidents.push(dataFile2);

    return Promise.resolve(incidents);
  }
}

module.exports = new IncidentFetcher();
