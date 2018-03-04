import React from "react";

import Container from "./styled/container";
import Header from "./styled/header";
import KeyValuePairs from "./styled/key-value-pairs";
import Key from "./styled/key";
import Value from "./styled/value";

const Weather = props => {
  const {
    cloudCover,
    humidity,
    precipIntensity,
    summary,
    temperature,
    windBearing,
    windSpeed,
  } = props.data.currently;

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

        <Key>Precipitation Intensity</Key>
        <Value>{precipIntensity}</Value>

        <Key>Humidity</Key>
        <Value>{humidity * 100}%</Value>

        <Key>Wind Speed</Key>
        <Value>{windSpeed} mph</Value>

        <Key>Wind Bearing</Key>
        <Value>{windBearing}&#176;</Value>
      </KeyValuePairs>
    </Container>
  );
};

export default Weather;
