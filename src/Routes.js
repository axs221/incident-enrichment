import React from "react";
import {Route, Router} from "react-router-dom";

import App from "./App";
import history from "./history";

import IncidentFetcher from "./services/incidentFetcher";
import Config from "./services/config";

const incidentFetcher = new IncidentFetcher();
// TODO: Is config needed here, or just other services?
const config = new Config();

export default () => {
  return (
    <Router history={history} component={App}>
      <div>
        <Route
          path="/"
          render={props => (
            <App config={config} incidentFetcher={incidentFetcher} {...props} />
          )}
        />
      </div>
    </Router>
  );
};
