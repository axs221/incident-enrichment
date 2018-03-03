import axios from "axios";

import config from "./config";

class Parcel {
  async get(latitude, longitude) {
    console.warn("ZZZZ parcel.js", "GETTING PARCEL");
    const apiRoot = `http://${config.get("api.uri")}:${config.get("api.port")}`;
    const uri = `${apiRoot}/parcel`;

    // TODO: error handling
    const response = await axios.get(uri, {params: {latitude, longitude}});
    console.warn("ZZZZ parcel.js", "response", response.data);
    return response.data;
  }
}

export default new Parcel();
