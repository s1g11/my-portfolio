import styled from "styled-components";
import { Wrapper } from "../../styled-components/Wrapper";

export const AboutMeBlock = styled.div`
  padding: 100px 10px;
  background-color: #131212;
  color: #fff;

  ${Wrapper} div {
    display: flex;
    gap: 0 100px;
    justify-content: center;
    flex-wrap: wrap;

    h2 {
      margin: 0 0 40px 0;
    }
    
    div {
      /* width: 45%; */
      display: flex;
      flex-direction: column;
      max-width: 700px;

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

  }
`



export const MyProjectsBlock = styled.div`

  padding: 100px 10px;

  ul {
    display: flex;
    gap: 60px;
    flex-direction: column;
    align-items: center;
  }

  li {
    width: 1000px;
  }
`;

export const SkillsBlock = styled.div`
  background-color: #131212;
  color: #fff;
  padding: 150px 20px;

  ol {
    display: flex;
    justify-content: center;
    gap: 100px 10%;
    flex-wrap: wrap;
    list-style: none;
    counter-reset: skill 0;
  }
`;

export const IntroductionBlock = styled.div`
  padding: 350px 10px;
  position: relative;

  h1 {
    font-size: 80px;
    font-weight: bold;
  }

  span {
    font-size: 35px;
  }

  &:before {
    content: "";
    width: 412px;
    height: 550px;
    position: absolute;
    top: 15%;
    left: 60%;
    background-color: #E7E7E7;
    transform: rotate(-10deg);
  }
  &:after {
    content: "";
    background-image: url("src/assets/mainPhoto.jpg");
    background-size: contain;
    width: 412px;
    height: 550px;
    position: absolute;
    top: 15%;
    left: 60%;
    transform: rotate(10deg);
  }
`;
