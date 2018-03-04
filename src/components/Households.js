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
      <Header>Households</Header>

      <KeyValuePairs>
        <Key>Number of Households</Key>
        <Value>{formatNumber(attributes.HOUSEHOLDS)}</Value>

        <Key>Household Units</Key>
        <Value>{formatNumber(attributes.HSE_UNITS)}</Value>

        <Key>Vacant</Key>
        <Value>{formatNumber(attributes.VACANT)}</Value>

        <Key>Owner Occupied</Key>
        <Value>{formatNumber(attributes.OWNER_OCC)}</Value>

        <Key>Renter Occupied</Key>
        <Value>{formatNumber(attributes.RENTER_OCC)}</Value>

        <Key>Median Home Value</Key>
        <Value>{formatNumber(attributes.MEDIAN_VAL)}</Value>

        <Key>Median Rent</Key>
        <Value>{formatNumber(attributes.MEDIANRENT)}</Value>

        <Key>Mobile Homes</Key>
        <Value>{formatNumber(attributes.MOBILEHOME)}</Value>

        <Key>Farms</Key>
        <Value>{formatNumber(attributes.NO_FARMS87)}</Value>

        <Key>Average Sale Price</Key>
        <Value>{formatNumber(attributes.AVG_SALE87)}</Value>
      </KeyValuePairs>
    </Container>
  );
};

export default Parcel;
