import React, {Component} from "react";
import "./App.css";

import Map from "./components/Map";

import Container from "./components/styled/container";
import Header from "./components/styled/header";
import KeyValuePair from "./components/styled/key-value-pair";
import Key from "./components/styled/key";
import PageContainer from "./components/styled/page-container";
import PageHeader from "./components/styled/page-header";
import Value from "./components/styled/value";

// TODO - break out into another file
const Weather = props => {
  return (
    <Container>
      <Header>Weather</Header>

      <KeyValuePair>
        <Key>Time</Key>
        <Value>{new Date(props.data.currently.time).toISOString()}</Value>
      </KeyValuePair>

      <KeyValuePair>
        <Key>Temperature</Key>
        <Value>{props.data.currently.temperature}</Value>
      </KeyValuePair>
    </Container>
  );
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {activeIncident: null};
  }

  componentWillMount() {
    this.fetchIncidents();
  }

  fetchIncidents = async () => {
    const incidents = await this.props.incidentFetcher.fetch();
    this.setState({
      incidents,
      activeIncident: incidents[0],
    });
  };

  handleMarkerClick = marker => {
    this.setState({
      activeIncident: marker,
    });
  };

  render() {
    const {activeIncident, incidents} = this.state;

    if (!incidents) {
      // TODO: What should we show when loading?
      return <div />;
    }

    return (
      <PageContainer>
        <PageHeader>Incident Response Map</PageHeader>

        <Map markers={incidents} onMarkerClick={this.handleMarkerClick} />
        {activeIncident && (
          <div>
            <Weather data={activeIncident.weather} />
          </div>
        )}
      </PageContainer>
    );
  }
}

export default App;
