import styled from 'styled-components';

interface INavButton {
  className?: string
  text: string
  href: string
}

export const NavButton: React.FC<INavButton> = ({className, text, href}) => {

  return(
    <Button href={href} type='button' className={className}>
      {text}
    </Button>
  );
};

const Button = styled.a`
  cursor: pointer;
  background-color: transparent;
  font-size: 1.5em;
  color: var(--nice-blue);
  border: none;
  padding: 5px;
  margin: 2% 8% 2% 4%;
`