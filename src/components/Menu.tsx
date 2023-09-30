import styled from "styled-components";
import { StyledLink } from "../styled-components/StyledLink";

type MenuPropsType = {
  disableContacts?: boolean
}

export const Menu = (props: MenuPropsType) => {

  return (
    <StyledMenu className="contactMenu">
      <li>
        <StyledLink href="">Projects</StyledLink>
      </li>
      <li>
        <StyledLink href="">About</StyledLink>
      </li>
      <li>
        <StyledLink href="">Digital Assets</StyledLink>
      </li>
      {!props.disableContacts &&
        <li>
          <StyledLink href="">Let's talk</StyledLink>
        </li>}
    </StyledMenu>
  )
}
const StyledMenu = styled.ul`
  padding: 20px 0;
  display: flex;
  justify-content: center;
    
    li + li {
      margin: 0 0 0 50px;
    }

    li {
      &:nth-child(4) a{
        color: #fff;
        background-color: #2d2c2c;

        &:before {
          background-color: #fff;
        }
        &:after {
          background-color: #fff;
        }
      }
    }

  @media(max-width: 680px) {
    display: none;
    li {
      margin: 0 !important;
      a {
        font-size: 17px;
      }
    }
  }
`

