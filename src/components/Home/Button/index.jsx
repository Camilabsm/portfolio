import "./Button.css"
import CV from "./Camila Matias CV.pdf"

const Button = () => {
    return (
        <a
            href={CV}
            download="CV-document"
            target="_blank"
            rel="noopener noreferrer"
            >
            <button className="button">Baixe meu CV</button>
        </a>
    )
}

export default Button