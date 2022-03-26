import styled from 'styled-components';
import { NavButton } from './navButton';

interface INav{
  options: string[]
}

export const Nav: React.FC<INav> = ({options}) => {
  return(
    <NavContainer>
      <NavLeft>
        <NavButton text='Resume' href='#' />
      </NavLeft>
      <NavRight>
        {options.map((op) => <NavButton key={op} text={op} href={`#${op}`}/>)}
      </NavRight>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  height: 5vh;
  display: flex;
  width: 100%;
`
const NavLeft = styled.div`
  display: flex;
  flex: 1;
`
const NavRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row-reverse;
`