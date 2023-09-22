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
  align-items: center;
  padding: 250px 50px;
  /* background-color: rgba(71, 71, 71, 0.452); */
  background-image: url(${(props) => props.backgroundImage});
  /* background-blend-mode: color; */
  backdrop-filter: blur(10px);
  /* filter: blur(5px); */
  box-shadow: 4px 4px 2px rgba(71, 71, 71, 0.152);

  p {
    max-width: 300px;
  }
`;
