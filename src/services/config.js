import get from "lodash/get";

import configFile from "../config/config.json";

class Config {
  get(key) {
    return get(configFile, key);
  }
}

export default new Config();
