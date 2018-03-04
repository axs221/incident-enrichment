import React, {Component} from "react";

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
      <Header>Parcel</Header>

      <KeyValuePairs>
        <Key>Area</Key>
        <Value>{attributes.AREA}</Value>

        <Key>State</Key>
        <Value>{attributes.STATE_NAME}</Value>

        <Key>Region</Key>
        <Value>{attributes.SUB_REGION}</Value>

        <Key>Population (1999)</Key>
        <Value>{formatNumber(attributes.POP1999)}</Value>

        <Key>Population (90, Square Miles)</Key>
        <Value>{formatNumber(attributes.POP90_SQMI)}</Value>
      </KeyValuePairs>
    </Container>
  );
};

export default Parcel;
