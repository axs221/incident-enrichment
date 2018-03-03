import styled, {css} from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  ${props =>
    props.background &&
    css`
      background: ${props.background};
    `};
`;
