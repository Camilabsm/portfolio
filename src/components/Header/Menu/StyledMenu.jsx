import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--background);
  height: 100vh;
  padding: 0;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform;
  transform: ${({ open }) => open ? 'translateX(0%)' : 'translateX(-100%)'};
  

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
    
    @media screen and (max-width: 426px) {
      font-size: 2.5rem;
    }
  }

@media screen and (min-width: 767px) and (max-width: 1023px){
  transform: ${({ open }) => open ? 'translateX(0%)' : 'translateX(-1000%)'};
  width: 40vw;
}

@media screen and (min-width: 1024px){
  transform: ${({ open }) => open ? 'translateX(0%)' : 'translateX(-1000%)'};
  width: 30vw;
}
`;