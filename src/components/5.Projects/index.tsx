import styled from "styled-components";
import { Project } from "./singleProject";
import { SvgLineCircleComponent } from "../0.Components/svgLineCircle";

export interface ISingleProject {
  title: string
  header: string
  description: string
  languages: ILanguage[]
  frameworks:  string[]
  github: string
  external: string
}

export interface ILanguage {
  name: string
  prc: number
}

interface IProjects {
  projectsTag: string
  mainProjectsTag: string
  projectslist:  ISingleProject[]
}

export const Projects: React.FC<IProjects> = ({projectsTag, mainProjectsTag, projectslist}) => {

  return(
    <ProjectsContainer id={projectsTag}>
      <SvgContainerLeft>
        <SvgLineCircleComponent 
          fillCircle="var(--dark-blue)"
          colorCircle="var(--bronze)"
          colorLine="var(--bronze)"
          lineSize={38}
          circleSize="7"
          type="top-right"
        />
        <p>{projectsTag}</p>
      </SvgContainerLeft>
      <SvgContainerMid>
        <SvgLineCircleComponent 
          fillCircle="var(--dark-blue)"
          colorCircle="var(--bronze)"
          colorLine="var(--bronze)"
          lineSize={38}
          circleSize="7"
          type="left-bot"
        />
        <p>{mainProjectsTag}</p>
      </SvgContainerMid>
      {projectslist.map((project, i, arr) => {
        if(i === 0){return <Project key={i} gapTop project={project}/>} 
        if(i === arr.length -1){ return <Project key={i} gapBot project={project}/>}
        return <Project key={i} project={project}/>
      })}
    </ProjectsContainer>
  );
};

const ProjectsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--dark-blue);
  position: relative;
`

const SvgContainerMid = styled.div`
  background-color: var(--dark-blue);
  display: flex;
  align-items: flex-start;
  position: absolute;
  left: calc(50% - 18.7px);
  top: -8.5px;
  z-index: 1;
  > p{
    color: var(--nice-blue);
    font-size: var(--h5-size);
    margin-top: -2.5px;
    @media screen and (max-width: 425px) {
      margin-top: 2.5px;
    }
  }
`

const SvgContainerLeft = styled.div`
  padding-right: 2px;
  background-color: var(--dark-blue);
  display: flex;
  align-items: flex-end;
  position: absolute;
  left: calc(15% - 18.5px);
  top: -20px;
  z-index: 1;
  > p{
    color: var(--nice-blue);
    font-size: var(--h5-size);
    @media screen and (max-width: 425px) {
      margin-bottom: 5px;
    }
  }
`