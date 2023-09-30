import { Menu } from "./Menu";
import { ContactForm } from "./ContactForm";
import styled from "styled-components";


export const Contancts = () => {
  return (
    <StyledContancts>
      <Menu disableContacts />
      <ContactForm />
    </StyledContancts>
  );
};

const StyledContancts = styled.div`
  display: flex;
  justify-content: space-between;

  flex-wrap: wrap;
  padding: 100px 10px;
  align-items: center;

  .contactMenu {
    display: flex;
  }

  h3 {
    font-size: 30px;
  }

  @media (max-width: 858px) {
    padding: 50px 10px;
    justify-content: center;
    text-align: center;
  }
`;