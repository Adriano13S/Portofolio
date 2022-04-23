import styled from "styled-components";
import { Project } from "./singleProject";
import { SvgLineCircleComponent } from "../0.Components/svgLineCircle";
import { useState, useEffect } from "react";

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

interface Istate {
  [key: string]: boolean
}

export const Projects: React.FC<IProjects> = ({projectsTag, mainProjectsTag, projectslist}) => {

  const [showProject, setShowProject] = useState<Istate>({});
  
  useEffect(() => {
    const handleScroll = () => {
      const updatedState: Istate = {};
      document.querySelectorAll('.project').forEach(el => {
        const toTop = el.getBoundingClientRect().top;
        if(toTop < 500 && toTop > -300){
          updatedState[el.id] = true;
        }else{
          updatedState[el.id] = false;
        }
      });
      if(JSON.stringify(showProject) !== JSON.stringify(updatedState)){
        setShowProject(updatedState);
      };
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showProject]);

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
        if(i === 0){
          return <Project key={i} gapTop project={project} showProject={showProject[project.title]}/>
        } 
        if(i === arr.length -1){
           return <Project key={i} gapBot project={project} showProject={showProject[project.title]}/>
        }
        return <Project key={i} project={project} showProject={showProject[project.title]}/>
      })}
    </ProjectsContainer>
  );
};

const ProjectsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: var(--dark-blue);
  position: relative;
`

const SvgContainerMid = styled.div`
  background-color: var(--dark-blue);
  display: flex;
  align-items: flex-start;
  position: absolute;
  left: calc(50% - 18.5px);
  top: -8px;
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