import React from "react";
import {Route, Router} from "react-router-dom";

import App from "./App";
import history from "./history";

import config from "./services/config";
import incidentFetcher from "./services/incidentFetcher";
import weatherService from "./services/weather";

export default () => {
  return (
    <Router history={history} component={App}>
      <div>
        <Route
          path="/"
          render={props => (
            <App
              config={config}
              weatherService={weatherService}
              incidentFetcher={incidentFetcher}
              {...props}
            />
          )}
        />
      </div>
    </Router>
  );
};
