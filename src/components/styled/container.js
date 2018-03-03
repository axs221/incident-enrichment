import styled, {css} from "styled-components";

export default styled.div`
  border: thin solid #ccc;
  border-radius: 0.25em;
  min-height: 100px;
  width: 350px;
  margin: 8px;
  padding: 16px;

  ${props =>
    props.fullWidth &&
    css`
      width: 96%;
    `};
`;
