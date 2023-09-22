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
    top: 0;
    right: 100%;
    width: 100%;
    height: 100%;
    background-color: #000;
    transition: 0.2s;
    z-index: -1;
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 100%;
    width: 100%;
    height: 100%;
    background-color: #000;
    transition: 0.2s;
    z-index: -1;
  }

  &:hover {
    /* background-color: #000; */
    color: #fff;
    border: 2px solid #000;
    
    &:before {
      right: 50%;
    }
    &:after {
      left: 50%;
    }
  }
`;
