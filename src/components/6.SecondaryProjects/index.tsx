import styled from "styled-components";
import { SingleSecondaryProject } from "./singleSecondaryProject";
import { SvgLineCircleComponent } from "../0.Components/svgLineCircle";

export const SecondaryProjects: React.FC = () => {
  return(
    <SecondaryProjectsContainer>
      <SvgContainerMid>
        <SvgLineCircleComponent 
          fillCircle="var(--dark-blue)"
          colorCircle="var(--bronze)"
          colorLine="var(--bronze)"
          lineSize={38}
          circleSize="7"
          type="top-right"
        />
        <p>Main Projects</p>
      </SvgContainerMid>
      <SvgContainerRight>
        <p>Projects</p>
        <SvgLineCircleComponent 
          fillCircle="var(--dark-blue)"
          colorCircle="var(--bronze)"
          colorLine="var(--bronze)"
          lineSize={38}
          circleSize="7"
          type="left-bot"
        />
      </SvgContainerRight>
      <SvgContainerRightTwo>
        <p>Other Projects</p>
        <SvgLineCircleComponent 
          fillCircle="var(--dark-blue)"
          colorCircle="var(--nice-blue)"
          colorLine="var(--nice-blue)"
          lineSize={38}
          circleSize="7"
          type="left"
        />
      </SvgContainerRightTwo>
      <SecondaryProjectsContent>
        <SingleSecondaryProject />
        <SingleSecondaryProject />
        <SingleSecondaryProject />
      </SecondaryProjectsContent>
    </SecondaryProjectsContainer>
  );
};

const SecondaryProjectsContainer = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--dark-blue);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  :before {
    content: "";
    width: 2.5px;
    height: 100%;
    display: block;
    position: absolute;
    background-color: var(--bronze);
    right: 15%;
    bottom: 0;
    z-index: 1;
  }
`

const SecondaryProjectsContent = styled.div`
  margin-top: 25vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  width: 70%;
  height: 100%;
`

const SvgContainerMid = styled.div`
  padding-right: 2px;
  background-color: var(--dark-blue);
  display: flex;
  align-items: flex-end;
  position: absolute;
  left: calc(50% - 18.5px);
  top: -22px;
  z-index: 1;
  > p{
    color: var(--nice-blue);
    font-size: var(--h5-size);
    @media screen and (max-width: 1024px) {
      display: none;
    }
  }
`

const SvgContainerRight = styled.div`
  padding-left: 3px;
  background-color: var(--dark-blue);
  display: flex;
  align-items: flex-start;
  position: absolute;
  right: calc(15% - 17px);
  top: -10px;
  z-index: 2;
  > p{
    color: var(--nice-blue);
    font-size: var(--h5-size);
    margin-top: -4px;
    @media screen and (max-width: 425px) {
      margin-top: 2px;
    }
  }
`
const SvgContainerRightTwo = styled.div`
  background-color: var(--dark-blue);
  padding: 2px 0 2px 0; 
  display: flex;
  align-items: center;
  position: absolute;
  right: calc(15% - 17px);
  top: 16%;
  z-index: 2;
  > p{
    color: var(--nice-blue);
    font-size: var(--h5-size);
    margin-right: 5px;
  }
`