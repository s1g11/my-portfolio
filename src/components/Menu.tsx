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
        position: relative;
        overflow: hidden;
        

        &:before {
          content: '';
          position: absolute;
          pointer-events:none;
          width: 40%;
          height: 2px;
          background-color: #000;
          left: 100%;
          top: 70%;
          transition: 0.2s;
          opacity: 0;
        }

        &:after {
          content: '';
          position: absolute;
          pointer-events:none;
          width: 40%;
          height: 2px;
          background-color: #000;
          right: 100%;
          top: 70%;
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
      }
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
`
