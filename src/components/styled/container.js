import styled, {css} from "styled-components";

export default styled.div`
  border: thin solid #ccc;
  border-radius: 0.25em;
  min-height: 100px;
  width: 300px;
  margin: 16px;
  padding: 16px;

  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
    `};
`;
