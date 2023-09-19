import styled from "styled-components"

type MyProjectLinkProps = {
  backgroundImage: string
}

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
              <MyProjectLink backgroundImage="../src/assets/todolist.jpg" href="#">
                <h3>Todo List</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quaerat numquam iste eos labore? Ea optio nam autem ad maxime?</p>
              </MyProjectLink>
            </li>
            <li>
              <MyProjectLink backgroundImage="../src/assets/cards.jpg" href="#">
                <h3>Cards</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quaerat numquam iste eos labore? Ea optio nam autem ad maxime?</p>
              </MyProjectLink>
            </li>
          </ul>
        </Wrapper>
      </MyProjectsBlock>

      <AboutMeBlock>
        <Wrapper>
          <div>
            <h2>About me</h2>
            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
            <img src="../src/assets/aboutme1.jpg" alt="" />
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus excepturi impedit architecto quaerat tenetur iste doloribus vel pariatur nobis quibusdam voluptate mollitia quos, fuga voluptatem. Explicabo numquam labore itaque magnam alias dolore minima consequuntur asperiores cupiditate nemo laboriosam incidunt pariatur totam ipsum, odio esse suscipit enim, sequi assumenda dolorem aspernatur eum, quas neque. At quidem fugiat repellendus, quo corrupti ullam in unde mollitia eligendi nostrum natus maiores ut magni officia ab nesciunt aliquid soluta cum, accusamus inventore quibusdam nihil corporis! Natus amet exercitationem illum eos quos eaque rem, possimus eum debitis aspernatur at in assumenda illo magni aliquid dolores saepe.</p>
            <img src="../src/assets/mainPhoto.jpg" alt="" />
          </div>
        </Wrapper>
      </AboutMeBlock>
    </>
  )
}

const Wrapper = styled.div`
  max-width: 1600px;
  margin: 0 auto;
`

const AboutMeBlock = styled.div`
  padding: 100px 10px;
  background-color: #131212;
  color: #fff;

  ${Wrapper} {
    display: flex;
    gap: 0 5%;

    h2 {
      margin: 0 0 40px 0;
    }
    
    div {
      width: 45%;
      display: flex;
      flex-direction: column;

      &:first-child {
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
  }

  p {
    max-width: 300px;
  }
`


const MyProjectLink = styled.a<MyProjectLinkProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 250px 50px;
  /* background-color: rgba(71, 71, 71, 0.452); */
  background-image: url(${(props) => props.backgroundImage});
  /* background-blend-mode: color; */
  backdrop-filter: blur(10px);
  /* filter: blur(5px); */
  box-shadow: 4px 4px 2px rgba(71, 71, 71, 0.152);
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