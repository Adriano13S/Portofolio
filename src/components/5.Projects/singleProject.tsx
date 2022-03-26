import styled from "styled-components";
import { ProjectDetails } from "./projectDetails";
import { SvgLineCircleComponent } from "../0.Components/svgLineCircle"
import { ISingleProject } from ".";

interface IProject {
  project: ISingleProject
  gapTop?: boolean
  gapBot?: boolean
}

export const Project: React.FC<IProject> = ({project, gapTop, gapBot}) =>{
  return(
    <SingleProjectContainer>
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
        <ProjectAboutContainer>
          <ProjectAboutText>
            <h3>{project.header}</h3>
            <p>{project.description}</p>
          </ProjectAboutText>
        </ProjectAboutContainer>
      <ProjectDetails 
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
  margin: 0% 15% 0% 15%;
  display: flex;
  flex-wrap: wrap;
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
  padding-left: calc(50% - 104px);
  flex-wrap: wrap;
  align-items: center;
  background-color: var(--dark-blue);
  color: var(--bronze);
  z-index: 1;
  > p{
    margin-right: 15px;
    font-size: var(--h5-size);
  }
  @media screen and (max-width: 425px) {
    padding-left: calc(50% - 72px);
  }
`
const ProjectContent = styled.div`
  padding: 1vh 0 1vh 0;
  min-height: 50vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  @media screen and (max-width: 1440px) {
    padding: 15vh 0 15vh 0
  }
`

const ProjectAboutContainer = styled.div`
  height: 100%;
  width: var(--box-width);
  // box-shadow: 0 2px 4px black;
  border-radius: 1.5%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  margin-left: 0;
  // opacity: 0;
  // margin-left: -80%;
  transition: margin-left 0.5s ease, opacity 1.5s ease;
  @media screen and (max-width: 1395px) {
    width: 60%;
  }
  @media screen and (max-width: 730px) {
    width: 90%;
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