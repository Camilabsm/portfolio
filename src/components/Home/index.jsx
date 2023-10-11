import "./Home.css"
import Button from "./Button"
import Link from "./Link"

const Home = () => {
    return (
        <div className="home">
            <h1 className="slogan">suas ideias, <br></br>meu código</h1>
            <p className="name">Olá, eu sou a Camila &#128075;</p>
            <p className="presentation">Sou uma desenvolvedora front-end especializada em tirar suas ideias do papel (ou do figma) e transformá-las em realidade!</p>
            <div className="cta">
                <Button>Baixe meu CV</Button>
                <Link url="#contact-me" title="Entre em contato"/>
                <Link url="#" title="Veja meus projetos"/>
            </div>
        </div>
    )
}

export default Home

