import axios from "axios";

import config from "./config";
import parcelService from "./parcel";
import weatherService from "./weather";

const addWeatherData = async incident => {
  console.warn("ZZZZ incidentFetcher.js", "incident", incident);
  // TODO: Don't add weather data until it is needed, when clicking map marker
  const weather = await weatherService.get({
    latitude: incident.address.latitude,
    longitude: incident.address.longitude,
    timestamp: incident.description.event_opened,
  });

  console.warn("ZZZZ incidentFetcher.js with weather data", {
    ...incident,
    weather,
  });

  return {
    ...incident,
    weather,
  };
};

// TODO - make less redundant fetchers
// TODO - run in parallel with weather data
const addParcelData = async incident => {
  console.warn("ZZZZ incidentFetcher.js parsel", "incident", incident);
  const parcel = await parcelService.get(
    incident.address.latitude,
    incident.address.longitude,
  );

  console.warn("ZZZZ incidentFetcher.js", "incident", incident);
  console.warn("ZZZZ incidentFetcher.js", "parcel", parcel);

  return {
    ...incident,
    parcel,
  };
};

class IncidentFetcher {
  async get() {
    const apiRoot = `http://${config.get("api.uri")}:${config.get("api.port")}`;
    const uri = `${apiRoot}/incidents`;

    // TODO: error handling
    // TODO: don't get parcel or weather data until click on marker on map.
    const response = await axios.get(uri);
    let data = response.data;
    data = await Promise.all(data.map(addWeatherData));
    data = await Promise.all(data.map(addParcelData));
    return data;
  }
}

export default new IncidentFetcher();
