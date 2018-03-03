import React from "react";
import {Route, Router} from "react-router-dom";
import App from "./App";
import IncidentFetcher from "./services/incidentFetcher";
import history from "./history";

const incidentFetcher = new IncidentFetcher();

export default () => {
  return (
    <Router history={history} component={App}>
      <div>
        <Route
          path="/"
          render={props => <App incidentFetcher={incidentFetcher} {...props} />}
        />
      </div>
    </Router>
  );
};
