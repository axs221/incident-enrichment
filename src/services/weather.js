import axios from "axios";

import config from "./config";

class Weather {
  async get({latitude, longitude, timestamp}) {
    const apiRoot = `http://${config.get("api.uri")}:${config.get("api.port")}`;
    const uri = `${apiRoot}/weather`;
    const uriWithQuery = `${uri}?latitude=${latitude}&longitude=${longitude}&timestamp=${timestamp}`;

    // TODO: error handling
    const response = await axios.get(uriWithQuery);
    return response.data;
  }
}

export default new Weather();
