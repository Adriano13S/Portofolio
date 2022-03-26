import styled from 'styled-components';
import { Nav } from '../2.Nav';
import { Landing } from '../3.Landing';
import IChildrenClassName from '../../types/ChildrenClassName';
import { About } from '../4.About';
import { Projects } from '../5.Projects';
import { SecondaryProjects } from '../6.SecondaryProjects';
import { Contact } from '../7.Contact';
import { Footer } from '../8.Footer';
import content from '../../xcontent.json'
import { createContext } from 'react';

export const ProjectContext = createContext(content.data.pages.Projects)

export const App: React.FC<IChildrenClassName> = ({className}) => {

  const navOptions = Object.keys(content.data.pages);

  return (
    <Main className={className}>
      <DoorsContainer style={{'display':'none'}}>
        <DoorLeft/>
        <Bubble>
          <SmallBubble />
        </Bubble>
        <DoorRight/>
      </DoorsContainer>
      <Nav options={navOptions}/>
      <Landing 
        header={content.data.landing_text.header}
        text={content.data.landing_text.text}
      />
      <About
        tag={content.data.pages.About.tag}
        aboutMe={content.data.pages.About.aboutMe}
        mySkills={content.data.pages.About.mySkills}
       />
      
      <Projects
        projectsTag={content.data.pages.Projects.tag}
        mainProjectsTag={content.data.pages.Projects.mainProjects.tag}
        projectslist = {content.data.pages.Projects.mainProjects.projects}
       />
      <SecondaryProjects />
      
      <Contact
        tag={content.data.pages.Contact.tag}
        header={content.data.pages.Contact.header}
        text={content.data.pages.Contact.text}
        mailbox={content.data.pages.Contact.mailbox}
      />
      <Footer />
    </Main>
  );
};

const Main = styled.section`
  display: flex;
  flex-direction: column;
`;


const DoorsContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  overflow: hidden;
  z-index: 10;
`

const Bubble = styled.div`
  cursor: pointer;
  width: 180px;
  height: 180px;
  margin-left: calc(50vw - 90px);
  margin-top: calc(50vh - 90px);
  clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--nice-blue);
`

const SmallBubble = styled.input`
  width: 80%;
  height: 80%;
  clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
  background-color: var(--dark-blue);
`

const DoorLeft = styled.div`
  flex: 1;
  border-right: solid 1px var(--bronze);
  background-color: var(--dark-blue);
  transition: margin-right 1.5s linear;
`
const DoorRight = styled.div`
  flex: 1;
  border-left: solid 1px var(--bronze);
  background-color: var(--dark-blue);
  transition: margin-left 1.5s linear;
  ${Bubble}:hover + & {
    margin-left: 100vw;
  }
`

