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

import Comments from "./components/Comments";
import FireDepartment from "./components/FireDepartment";
import Summary from "./components/Summary";
import Weather from "./components/Weather";

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
