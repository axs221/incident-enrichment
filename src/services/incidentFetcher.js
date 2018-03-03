import dataFile1 from "../data/F01705150050.json";
import dataFile2 from "../data/F01705150090.json";

// TODO - move API side
class incidentFetcher {
  incidents = [];

  fetch() {
    // TODO - Make this loop through incidents? Handle multiple fetches?
    this.incidents.push(dataFile1);
    this.incidents.push(dataFile2);
  }
}

export default incidentFetcher;
