import styled from 'styled-components';
import { Svg } from '../0.Components/svg';
import { SvgLineCircleComponent } from '../0.Components/svgLineCircle';
import content from '../../xcontent.json'


export const About: React.FC = () => {

  const tag = content.data.pages.About.tag;
  const aboutMe = content.data.pages.About.aboutMe;
  const mySkills= content.data.pages.About.mySkills;

  return(
    <AboutContainer id={tag}>
      <SvgContainerLeftOne>
        <SvgLineCircleComponent 
          fillCircle="var(--bck-color)"
          colorCircle="var(--nice-blue)"
          colorLine="var(--nice-blue)"
          lineSize={38}
          circleSize="7"
          type="right"
        />
        <p>{aboutMe.tag}</p>
      </SvgContainerLeftOne>
      <SvgContainerLeftTwo>
        <SvgLineCircleComponent 
          fillCircle="var(--bck-color)"
          colorCircle="var(--nice-blue)"
          colorLine="var(--nice-blue)"
          lineSize={38}
          circleSize="7"
          type="right"
        />
        <p>{mySkills.tag}</p>
      </SvgContainerLeftTwo>
      <AboutTextContainer>
        <AboutText>
          <p>{aboutMe.text}</p>
        </AboutText>
      </AboutTextContainer>
      <AboutSkillsContainer>
        {mySkills.skills.map((skill) => { 
          return(
          <SkillContainer>
            <AboutSkillImage src={`/images/${skill}.png`} alt={skill} key={skill} />
            <AboutSkill></AboutSkill>
          </SkillContainer>
          )
        })}
      </AboutSkillsContainer>
      <Svg fill="var(--dark-blue)" opacity="1"/>
    </AboutContainer>
  );
};


const AboutContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: var(--bck-color);
  :before {
    content:' ';
    width: 2.5px;
    height: 100%;
    display: block;
    position: absolute;
    background-color: var(--bronze);
    left: 15%;
    bottom: 0;
    z-index: 1;
  }
`

const AboutTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`
const AboutText = styled.div`
  width: var(--box-width);
  height: 35vh;
  padding-left: 4vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--nice-blue);
  font-size: var(--h5-size);
  border-radius: 10px;
  white-space: pre-line;
`
const AboutSkillsContainer = styled.div`
  margin-top: 2%;
  height: 50%;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  @media screen and (max-width: 1024px) {
    align-items: center;
  }
`

const SkillContainer = styled.div`
  width: var(--skill-size);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2vmin;
`

const AboutSkillImage = styled.img`
  width: var(--skill-size);
  height: var(--skill-size);
  margin: 2vmin;
`

const AboutSkill = styled.div`
`


const SvgContainerLeftOne = styled.div`
  background-color: var(--bck-color);
  display: flex;
  align-items: center;
  position: absolute;
  left: calc(15% - 18px);
  top: -10px;
  z-index: 2;
  > p{
    margin-left: 5px;
    color: var(--nice-blue);
    font-size: var(--h5-size);
  }
`
const SvgContainerLeftTwo = styled.div`
  background-color: var(--bck-color);
  display: flex;
  align-items: center;
  position: absolute;
  left: calc(15% - 18px);
  top: 34.2vh;
  z-index: 2;
  > p{
    margin-left: 5px;
    color: var(--nice-blue);
    font-size: var(--h5-size);
  }
`
// const AboutImage