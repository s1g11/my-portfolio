import styled from "styled-components";
import { StyledButton } from "../styled-components/StyledButton";
import { StyledInput } from "../styled-components/StyledInput";

export const ContactForm = () => {
  return (
    <StyledContactForm>
      <h3>Subscribe to my emailing list</h3>
      <form>
        <StyledInput placeholder="Enter your email" type="email" />
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
  color: ${props => props.theme.colors.black};

  form {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }

  p {
    color: ${props => props.theme.colors.black};
  }

  p a {
    text-decoration: underline;
    color: ${props => props.theme.colors.black};
  }
` 