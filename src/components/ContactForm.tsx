import styled from "styled-components";
import { StyledButton } from "../styled-components/StyledButton";
import { StyledInput } from "../styled-components/StyledInput";

export const ContactForm = () => {
  return (
    <StyledContactForm>
      <h3>Subscribe to my emailing list</h3>
      <form>
        <StyledInput type="text" placeholder="Enter your email" />
        <StyledButton type="submit">Subscribe</StyledButton>
      </form>
      <p>By subscribing you agree to with our <a href="#">Privacy Policy</a></p>
    </StyledContactForm>
  );
};

const StyledContactForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  form {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }

  p a {
    text-decoration: underline;
  }
` 