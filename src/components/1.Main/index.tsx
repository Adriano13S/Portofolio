import styled from 'styled-components';
import { Nav } from '../2.Nav';
import { Landing } from '../3.Landing';
import IChildrenClassName from '../../types/ChildrenClassName';
import { About } from '../4.About';
import { Projects } from '../5.Projects';
import { SecondaryProjects } from '../6.SecondaryProjects';
import { Contact } from '../7.Contact';
import { Footer } from '../8.Footer';
import { SvgSignature } from '../0.Components/svgSignature';
import content from '../../xcontent.json'



export const App: React.FC<IChildrenClassName> = ({className}) => {
  const navOptions: string[] = Object.keys(content.data.pages);
  //TODO: Add glow behind main project detalis (behind robot or project details)
  //TODO: Add glow to secondary projects icons (github and external link), make them obv to click
  //TODO: Add transition to Other Projects
  //TODO: Add transition and details to skills -> number of projects and other details !!!!!!!!!!!!!!!!!
  //TODO: Mobile view prevent side nav from beeing seen on transition to mobile view - no real necesity
  //TODO: Mobile view, fix border 'overflow' on Projects cotainer - f not bug maybe
  //TODO: Set Navbar color / blur
  //TODO: Maybe increase margin on projects off view, on mobile

  return (
    <Main className={className}>
      <LandingOverlay>
        <SvgSignature
          width='100%'
          height='100%'
          color='var(--nice-blue)'
          strokeWidth='1.12'
        />
      </LandingOverlay>
      <Nav options={navOptions} />
      <ContentContainer>
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
      </ContentContainer>
    </Main>
  );
};

const Main = styled.section`
  display: flex;
  flex-direction: column;
`;

const LandingOverlay = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  display: flex;
  background-color: var(--dark-blue);
  z-index: 3;
  display: none;
  path {
    
  }
`
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`


