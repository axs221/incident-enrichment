import React, {Component} from "react";
import "./App.css";

class App extends Component {
  componentWillMount() {
    this.props.incidentFetcher.fetch();
  }

  render() {
    return (
      <div className="App">
        <div>Add JSON data here:</div>
        <div>{JSON.stringify(this.props.incidentFetcher.incidents)}</div>
      </div>
    );
  }
}

export default App;
