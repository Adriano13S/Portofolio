import styled from "styled-components";
import { Svg } from "../0.Components/svg";
import { SvgLineCircleComponent } from "../0.Components/svgLineCircle";

interface IContact {
  tag: string
  header: string
  text: string
  mailbox: string
}

export const Contact: React.FC<IContact> = ({tag, header, text, mailbox}) => {
  return(
    <ContactContainer id='Contact'>
      <Svg2 fill="var(--dark-blue)" opacity="1" />
      <ContactContent>
        <SvgContainerRight>
          <p>Contact</p>
          <SvgLineCircleComponent 
            fillCircle="var(--bck-color)"
            colorCircle="var(--nice-blue)"
            colorLine="var(--nice-blue)"
            lineSize={38}
            circleSize="7"
            type="left"
          />
        </SvgContainerRight>
        <ContactContentHeader>Get In Touch</ContactContentHeader>
        <ContactContentText>I’m currently looking for any new opportunities,
           my inbox is always open. Whether you have a question or a proposal,
            I’ll try my best to get back to you!
        </ContactContentText>
        <ContactContentButton href="mailto:adr.dev.mass@gmail.com" target="_blank">
          <div>Mail</div>
        </ContactContentButton>
      </ContactContent>
      <RobotMail src="/images/robot3.png" alt="contact-robot"/>
    </ContactContainer>
  );
};

const ContactContainer = styled.div`
  width: 100%;
  height: 90vh;
  position: relative;
  background-color: var(--bck-color);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  // :before {
  //   content: "";
  //   width: 2.5px;
  //   height: 45%;
  //   display: block;
  //   position: absolute;
  //   background-color: var(--bronze);
  //   right: 15%;
  //   bottom: 0;
  //   z-index: 1;
  //   @media screen and (max-width: 425px) {
  //     height: 68%;
  //   }
  // }
  :after {
    content: "";
    width: 2.5px;
    height: 53%;
    display: block;
    position: absolute;
    background-color: var(--bronze);
    right: 15%;
    top: 0;
    z-index: 1;
    @media screen and (max-width: 425px) {
      height: 28%;
    }
  }
`

const Svg2 = styled(Svg)`
  top: 21vw;
  transform-origin: 0 0;
  transform: scale(1,-1);
  position: absolute;
`
const ContactContent = styled.div`
  margin-top: 8%;
  width: var(--box-width);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`
const ContactContentHeader = styled.h1`
  margin: 10%;
  font-size: var(--h1-size);
  color: var(--nice-blue);
  word-spacing: -5px;
`

const ContactContentText = styled.p`
  color: var(--grey);
  font-size: var(--h5-size);
  >p{
    text-align: center;
  }
`

const ContactContentButton = styled.a`
  flex-direction: column;
  font-size: 1.45rem;
  color: var(--nice-blue);
  margin: 95px 0 95px 0;
  width: 200px;
  height: 100px;
  border-radius: 10px;
  box-shadow: var(--main-box-shadow);
  z-index: 2;
  transition: background-color 0.5s ease, color 0.5s ease;
  >div{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  &:hover {
    background-color: var(--nice-blue);
    color: var(--bck-color);
  }
`

const RobotMail = styled.img`
  position: absolute;
  width: 300px;
  height: 350px;
  z-index: 1;
  top: 80%;
  left: 49.5%;
  @media screen and (max-width: 730px) {
    top: 75%;
    left: 56%;
    width: 180px;
    height: 240px;
  }
`

const SvgContainerRight = styled.div`
  background-color: var(--bck-color);
  display: flex;
  align-items: center;
  position: absolute;
  right: calc(15% - 17px);
  top: 47.7vh;
  z-index: 1;
  > p{
    color: var(--nice-blue);
    font-size: var(--h5-size);
    margin-right: 5px;
  }
  @media screen and (max-width: 425px) {
    top: 25vh;
  }
`