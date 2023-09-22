import styled from "styled-components";

type MenuPropsType = {
  disableContacts?: boolean
}

export const Menu = (props: MenuPropsType) => {

  return (
    <StyledMenu>
      <li>
        <a href="">Projects</a>
      </li>
      <li>
        <a href="">About</a>
      </li>
      <li>
        <a href="">Digital Assets</a>
      </li>
      {!props.disableContacts &&
        <li>
          <a href="">Let's talk</a>
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
      a {
        padding: 10px 20px;
      }
      &:nth-child(4) a{
        color: #fff;
        background-color: #2d2c2c;
      }
    }
`
