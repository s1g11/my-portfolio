import styled from "styled-components";
import { PropsWithChildren } from "react";

type SkillPropsType = {
  title: string;
};

export const Skill = (props: PropsWithChildren<SkillPropsType>) => {
  return (
    <StyledSkill>
      <h3>{props.title}</h3>
      <p>{props.children || "text should be here.."}</p>
    </StyledSkill>
  );
};
const StyledSkill = styled.li`
  max-width: 600px;
  counter-increment: skill 1;
  position: relative;
  padding: 0 0 0 60px;

  &:after {
    content: '0'counter(skill)'.';
    position: absolute;
    left: 0;
    top: 0;
    font-size: 40px;
  }
`;
