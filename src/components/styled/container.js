import styled, {css} from "styled-components";

export default styled.div`
  width: 30%;
  min-height: 100px;
  margin: 0;
  padding: 16px;

  ${props =>
    props.fullWidth &&
    css`
      width: 96%;
    `};
`;
