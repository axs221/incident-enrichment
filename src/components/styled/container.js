import styled, {css} from "styled-components";

export default styled.div`
  width: 28%;
  min-height: 100px;
  margin: 0;
  padding: 16px;

  @media (max-width: 1000px) {
    width: 100%;
  }

  ${props =>
    props.fullWidth &&
    css`
      width: 96%;
    `};
`;
