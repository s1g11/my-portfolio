import styled from "styled-components";

export const Header = () => {
  return (
    <HeaderBlock>
      <Nav>
        <NavLink>Projects</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Digital Assets</NavLink>
        <NavLink>Let's talk</NavLink>
      </Nav>
    </HeaderBlock>
  )
}

const HeaderBlock = styled.header`
  padding: 20px 0;
  display: flex;
  justify-content: center;
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`

const NavLink = styled.button`
  padding: 10px 10px;

  &:last-child {
    background-color: #2D2C2C;
    color: #fff
  }
`