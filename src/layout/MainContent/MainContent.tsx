import { Wrapper } from "../../styled-components/Wrapper"
import { Skill } from "../../components/Skill"
import { MyProjectLink } from "../../components/MyProjectLink"
import { Contancts } from "../../components/Contancts"
import { IntroductionBlock, SkillsBlock, MyProjectsBlock, AboutMeBlock } from "./StyledMainContent"
import mainPhoto from "../../assets/mainPhoto.jpg"
import aboutme1 from "../../assets/aboutme1.jpg"
import cards from "../../assets/cards.jpg"
import todolist from "../../assets/todolist.jpg"

export type MyProjectLinkProps = {
  backgroundImage: string
}

export const MainContent = () => {
  return (
    <section>

      <IntroductionBlock>
        <Wrapper>
          <div>
            <span>Hello, I'm Roman</span>
            <h1>Front-end developer</h1>
          </div>
          <div>
            <img src={mainPhoto} alt="photo" />
          </div>
        </Wrapper>
      </IntroductionBlock>

      <SkillsBlock>
        <Wrapper>
          <h2>My Skills</h2>
          <ol>
            <Skill title="React">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nihil impedit repudiandae assumenda unde consequatur a, cum, enim nam laudantium deserunt vero ducimus magnam iure, tenetur facilis eligendi quasi atque.
            </Skill>
            <Skill title="TypeScript">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nihil impedit repudiandae assumenda unde consequatur a, cum, enim nam laudantium deserunt vero ducimus magnam iure, tenetur facilis eligendi quasi atque.
            </Skill>
            <Skill title="Readux & Redux Toolkit">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nihil impedit repudiandae assumenda unde consequatur a, cum, enim nam laudantium deserunt vero ducimus magnam iure, tenetur facilis eligendi quasi atque.
            </Skill>
            <Skill title="Unit Tests">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nihil impedit repudiandae assumenda unde consequatur a, cum, enim nam laudantium deserunt vero ducimus magnam iure, tenetur facilis eligendi quasi atque.
            </Skill>
            <Skill title="HTML & CSS">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nihil impedit repudiandae assumenda unde consequatur a, cum, enim nam laudantium deserunt vero ducimus magnam iure, tenetur facilis eligendi quasi atque.
            </Skill>
            <Skill title="Styled Components">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nihil impedit repudiandae assumenda unde consequatur a, cum, enim nam laudantium deserunt vero ducimus magnam iure, tenetur facilis eligendi quasi atque.
            </Skill>
          </ol>
        </Wrapper>
      </SkillsBlock>

      <MyProjectsBlock>
        <Wrapper>
          <h2>My projects</h2>
          <ul>
            <li>
              <MyProjectLink backgroundImage={todolist} href="#">
                <h3>Todo List</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quaerat numquam iste eos labore? Ea optio nam autem ad maxime?</p>
              </MyProjectLink>
            </li>
            <li>
              <MyProjectLink backgroundImage={cards} href="#">
                <h3>Cards</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quaerat numquam iste eos labore? Ea optio nam autem ad maxime?</p>
              </MyProjectLink>
            </li>
          </ul>
        </Wrapper>
      </MyProjectsBlock>

      <AboutMeBlock>
        <Wrapper>
          <h2>About me</h2>
          <div>
            <div>

              <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
              <img src={aboutme1} alt="" />
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus excepturi impedit architecto quaerat tenetur iste doloribus vel pariatur nobis quibusdam voluptate mollitia quos, fuga voluptatem. Explicabo numquam labore itaque magnam alias dolore minima consequuntur asperiores cupiditate nemo laboriosam incidunt pariatur totam ipsum, odio esse suscipit enim, sequi assumenda dolorem aspernatur eum, quas neque. At quidem fugiat repellendus, quo corrupti ullam in unde mollitia eligendi nostrum natus maiores ut magni officia ab nesciunt aliquid soluta cum, accusamus inventore quibusdam nihil corporis! Natus amet exercitationem illum eos quos eaque rem, possimus eum debitis aspernatur at in assumenda illo magni aliquid dolores saepe.</p>
              <img src={mainPhoto} alt="" />
            </div>
          </div>
        </Wrapper>
      </AboutMeBlock>

      <Wrapper>
        <Contancts />
      </Wrapper>
    </section>
  )
}

