import React, {Component} from "react";
import "./App.css";

import Map from "./components/Map";

import Container from "./components/styled/container";
import FlexRow from "./components/styled/flex-row";
import Header from "./components/styled/header";
import KeyValuePairs from "./components/styled/key-value-pairs";
import Key from "./components/styled/key";
import PageContainer from "./components/styled/page-container";
import PageHeader from "./components/styled/page-header";
import Value from "./components/styled/value";

import moment from "moment";

// TODO - break out into another file
const Weather = props => {
  const {cloudCover, summary, temperature} = props.data.currently;

  return (
    <Container>
      <Header>Weather</Header>

      <KeyValuePairs>
        <Key>Temperature</Key>
        <Value>{Math.round(temperature)}&#176; F</Value>

        <Key>Description</Key>
        <Value>{summary}</Value>

        <Key>Cloud Cover</Key>
        <Value>{cloudCover}</Value>
      </KeyValuePairs>
    </Container>
  );
};

const Comments = props => {
  return (
    <Container>
      <Key>Comments</Key>
      <Value>{props.data.description.comments}</Value>
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

// TODO - move to utils folder
const formatDate = date => moment(date).format("MM/DD/YYYY HH:SS z");

const Summary = props => {
  const {address_line1, city, state, postal_code} = props.data.address;
  const {comments, event_opened, event_closed} = props.data.description;

  return (
    <Container>
      <Header>Incident</Header>

      <KeyValuePairs>
        <Key>Address</Key>
        <Value>{`${address_line1}${comma(city)}${comma(state)}${space(
          postal_code,
        )}`}</Value>

        <Key>Opened</Key>
        <Value>{formatDate(event_opened)}</Value>

        <Key>Closed</Key>
        <Value>{formatDate(event_closed)}</Value>
      </KeyValuePairs>
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
          <div>
            <FlexRow>
              <Summary data={activeIncident} />
              <Weather data={activeIncident.weather} />
              <Comments data={activeIncident} />
            </FlexRow>
          </div>
        )}
      </PageContainer>
    );
  }
}

export default App;
