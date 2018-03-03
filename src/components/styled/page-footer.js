import styled, {css} from "styled-components";

export default styled.div`
  width: 100%;
  border: thin solid #f0f0f0;
  background-color: #fafafa;
  min-height: 100px;
  margin: 0;
  padding: 16px;

  ${props =>
    props.fullWidth &&
    css`
      width: 96%;
    `};
`;
