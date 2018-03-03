import React, {Component} from "react";
import "./App.css";

import capitalize from "lodash/capitalize";
import startCase from "lodash/startCase";
import toLower from "lodash/toLower";

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
        <Value>{cloudCover * 100}%</Value>
      </KeyValuePairs>
    </Container>
  );
};

const Comments = props => {
  return (
    <Container fullWidth>
      <Header>Comments</Header>

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
const formatDate = date => moment(date).format("MM/DD/YY h:mm:ss a");

const Summary = props => {
  const {address_line1, city, state, postal_code} = props.data.address;
  const {
    type,
    subtype,
    event_opened,
    first_unit_arrived,
    first_unit_dispatched,
    first_unit_enroute,
    event_closed,
  } = props.data.description;

  return (
    <Container>
      <Header>Incident</Header>

      <KeyValuePairs>
        <Key>Type</Key>
        <Value>{type}</Value>

        <Key>Subtype</Key>
        <Value>{capitalize(subtype)}</Value>

        <Key>Address</Key>
        <Value>
          {startCase(
            toLower(
              `${address_line1}${comma(city)}${comma(state)}${space(
                postal_code,
              )}`,
            ),
          )}
        </Value>

        <Key>Opened</Key>
        <Value>{formatDate(event_opened)}</Value>

        <Key>First Unit Dispatched</Key>
        <Value>{formatDate(first_unit_dispatched)}</Value>

        <Key>First Unit Enroute</Key>
        <Value>{formatDate(first_unit_enroute)}</Value>

        <Key>First Unit Arrived</Key>
        <Value>{formatDate(first_unit_arrived)}</Value>

        <Key>Closed</Key>
        <Value>{formatDate(event_closed)}</Value>
      </KeyValuePairs>
    </Container>
  );
};

const FireDepartment = props => {
  const {fd_id, firecares_id, name, shift, state} = props.data.fire_department;

  return (
    <Container>
      <Header>Fire Department</Header>

      <KeyValuePairs>
        <Key>ID</Key>
        <Value>{fd_id}</Value>

        <Key>Fire Cares ID</Key>
        <Value>{firecares_id}</Value>

        <Key>Name</Key>
        <Value>{name}</Value>

        <Key>Shift</Key>
        <Value>{shift}</Value>

        <Key>State</Key>
        <Value>{state}</Value>
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
      <div>
        <PageHeader>Incident Response Map</PageHeader>

        <PageContainer>
          <Map markers={incidents} onMarkerClick={this.handleMarkerClick} />

          {activeIncident && (
            <div>
              <FlexRow background={"#f5f5f5"}>
                <Summary data={activeIncident} />
                <FireDepartment data={activeIncident} />
                <Weather data={activeIncident.weather} />

                <Comments data={activeIncident} />
              </FlexRow>
            </div>
          )}
        </PageContainer>
      </div>
    );
  }
}

export default App;
