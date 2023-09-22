import styled from "styled-components";
import { Menu } from "../../components/Menu";

export const Header = () => {
  return (
    <StyledHeader>
      <Menu />
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  position: fixed;
  background-color: #fff;
  z-index: 10;
  width: 100%;
`