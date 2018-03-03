import React, {Component} from "react";
import "./App.css";

class App extends Component {
  componentWillMount() {
    this.props.incidentFetcher.fetch();
  }

  render() {
    return (
      <div className="App">
        <div>Length of JSON data:</div>
        <div>{this.props.incidentFetcher.incidents.length}</div>

        <div>Config:</div>
        <div>{JSON.stringify(this.props.config.get("testing"))}</div>
      </div>
    );
  }
}

export default App;
