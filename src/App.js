import React, {Component} from "react";
import "./App.css";

import Map from "./components/Map";

import Container from "./components/styled-components/container";

// TODO - break out into another file
const Weather = props => {
  return <Container />;
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {activeMarker: null};
  }

  componentWillMount() {
    console.warn("ZZZZ App.js", "mounting");
    this.fetchIncidents();
  }

  fetchIncidents = async () => {
    const incidents = await this.props.incidentFetcher.fetch();
    console.warn("ZZZZ App.js", "SETTING STATE", incidents);
    this.setState({incidents});
  };

  handleMarkerClick = marker => {
    this.setState({
      activeMarker: marker,
    });
  };

  render() {
    const {activeMarker, incidents} = this.state;

    if (!incidents) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Map markers={incidents} onMarkerClick={this.handleMarkerClick} /> //
        Map with a Marker
        {activeMarker && (
          <div>
            <Weather data={activeMarker.weather} />
          </div>
        )}
      </div>
    );

    // return ( // ZZZZ
    //   <div className="App">
    //     <div>Length of JSON data:</div>
    //     <div>{incidents.length}</div>

    //     <div>Config:</div>
    //     <div>{JSON.stringify(this.props.config.get("testing"))}</div>

    //     <div>Weather:</div>
    //     <div>{JSON.stringify(incidents[0] && incidents[0].weather)}</div>

    //     <div>Parcel:</div>
    //     <div>{JSON.stringify(incidents[0] && incidents[0].parcel)}</div>
    //   </div>
    // );
  }
}

export default App;
