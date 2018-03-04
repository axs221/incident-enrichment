import React from "react";
import moment from "moment";

import capitalize from "lodash/capitalize";
import startCase from "lodash/startCase";
import toLower from "lodash/toLower";

import Container from "./styled/container";
import Header from "./styled/header";
import KeyValuePairs from "./styled/key-value-pairs";
import Key from "./styled/key";
import Value from "./styled/value";

const prefix = (prefixWith, text) => {
  if (!text) {
    return "";
  }

  return `${prefixWith}${text}`;
};

// TODO: move to a utils folder
const comma = text => prefix(", ", text);
const space = text => prefix(" ", text);
const formatDate = date => moment(date).format("MM/DD/YY h:mm:ss a");

const Summary = props => {
  const {address_line1, city, state, postal_code} = props.data.address;
  const {
    event_closed,
    event_opened,
    first_unit_arrived,
    first_unit_dispatched,
    first_unit_enroute,
    incident_number,
    subtype,
    type,
  } = props.data.description;

  return (
    <Container>
      <Header>Incident</Header>

      <KeyValuePairs>
        <Key>Incident Number</Key>
        <Value>{incident_number}</Value>

        <Key>Type</Key>
        <Value>{type}</Value>

        <Key>Subtype</Key>
        <Value>{capitalize(subtype)}</Value>

        <Key>Address</Key>
        <Value>
          {startCase(
            toLower(
              `${address_line1}${comma(city)}${comma(state)}${space(
                postal_code,
              )}`,
            ),
          )}
        </Value>

        <Key>Opened</Key>
        <Value>{formatDate(event_opened)}</Value>

        <Key>First Unit Dispatched</Key>
        <Value>{formatDate(first_unit_dispatched)}</Value>

        <Key>First Unit Enroute</Key>
        <Value>{formatDate(first_unit_enroute)}</Value>

        <Key>First Unit Arrived</Key>
        <Value>{formatDate(first_unit_arrived)}</Value>

        <Key>Closed</Key>
        <Value>{formatDate(event_closed)}</Value>
      </KeyValuePairs>
    </Container>
  );
};

export default Summary;
