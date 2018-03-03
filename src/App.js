import React, {Component} from "react";
import "./App.css";

import Map from "./components/Map";

import Container from "./components/styled/container";
import FlexRow from "./components/styled/flex-row";
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

const prefix = (prefixWith, text) => {
  if (!text) {
    return "";
  }

  return `${prefixWith}${text}`;
};

const comma = text => prefix(", ", text);
const space = text => prefix(" ", text);

const Address = props => {
  console.warn("ZZZZ App.js", "props", props);
  const {address_line1, city, state, postal_code} = props.data;
  return (
    <Container>
      <Header>Address</Header>

      <KeyValuePair>
        <Key>Address</Key>
        <Value>{`${address_line1}${comma(city)}${comma(state)}${space(
          postal_code,
        )}`}</Value>
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
    this.getIncidents();
  }

  getIncidents = async () => {
    const incidents = await this.props.incidentFetcher.get();
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
          <FlexRow>
            <Address data={activeIncident.address} />
            <Weather data={activeIncident.weather} />
          </FlexRow>
        )}
      </PageContainer>
    );
  }
}

export default App;
