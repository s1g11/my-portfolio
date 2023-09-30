import styled from "styled-components";


export const StyledButton = styled.button`
  padding: 10px 35px;
  border: 2px solid;
  transition: 0.2s;
  font-weight: bold;
  overflow: hidden;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 94%;
    right: 100%;
    width: 100%;
    height: 2px;
    background-color: ${props => props.theme.background.black};
    transition: 0.2s;
    z-index: -1;
  }
  &:after {
    content: '';
    position: absolute;
    top: 94%;
    left: 100%;
    width: 100%;
    height: 2px;
    background-color: ${props => props.theme.background.black};
    transition: 0.2s;
    z-index: -1;
  }

  &:hover {
    border: 2px solid ${props => props.theme.background.black};
    
    &:before {
      right: 50%;
    }
    &:after {
      left: 50%;
    }
  }
`;
