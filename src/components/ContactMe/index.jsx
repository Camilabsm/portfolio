import "./ContactMe.css"
import ContactForm from "./ContactForm"

const ContactMe = () => {
    return(
        <div className="contact-me" id="contact-me">
            <div className="contact-me-content">
                <p className="sup-text">Contato</p>
                <h2 className="main-text">Entre em contato comigo!</h2>
                <p className="sec-text">Envie uma mensagem pelo formulário a seguir ou me encontre nas redes sociais!</p>
            </div>
                <div className="socials">
                <a href="mailto:camilabarbosasm@gmail.com"><img className="socials-item" alt="Gmail" src="/public/images/gmail.png"/></a>
                <a href="https://www.linkedin.com/in/camilabsmatias/"><img className="socials-item" alt="LinkedIn" src="/public/images/linkedin.png"/></a>
                <a href="https://github.com/Camilabsm"><img className="socials-item" alt="Github" src="/public/images/github.png"/></a>
                <a href="https://www.instagram.com/camilabsm/"><img className="socials-item" alt="Instagram" src="/public/images/instagram.png"/></a>
            </div>
            <ContactForm/>
        </div>
    )
}

export default ContactMe