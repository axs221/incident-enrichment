import React from "react";

import Container from "./styled/container";
import Header from "./styled/header";
import Value from "./styled/value";

const Comments = props => {
  return (
    <Container fullWidth raised>
      <Header>Comments</Header>

      <Value>{props.data.description.comments}</Value>
    </Container>
  );
};

export default Comments;
