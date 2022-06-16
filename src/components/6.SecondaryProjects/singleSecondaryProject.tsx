import styled from "styled-components";

interface ISecondaryProject{
  title: string
  description: string
  tools: string[]
  github: string
  external: string
}

interface ISingleSecondaryProject{
  project: ISecondaryProject
}

export const SingleSecondaryProject: React.FC<ISingleSecondaryProject> = ({project}) => {
  return(
    <SingleSecondaryProjectContainer>
      <Header>
        <Link href={project.external} target="_blank">
          <img src="/images/external-link.png" alt="tag-node" />
        </Link>
        <Link href={project.github} target="_blank">
          <img src="/images/github.png" alt="tag-node" />
        </Link>
      </Header>
      <Title>{project.title}</Title>
      <Description>{project.description}</Description>
      <TechContainer>
        {project.tools.map((tool) => <p>{tool}</p>)}
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
  transition: transform 0.2s ease-out;
}
`

const Header = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a:nth-of-type(2) {
    >img{
      border-radius: 50%;
      animation: blink 1s infinite alternate;
      @keyframes blink {
        100% {
          box-shadow: 0 0 var(--spred1) var(--anim-hover-color);
        }
      }
    }
  }
  a:nth-of-type(1) {
    >img{
      animation: blink2 1s infinite alternate;
      @keyframes blink2 {
        100% {
          box-shadow: 7.5px -7.5px var(--spred2) -6px var(--anim-hover-color);
        }
        0% {
          box-shadow: 7.5px -7.5px 0px -10px var(--anim-hover-color);
        }
      }
    }
  }
`

const Link = styled.a`
display: flex;
align-items: center;
justify-content: center;
> img{
  --anim-hover-color: #0ba9ca;
  --spred1: 10px;
  --spred2: 5px;
  width: 30px;
  height: 30px;
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.2);
    --spred1: 15px;
    --spred2: 8px;
    --anim-hover-color: #d75800;
  }
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
  white-space: pre-line;
  vertical-align: bottom;
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