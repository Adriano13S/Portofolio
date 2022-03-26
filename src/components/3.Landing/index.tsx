import styled from "styled-components";
import { Svg } from "../0.Components/svg";

interface ILanding{
  header: string
  text: string
}

export const Landing: React.FC<ILanding> = ({header, text}) => {
  return(
    <LandingContainer>
      <HiContainer>
        <HiImage src='images/robotHi.png' alt="HiFromRobot"/>
        <HiText>
          <HiHeader>
            {header}
          </HiHeader>
          <HiParagraph>
            {text}
          </HiParagraph>
        </HiText>
      </HiContainer>
      <Svg fill="var(--bck-color)" opacity="1" />
    </LandingContainer>
  );
};

const LandingContainer = styled.div`
  width: 100%;
  height: 95vh;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
`
const HiContainer = styled.div`
  height: 70%;
  width: 100%;
  padding: 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const HiImage = styled.img`
  width: 30vmin;
  height: 36vmin;
  z-index: 1;
`
const HiText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: var(--box-width);
`
const HiHeader = styled.h1`
  font-size: var(--h1-size);
  font-weight: bold;
  color: var(--nice-blue);
`
const HiParagraph = styled.p`
  color: var(--grey);
  font-size: var(--h5-size);
`


