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
  padding: 100px 0;
  align-items: center;

  h3 {
    font-size: 30px;
  }
`;