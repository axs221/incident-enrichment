import React, {Component} from "react";
import "./App.css";

import Map from "./components/Map";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
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

  render() {
    const {incidents} = this.state;

    if (!incidents) {
      return <div>Loading...</div>;
    }

    return (
      <Map markers={incidents}  /> // Map with a Marker
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
