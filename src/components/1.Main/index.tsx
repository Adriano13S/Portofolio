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



export const App: React.FC<IChildrenClassName> = ({className}) => {
  //TODO: Add transition and details to skills -> number of projects and other details (on hold for now)
  //TODO: Mobile view prevent side nav from beeing seen on transition to mobile view - no real a necesity
  //TODO: Mobile view, fix border 'overflow' on Projects cotainer - f not bug maybe

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
      <Nav  />
      <ContentContainer>
        <Landing 
         
        />
        <About
          
        />
        
        <Projects
          
        />
        <SecondaryProjects />
        
        <Contact
         
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


