const get = require("lodash/get");

const configFile = require("../config/config.json");

class config {
  get(key) {
    return get(configFile, key);
  }
}

module.exports = config;
