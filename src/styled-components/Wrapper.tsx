import styled from "styled-components";


export const Wrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;

  hr {
    height: 2px;
    background-color: ${props => props.theme.background.black};
  }
`;
