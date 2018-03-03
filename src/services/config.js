import get from "lodash/get";

import configFile from "../config.json";

class config {
  incidents = [];

  get(key) {
    return get(configFile, key);
  }
}

export default config;
