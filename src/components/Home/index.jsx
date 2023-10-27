import "./Home.css"
import Button from "./Button"
import Link from "./Link"

const Home = () => {
    return (
        <div className="home">
            <section className="hero-image"> 
                <img src="/images/heropiece.png" alt="Imagem de um computador colorido com notificações de mensagem, código fonte ao redor" />
            </section>
            <section className="home-content">
                <div className="home-text">
                    <p className="sup-text">Olá, eu sou a Camila &#128075; <br></br> Bem vindo(a) ao meu portfólio!</p>
                    <h1 className="main-text">Onde suas <span className="ideas">ideias</span> viram meu <span className="code">código</span></h1>
                    <p className="sec-text">Por meio do desenvolvimento front-end de qualidade, tiro seus projetos do papel (ou do figma) e os transformo em realidade! Vamos começar?</p>
                </div>
                <div className="cta">
                    <Button>Baixe meu CV</Button>
                    <Link url="#contact-me" title="Entre em contato"/>
                </div>
            </section>
        </div>
    )
}

export default Home

