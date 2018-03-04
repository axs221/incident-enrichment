import React, {Component} from "react";

import Container from "./styled/container";
import Header from "./styled/header";
import KeyValuePairs from "./styled/key-value-pairs";
import Key from "./styled/key";
import Value from "./styled/value";

const FireDepartment = props => {
  const {fd_id, firecares_id, name, shift, state} = props.data.fire_department;

  return (
    <Container>
      <Header>Fire Department</Header>

      <KeyValuePairs>
        <Key>ID</Key>
        <Value>{fd_id}</Value>

        <Key>Fire Cares ID</Key>
        <Value>{firecares_id}</Value>

        <Key>Name</Key>
        <Value>{name}</Value>

        <Key>Shift</Key>
        <Value>{shift}</Value>

        <Key>State</Key>
        <Value>{state}</Value>
      </KeyValuePairs>
    </Container>
  );
};

export default FireDepartment;
