import styled from "styled-components";
import { Wrapper } from "../../styled-components/Wrapper";

export const AboutMeBlock = styled.div`
  padding: 100px 10px;
  background-color: #131212;
  color: #fff;

  h2 {
      margin: 0 0 60px 0;  
  }

  ${Wrapper} {
    div {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    div {
      display: flex;
      flex-direction: column;
      max-width: 650px;

      &:first-child {
        h3 {
          margin: 0 0 30px 0;
        }
        margin: 0 0 30px 0;
        img {
          margin: auto;
        } 
      }
      &:last-child {
        p {
          margin: 0 0 150px 0;
        }
        img {
          align-self: flex-end;
          height: 500px;
        }
      }
    }

    p {
      margin: 0 0 50px 0;
    }

    img {
      width: 400px;
      height: 400px;
      box-shadow: 4px 4px 1px #232121;
    }

    @media (max-width: 1200px) {
      div {
        &:last-child {
          p {
            margin: 0 0 50px 0;
          }
        } 
      }

      h2 {
        margin: 0 0 10px 0;
      }
    }

    @media (max-width: 1337px) {
      justify-content: center;
    }
  }
  } 
`

export const MyProjectsBlock = styled.div`

  padding: 100px 10px;

  ul {
    display: flex;
    gap: 60px;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  li {
    width: 100%;
  }

  li a {
    margin: 0 auto;
    max-width: 1000px;
  }

  @media (max-width: 1200px) {
    padding: 50px 10px;
  }
`;

export const SkillsBlock = styled.div`
  background-color: #131212;
  color: #fff;
  padding: 150px 10px;

  ol {
    display: flex;
    justify-content: center;
    gap: 100px 10%;
    flex-wrap: wrap;
    list-style: none;
    counter-reset: skill 0;
  }

  @media (max-width: 1200px) {
    padding: 50px 10px;
  }
`;

export const IntroductionBlock = styled.div`
  padding: 200px 40px 200px 10px;
  position: relative;

  h1 {
    font-size: 80px;
    font-weight: bold;
  }

  span {
    font-size: 35px;
  }

  ${Wrapper} {
    display: flex;
    justify-content: space-between;
    align-items: center; 

    div:nth-child(2) {
    position: relative;

      &:before{
        content: '';
        position: absolute;
        width: 450px;
        height: 600px;
        transform: rotate(-5deg);
        top: 0;
        right: 0;
        background-color: #E7E7E7;
      }
    }

    img {
      max-width: 450px;
      transform: rotate(5deg);
    }

  }
  @media (max-width: 1000px) {
    padding: 100px 40px 100px 10px;

      ${Wrapper} {
        flex-wrap: wrap;
        justify-content: center;

        div + div {
          margin: 50px 0 0 0;
        }
      } 
    }
`;
