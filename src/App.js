import React, {Component} from "react";
import "./App.css";

import Map from "./components/Map";

import Container from "./components/styled-components/container";

// TODO - break out into another file
const Weather = props => {
  return <Container>{JSON.stringify(props.data.timezone)}</Container>;
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {activeMarker: null};
  }

  componentWillMount() {
    this.fetchIncidents();
  }

  fetchIncidents = async () => {
    const incidents = await this.props.incidentFetcher.fetch();
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
      // TODO: What should we show when loading?
      return <div />;
    }

    return (
      <div>
        <Map markers={incidents} onMarkerClick={this.handleMarkerClick} />
        {activeMarker && (
          <div>
            <Weather data={activeMarker.weather} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
