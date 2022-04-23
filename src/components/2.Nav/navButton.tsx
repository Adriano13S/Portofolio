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
  transition: margin 0.2s ease, color 0.3s ease, text-shadow 0.5s ease;
  :hover{
    color: var(--bronze);
    text-shadow:
    0 0 1px var(--bronze),
    0 0 1px var(--bronze),
    0 0 15px var(--bronze)
  }
`