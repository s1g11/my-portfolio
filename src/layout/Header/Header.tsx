import styled from "styled-components";
import { Menu, StyledLink } from "../../components/Menu";
import { slide as Burger } from 'react-burger-menu'

export const Header = () => {
  return (
    <StyledHeader>
      <Menu />
      <BurgerMenu />
    </StyledHeader>
  )
}

export const BurgerMenu = () => {
  return (
    <StyledBurgerMenu id="test">
      <Burger outerContainerId={"test"} customBurgerIcon={<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 7.5H21" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" />
        <path d="M9.48999 12.5H21" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" />
        <path d="M3 12.5H5.99" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" />
        <path d="M3 17.5H21" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" />
      </svg>} right>
        <StyledLink href="">Projects</StyledLink>
        <StyledLink href="">About</StyledLink>
        <StyledLink href="">Digital Assets</StyledLink>
        <StyledLink href="">Let's talk</StyledLink>
      </Burger>
    </StyledBurgerMenu>
  )
}




const StyledHeader = styled.header`
  position: fixed;
  background-color: #fff;
  z-index: 10;
  width: 100%;

  @media (max-width: 680px) { 
    height: 90px;
  }
`

const StyledBurgerMenu = styled.div`
  display: none;

  a {
    text-align: center;
    color: #fff;

    &:after {
      background-color: #fff;
      width: 20%;
    }

    &:before {
      background-color: #fff;
      width: 20%;
    }

    &:visited {
      color: #fff
    }
  }

  a + a {
    margin: 20px 0 0 0;
  }

  /* Position and sizing of burger button */
  .bm-burger-button {
    position: fixed;
    width: 50px;
    height: 50px;
    right: 20px;
    top: 20px;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #131212;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: #bdc3c7;
  }

  /* General sidebar styles */
  .bm-menu {
    background: #131212;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }
  
  @media(max-width: 680px) {
    display: block;
  }
`