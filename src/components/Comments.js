import React, {Component} from "react";

import Container from "./styled/container";
import Header from "./styled/header";
import KeyValuePairs from "./styled/key-value-pairs";
import Key from "./styled/key";
import Value from "./styled/value";


const Comments = props => {
  return (
    <Container fullWidth>
      <Header>Comments</Header>

      <Value>{props.data.description.comments}</Value>
    </Container>
  );
};


export default Comments
