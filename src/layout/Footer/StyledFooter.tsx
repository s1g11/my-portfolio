import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 50px 100px;
  color: ${props => props.theme.colors.primary};

  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 25px 0;

    p {
      margin: 0 0 10px 0;
    }
  }
`;
