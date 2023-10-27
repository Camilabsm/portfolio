import "./AboutMe.css"
import TechSkills from "./TechSkills"

const AboutMe = () => {
    return (
        <div className="about-me" id="about-me">
            <p className="sup-text">Sobre mim</p>
            <h2 className="main-text">Da engenharia à tecnologia</h2>
            <p className="sec-text">Me chamo Camila, sou de Fortaleza - CE, atualmente sou granduanda em Análise e Desenvolvimento de Sistemas e desenvolvedora front-end em formação. Tenho graduação em engenharia química, pós graduação em gestão da qualidade e produtividade e alguns anos de carreira em qualidade industrial, mas, em 2022, decidi dar uma virada de chave na minha vida: estava na hora de migrar para a área de tecnologia.</p>
            <p className="sec-text">Atualmente estou aprofundando meus conhecimentos em JavaScript e dando meus primeiros passos com ReactJS (um desses passos, por exemplo, é esse portfolio!). Adoro quebrar um pouco a cabeça aprendendo coisas novas, vibro intensamente quando o código dá certo de primeira e sou apaixonada por café. Quando não estou codando, estou jogando no meu switch ou lendo livros no meu kindle.</p>
            <TechSkills/>
        </div>
    )
}

export default AboutMe