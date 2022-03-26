import styled from "styled-components";
import { ILanguage } from ".";

interface IDetails {
  languages: ILanguage[]
  frameworks: string[]
  github: string
  external: string
}

export const ProjectDetails: React.FC<IDetails> = ({languages, frameworks, github, external}) => {
  return(
    <ProjectDetailsContainer>
      <ProjectRobotImage src="/images/robot1.png" alt="projectRobot" />
      <ProjectLanguagesTags>
        <h5>Languages</h5>
        {languages.map((lang, i) => 
          <LanguageTag key={i}>
            <img src={`/images/${lang.name}.png`} alt={lang.name} />
            <LanguageTagProgressBar width={lang.prc}>
              <div></div>
            </LanguageTagProgressBar>
            <p>{lang.prc}%</p>
          </LanguageTag>
        )}
      </ProjectLanguagesTags>
      <ProjectFrameworksTags>
        <h5>Frameworks / Libraries</h5>
        {frameworks.map((frame, i) => 
        <FrameworkTag key={i}>
          <img src={`/images/${frame}.png`} alt={frame} />
        </FrameworkTag>
        )}
      </ProjectFrameworksTags>
      <ProjectDetailsLinks>
        <Link href={github}>
            <img src="/images/github.png" alt="tag-node" />
            <p>Github</p>
        </Link>
        <Link href={external}>
            <img src="/images/external-link.png" alt="tag-node" />
            <p>External Link</p>
        </Link>
      </ProjectDetailsLinks>
    </ProjectDetailsContainer>
  );
};


const ProjectDetailsContainer = styled.div`
  min-width: 30%;
  min-height: 35vh;
  padding: 1%;
  border-radius: 1.5%;
  position: relative;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  background: var(--gradient-avg-blue-dark-blue);
  box-shadow: var(--main-box-shadow);
  // opacity: 0.4;
  // margin-right: -80%;
  opacity: 1;
  margin-right: 0;
  transition: margin-right 0.5s ease, opacity 1.5s ease;
  h5{
    margin-bottom: 10px;
    font-size: var(--p-size);
    width: 100%;
    color: var(--bck-color);
    background-size: 20%;
    background-image: var(--text-gradient-nice-blue-bronze);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
  }
`

const ProjectRobotImage = styled.img`
  position: absolute;
  width: 200px;
  z-index: 2;
  top: 30px;
  right: -140px;
  transform: scale(-1, 1);
  @media screen and (max-width: 768px) {
    display: none;
  }
`

const ProjectLanguagesTags = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 730px) {
    justify-content: flex-start;
  }
` 
const ProjectFrameworksTags = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
` 

const FrameworkTag = styled.div`
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  > img {
    width: var(--pimage-size);
    height: var(--pimage-size);;
    margin: 0.6vmin;
  }
`

const LanguageTag = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  > img {
    width: var(--pimage-size);
    height: var(--pimage-size);
    margin: 0.6vmin;
  }
  > p {
    font-size: 0.7rem;
    margin: 5px;
    color: var(--bck-color);
  }
`

const LanguageTagProgressBar = styled.div<{width: number}>`
  height: 9px;
  width: 80%;
  background-color:black;
  display:flex;
  align-items: center;
  justify-content: flex-start;
  border-radius:6px;
  > div {
    height:2px;
    width: ${props  => props.width}%;
    background: var(--text-gradient-nice-blue-bronze);
    border-radius: 2px;
    margin: 0 4px 0 4px;
  }
`

const ProjectDetailsLinks = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`

const Link = styled.a`
  cursor: pointer;
  padding: 5px;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1e9ddc38;
  border-radius: 5px;
  box-shadow: 0 2px 4px black;
  &:hover {
    transform: scale(1.03);
  }
  > img {
    width: var(--linkimage-size);
    height: var(--linkimage-size);
    margin: 5px;
  }
  > p {
    font-weight: bold;
    font-size: var(--p-size);
    margin: 5px;
    color: var(--bck-color);
  }
`