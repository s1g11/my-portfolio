import styled from "styled-components";


export const StyledLink = styled.a`
  padding: 10px 20px;
  position: relative;
  overflow: hidden;
  font-size: 18px;
  font-weight: 400;
  
  &:before {
    content: '';
    position: absolute;
    pointer-events:none;
    width: 40%;
    height: 2px;
    background-color: ${props => props.theme.colors.primary};
    left: 100%;
    top: 75%;
    transition: 0.2s;
    opacity: 0;
  }
  
  &:after {
    content: '';
    position: absolute;
    pointer-events:none;
    width: 40%;
    height: 2px;
    background-color: ${props => props.theme.colors.primary};
    right: 100%;
    top: 75%;
    transition: 0.2s;
    opacity: 0;
  }
  
  &:hover {
    &:before {
      display: inline-block;
      left: 50%;
      opacity: 1;
    }
    &:after {
      display: inline-block;
      right: 50%;
      opacity: 1;
    }
  }

  @media (max-width: 450px) {
    padding: 0 8px;

    &:before {
      top: 90%;
      display: none;
    }
    &:after {
      top: 90%;
      display: none;
    }
  }
`;
