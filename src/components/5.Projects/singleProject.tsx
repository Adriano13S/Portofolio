import styled, { css } from "styled-components";
import { ProjectDetails } from "./projectDetails";
import { SvgLineCircleComponent } from "../0.Components/svgLineCircle"
import { ISingleProject } from ".";

interface IProject {
  project: ISingleProject
  gapTop?: boolean
  gapBot?: boolean
  showProject: boolean
}

export const Project: React.FC<IProject> = ({project, gapTop, gapBot, showProject}) =>{

  return(
    <SingleProjectContainer className="project" id={project.title}>
      {gapTop && <GapTop />}
      <ProjectTitle>
        <p>{project.title}</p>
        <SvgLineCircleComponent
          fillCircle="var(--dark-blue)"
          colorCircle="var(--nice-blue)"
          colorLine="var(--nice-blue)"
          lineSize={38}
          circleSize="7"
        />
      </ProjectTitle>
      <ProjectContent>
        <ProjectAboutContainer showProject={showProject}>
          <ProjectAboutText>
            <h3>{project.header}</h3>
            <p>{project.description}</p>
          </ProjectAboutText>
        </ProjectAboutContainer>
      <ProjectDetails 
        showProject={showProject}
        languages={project.languages}
        frameworks={project.frameworks}
        github={project.github}
        external={project.external}
      />
      </ProjectContent>
      {gapBot && <GapBot><div></div></GapBot>}
    </SingleProjectContainer>      
  );
};

const SingleProjectContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  :before {
    content: "";
    width: 2px;
    height: 100%;
    display: block;
    position: absolute;
    background-color: var(--bronze);
    left: 50%;
    bottom: 0;
  }
  @media screen and (max-width: 425px) {
    width: 85%;
  }
`
const GapTop = styled.div`
  width: 50%;
  height: 5vh;
  border-top: 2.7px solid var(--bronze);
`

const GapBot = styled.div`
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: flex-end;
  > div {
    height: 100%;
    width: 50%;
    border-bottom: 2.7px solid var(--bronze);
  }
`

const ProjectTitle = styled.div`
  width: 100%;
  padding: 0.2%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: calc(50% - 19px);
  background-color: var(--dark-blue);
  color: var(--bronze);
  z-index: 1;
  > p{
    margin-right: 9px;
    font-size: var(--h5-size);
    max-width: 60%;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  @media screen and (max-width: 425px) {
    > p{
      margin-right: 9px;
    }
  }
`
const ProjectContent = styled.div`
  padding: 1vh 0 1vh 0;
  min-height: 60vh;
  width: 100%;
  display: flex;
  // flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  @media screen and (max-width: 1440px) {
    flex-direction: column;
    padding: 15vh 0 15vh 0;
    min-height: 80vh;
  }
`

const ProjectAboutContainer = styled.div<{showProject:boolean}>`
  height: 100%;
  width: var(--box-width);
  // box-shadow: 0 2px 4px black;
  border-radius: 1.5%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: margin-left 0.5s, opacity 0.5s ease 0.2s;
  opacity: 0.1;
  margin-left: -60%;

  ${props => props.showProject && css`
    opacity: 1;
    margin-left: 0 !important;
  `
  }
  @media screen and (max-width: 1395px) {
    width: 60%;
  }
  @media screen and (max-width: 730px) {
    width: 90%;
    margin-left: -90%;
  }
`
const ProjectAboutText = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  color: var(--bck-color);
  width: 80%;
  @media screen and (max-width: 1440px) {
    z-index: 1;
    background-color: var(--dark-blue);
    width: 100%;
    text-align: center;
  }
  > h3{
    font-size: var(--h2-size);
    padding-top:2%;
    margin-bottom: 5%;
    background-size: 100%;
    background-image: var(--text-gradient-nice-blue-bronze);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
  }
  > p {
    font-size: var(--p-size);
    margin-bottom: 5%;
  }
`