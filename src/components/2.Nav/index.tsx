import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { NavButton } from './navButton';

interface INav{
  options: string[]
};

// document.body.scrollHeight - window.innerHeight // scroll y refference to bottom
export const Nav: React.FC<INav> = ({options}) => {
  const [navSide, setNavSide] = useState(false);
  const position = useRef(0);
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > position.current){
        setShowNav(false);
      }else{
        setShowNav(true);
      }
      position.current = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return(
    <NavContainer showNav={showNav}>
      <NavLeft>
        <NavButton text='Resume' href='#' />
      </NavLeft>
      <NavHam showNav={showNav}>
        <InputHam type='checkbox' onClick={()=> setNavSide(!navSide)}/>
        <span></span>
        <span></span>
        <span></span>
      </NavHam>
      <NavRight open={navSide} showNav={showNav}>
        {options.map((op) => <NavButton key={op} text={op} href={`#${op}`}/>)}
      </NavRight>
    </NavContainer>
  );
};

const NavContainer = styled.div<{showNav:boolean}>`
  height: 5vh;
  display: flex;
  width: 100%;
  top: ${props => props.showNav ? '0': '-5vh'};
  z-index: 4;
  box-shadow: 0 1px 15px -12px gray;
  transition: 0.2s ease;
  position: fixed;
  backdrop-filter: blur(2px);
`

const NavLeft = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 920px) {
    justify-content: inherit;
    > a{
      margin: 0 0 0 10px;
    }
  }
`
const NavRight = styled.div<{open:boolean; showNav:boolean}>`
  flex: 7;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  @media screen and (max-width: 920px) {
    flex: 1;
    flex-direction: column;
    height: 105.5vh;
    margin-right: -100%;
    transition: margin-right 0.5s ease;
    margin-right: ${props => props.open? '0' : '-100%'};
    z-index: 3;
    background-color: var(--avg-blue);
    a{
      margin-top: 20vh;
    }
    a:first-child {
      margin-top: ${props => props.showNav ? '25vh': '30vh'};
    }
  }
`

const NavHam = styled.div<{showNav:boolean}>`
  display: none;
  & span:nth-child(3){
    transition: 0.5s;
    width: 40px;
    height: 4px;
    background-color: var(--nice-blue);
    margin-top: 4px;
    border-radius: 2px;
  }
  & span:nth-child(2){
    transition: 0.5s;
    content: " ";
    width: 50px;
    height: 4px;
    background-color: var(--nice-blue);
    margin-top: 4px;
    border-radius: 2px;
  }
  & span:nth-child(4){
    transition: 0.5s;
    content: " ";
    width: 50px;
    height: 4px;
    background-color: var(--nice-blue);
    margin-top: 4px;
    border-radius: 2px;
  }
  @media screen and (max-width: 920px) {
    position: absolute;
    top: calc(${props => props.showNav ? '2.5vh': '7.5vh'} - 11px);
    right: 10px;
    transition: 0.2s;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
    flex: 1;
    z-index: 4;
  }
`
const InputHam = styled.input`
  opacity: 0;
  cursor: pointer;
  position: absolute;
  top: 0px;
  right: -5px;
  width: 60px;
  height: 100%;
  z-index: 5;
  &:checked {
    & + span{
      transform: translateY(12px) rotate(135deg);
      & + span{
        transform: scale(0);
        & + span{
          transform: translateY(-12px) rotate(-135deg);
        }
      }
    }
  }
`