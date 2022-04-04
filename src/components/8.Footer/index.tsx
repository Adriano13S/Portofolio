import styled from "styled-components";
import { Svg } from "../0.Components/svg";

export const Footer: React.FC = () => {
  return(
    <FooterContainer>
      <Svg2 fill="var(--bck-color)" opacity="1" />
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  width: 100%;
  // height: 100%;
  position: relative;
  padding-bottom: 670px;
  @media screen and (max-width: 1440px) {
    padding-bottom: 400px;
  }
  @media screen and (max-width: 730px) {
    padding-bottom: 200px;
  }
`

const Svg2 = styled(Svg)`
  top: 21vw;
  transform-origin: 0 0;
  transform: scale(1,-1);
  position: absolute;
`