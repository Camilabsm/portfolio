import { StyledMenu } from './StyledMenu';
import { bool, func } from 'prop-types';

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open} onClick={() => setOpen(!open)}>
      <a href="#about-me">Sobre mim</a>
      <a href="#projects">Projetos</a>
      <a href="#contact-me">Contato</a>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired
}

export default Menu;