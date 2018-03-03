import get from "lodash/get";

import configFile from "../config/config.json";

class config {
  get(key) {
    return get(configFile, key);
  }
}

export default config;
