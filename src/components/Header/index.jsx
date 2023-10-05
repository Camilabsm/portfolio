import "./Header.css"

const Header = () => {
    return (
        <div className="header">
           <nav className="navbar">
            <ul className="navbar-list">
                <li><a href="">Início</a></li>
                <li><a href="">Sobre Mim</a></li>
                <li><a href="">Projetos</a></li>
                <li><a href="">Contato</a></li>
            </ul>
           </nav>
          
        </div>
    )
}

export default Header