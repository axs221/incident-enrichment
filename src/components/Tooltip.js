import React from "react";
import moment from "moment";

import capitalize from "lodash/capitalize";
import startCase from "lodash/startCase";
import toLower from "lodash/toLower";

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
    incident_number,
    subtype,
    type,
  } = props.data.description;

  return (
    <div>
      <Header>{type}</Header>

      <KeyValuePairs>
        <Key>Incident Number</Key>
        <Value>{incident_number}</Value>

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

        <Key>Closed</Key>
        <Value>{formatDate(event_closed)}</Value>
      </KeyValuePairs>
    </div>
  );
};

export default Summary;
