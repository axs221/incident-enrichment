import React, {Component} from "react";

import Container from "./styled/container";
import Header from "./styled/header";
import KeyValuePairs from "./styled/key-value-pairs";
import Key from "./styled/key";
import Value from "./styled/value";

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

export default Weather;
