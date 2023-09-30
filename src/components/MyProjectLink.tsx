import styled from "styled-components";
import { PropsWithChildren } from 'react';
import { MyProjectLinkProps } from "../layout/MainContent/MainContent";

type MyProjectPropsType = {
  title: string;
  imageSRC: string;
  imageHref: string;
};

export const MyProject = (props: PropsWithChildren<MyProjectPropsType>) => {
  return (
    <MyProjectLink backgroundImage={props.imageSRC} href={props.imageHref}>
      <h3>{props.title}</h3>
      <p>{props.children}</p>
    </MyProjectLink>
  );
};
export const MyProjectLink = styled.a<MyProjectLinkProps> `
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  padding: 250px 50px;
  background-image: url(${(props) => props.backgroundImage});
  backdrop-filter: blur(10px);
  box-shadow: 3px 3px 1px ${props => props.theme.background.unhoverShadow};
  transition: 0.2s;
  color: ${props => props.theme.colors.secondary} !important;

  h3 {
    margin: 0 0 40px 0;
  }

  &:hover {
    box-shadow: 3px 3px 1px ${props => props.theme.background.hoverShadow};
  }

  p {
    max-width: 300px;
  }
`;
