import dataFile1 from "../data/F01705150050.json";
import dataFile2 from "../data/F01705150090.json";
import parcelService from "./parcel";
import weatherService from "./weather";

const addWeatherData = async incident => {
  const weather = await weatherService.get();

  console.warn("ZZZZ incidentFetcher.js", "weather", weather);

  return {
    ...incident,
    weather,
  };
};

// TODO - make less redundant fetchers
// TODO - run in parallel with weather data
const addParcelData = async incident => {
  const parcel = await parcelService.get();

  console.warn("ZZZZ incidentFetcher.js", "incident", incident);
  console.warn("ZZZZ incidentFetcher.js", "parcel", parcel);

  return {
    ...incident,
    parcel,
  };
};

// TODO - move API side
class IncidentFetcher {
  async fetch() {
    const incidents = [];
    // TODO - Make this loop through incidents? Handle multiple fetches?
    // TODO - Promise.all
    incidents.push(await addWeatherData(await addParcelData(dataFile1)));
    incidents.push(await addWeatherData(await addParcelData(dataFile2)));

    console.warn("ZZZZ incidentFetcher.js", "incidents", incidents);

    return incidents;
  }
}

export default new IncidentFetcher();
