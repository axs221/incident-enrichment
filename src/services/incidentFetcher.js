import dataFile1 from "../data/F01705150050.json";
import dataFile2 from "../data/F01705150090.json";
import weatherService from "./weather";

const addWeatherData = async incident => {
  const weather = await weatherService.get();

  console.warn("ZZZZ incidentFetcher.js", "weather", weather);

  return {
    ...incident,
    weather,
  };
};

// TODO - move API side
class IncidentFetcher {
  async fetch() {
    const incidents = [];
    // TODO - Make this loop through incidents? Handle multiple fetches?
    // TODO - Promise.all
    incidents.push(await addWeatherData(dataFile1));
    incidents.push(await addWeatherData(dataFile2));

    return incidents;
  }
}

export default new IncidentFetcher();
