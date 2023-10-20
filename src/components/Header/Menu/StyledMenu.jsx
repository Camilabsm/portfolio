import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--background);
  height: 100vh;
  width: 20vw;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0%)' : 'translateX(100%)'};
  

  .menu-icon{
    fill: var(--primary-text);
    width: 2rem;
  }

  @media screen and (max-width: 426px) {
    width: 100%;
  }

  a {
    font-family: 'Outfit', sans-serif;
    font-size: 3rem;
    padding: 2rem 0;
    text-transform: uppercase;
    letter-spacing: 1rem;
    color: var(--primary-text);
    transition: color 0.3s linear;
    padding-left: 2rem;
    
    @media screen and (max-width: 321px) {
      font-size: 2.5rem;
    }
  }
`;