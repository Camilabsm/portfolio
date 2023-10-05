import "./Home.css"
import Button from "./Button"

const Home = () => {
    return (
        <div className="home">
            <p>sua ideia, meu código</p>
            <p>Olá, eu sou a Camila</p>
            <p>sou uma desenvolvedora front-end especializada em tirar suas ideias do papel (ou do figma) e as transformá-las em realizade!</p>
            <div>
                <a href="">Entre em contato</a>
                <a href="">Veja meus projetos</a>
                <Button>Baixe meu CV</Button>
            </div>
        </div>
    )
}

export default Home