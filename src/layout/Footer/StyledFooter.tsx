import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 50px 100px;
  /* flex-wrap: wrap; */


  @media (max-width: 560px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 25px 0;

    p {
      margin: 0 0 10px 0;
    }
  }
`;
