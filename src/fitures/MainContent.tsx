import styled from "styled-components"

export const MainContent = () => {
  return (
    <>

      <IntroductionBlock>
        <Wrapper>
          <span>Hello, I'm Roman</span>
          <h1>Front-end developer</h1>
        </Wrapper>
      </IntroductionBlock>

      <SkillsBlock>
        <Wrapper>
          <h2>My Skills</h2>
          <ol>
            <li>
              <h3>React</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quasi explicabo veniam minus consectetur itaque iusto architecto dignissimos eaque earum. Consectetur mollitia distinctio ut deserunt ipsa dolorem cum quia voluptates.</p>
            </li>
            <li>
              <h3>TypeScript</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nihil impedit repudiandae assumenda unde consequatur a, cum, enim nam laudantium deserunt vero ducimus magnam iure, tenetur facilis eligendi quasi atque.</p>
            </li>
            <li>
              <h3>Redux & Redux Toolkit</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio aut commodi alias expedita, eum praesentium nobis reiciendis, quaerat ex nisi atque nam tempore laudantium voluptatibus hic, sunt pariatur deserunt. Dolorem.</p>
            </li>
            <li>
              <h3>Unit Tests</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio aut commodi alias expedita, eum praesentium nobis reiciendis, quaerat ex nisi atque nam tempore laudantium voluptatibus hic, sunt pariatur deserunt. Dolorem.</p>
            </li>
            <li>
              <h3>HTML & CSS</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio aut commodi alias expedita, eum praesentium nobis reiciendis, quaerat ex nisi atque nam tempore laudantium voluptatibus hic, sunt pariatur deserunt. Dolorem.</p>
            </li>
            <li>
              <h3>Styled Components</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio aut commodi alias expedita, eum praesentium nobis reiciendis, quaerat ex nisi atque nam tempore laudantium voluptatibus hic, sunt pariatur deserunt. Dolorem.</p>
            </li>
          </ol>
        </Wrapper>
      </SkillsBlock>

      <MyProjectsBlock>
        <Wrapper>
          <h2>My projects</h2>
          <ul>
            <li>
              <a href="">
                <h3>Todo List</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quaerat numquam iste eos labore? Ea optio nam autem ad maxime?</p>
              </a>
            </li>
            <li>
              <a href="">
                <h3>Cards</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quaerat numquam iste eos labore? Ea optio nam autem ad maxime?</p>
              </a>
            </li>
          </ul>
        </Wrapper>
      </MyProjectsBlock>
    </>
  )
}

const Wrapper = styled.div`
  max-width: 1600px;
  margin: 0 auto;
`

const MyProjectsBlock = styled.div`

  padding: 100px 10px;

  ul {
    display: flex;
    gap: 60px;
    flex-direction: column;
    align-items: center;
  }

  li {
    width: 1000px;
    background-color: #000;
  }

  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 250px 50px;
  }

  p {
    max-width: 300px;
  }
`

const SkillsBlock = styled.div`
  background-color: #131212;
  color: #fff;
  padding: 150px 20px;

  ol {
    display: flex;
    justify-content: space-between;
    gap: 100px 10%;
    flex-wrap: wrap;
    list-style: none;
    counter-reset: skill 0;
  }

  li{
    max-width: 26%;
    counter-increment: skill 1;
    position: relative;
  }

  li:after {
    content: '0'counter(skill)'.';
    position: absolute;
    left: -15%;
    top: 0;
    font-size: 40px;

  }
`

const IntroductionBlock = styled.div`
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
`