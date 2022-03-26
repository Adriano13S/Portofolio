import styled from "styled-components";

export const SingleSecondaryProject: React.FC = () => {
  return(
    <SingleSecondaryProjectContainer>
      <Header>
        <Link href="#">
          <img src="/images/external-link.png" alt="tag-node" />
        </Link>
        <Link href="#">
          <img src="/images/github.png" alt="tag-node" />
        </Link>
      </Header>
      <Title>Time to Have More Fun</Title>
      <Description>A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS</Description>
      <TechContainer>
        <p>Javascript</p>
        <p>Javascript</p>
        <p>Javascript</p>
      </TechContainer>
    </SingleSecondaryProjectContainer>
  );
};



const SingleSecondaryProjectContainer = styled.div`
  min-width: 35vh;
  min-height: 22vh;
  padding: 1%;
  border-radius: 1.5%;
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 5vh;
  flex-direction: column;
  background: var(--gradient-avg-blue-dark-blue);
  box-shadow: var(--main-box-shadow);
  z-index: 1;
  &:hover {
    transform: scale(1.02);
  }
`

const Header = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Link = styled.a`
display: flex;
align-items: center;
justify-content: center;

> img{
  width: 30px;
  height: 30px;
}
`
const Title = styled.h1`
  max-width: 35vh;
  color: var(--nice-blue);
  font-size: var(--h5-size);
`
const Description = styled.p`
  max-width: 35vh;
  color: var(--grey);
  font-size: var(--p-size);
`
const TechContainer = styled.div`
  max-width: 35vh;
  min-width: 35vh;
  height: 15%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  color: var(--bronze);
  > p{
    font-size: var(--p-size);
  }
`