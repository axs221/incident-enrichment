import axios from "axios";

import config from "./config";

class Weather {
  async get() {
    console.warn("ZZZZ weather.js", "GETTING");
    const apiRoot = `http://${config.get("api.uri")}:${config.get("api.port")}`;
    const uri = `${apiRoot}/weather`;

    // TODO: error handling
    const response = await axios.get(uri);
    console.warn("ZZZZ weather.js", "response", response)
    return response.data;
  }
}

export default new Weather();
