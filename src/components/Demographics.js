import React from "react";

import Container from "./styled/container";
import Header from "./styled/header";
import KeyValuePairs from "./styled/key-value-pairs";
import Key from "./styled/key";
import Value from "./styled/value";

const formatNumber = x => {
  return parseFloat(x).toLocaleString();
};

const Parcel = props => {
  const {attributes} = props.data.features[0];

  return (
    <Container>
      <Header>Demographics</Header>

      <KeyValuePairs>
        <Key>Males</Key>
        <Value>{formatNumber(attributes.MALES)}</Value>
        <Key>Females</Key>
        <Value>{formatNumber(attributes.FEMALES)}</Value>
        <Key>White</Key>
        <Value>{formatNumber(attributes.WHITE)}</Value>
        <Key>Black</Key>
        <Value>{formatNumber(attributes.BLACK)}</Value>
        <Key>American ES</Key>
        <Value>{formatNumber(attributes.AMERI_ES)}</Value>
        <Key>American PI</Key>
        <Value>{formatNumber(attributes.ASIAN_PI)}</Value>
        <Key>Other</Key>
        <Value>{formatNumber(attributes.OTHER)}</Value>
        <Key>Hispanic</Key>
        <Value>{formatNumber(attributes.HISPANIC)}</Value>
        <Key>Age &lt;5</Key>
        <Value>{formatNumber(attributes.AGE_UNDER5)}</Value>
        <Key>Age 5 - 17</Key>
        <Value>{formatNumber(attributes.AGE_5_17)}</Value>
        <Key>Age 18 - 29</Key>
        <Value>{formatNumber(attributes.AGE_18_29)}</Value>
        <Key>Age 30 - 49</Key>
        <Value>{formatNumber(attributes.AGE_30_49)}</Value>
        <Key>Age 50 - 64</Key>
        <Value>{formatNumber(attributes.AGE_50_64)}</Value>
        <Key>Age 65+</Key>
        <Value>{formatNumber(attributes.AGE_65_UP)}</Value>
      </KeyValuePairs>
    </Container>
  );
};

export default Parcel;
