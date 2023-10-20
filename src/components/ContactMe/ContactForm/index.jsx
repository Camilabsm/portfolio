import "./ContactForm.css"

const ContactForm = () => {
    return (
        <div className="contact-form">
            <label className="sup-text" htmlFor="name">Seu nome</label>
            <input required type="text" id="name" name="name" placeholder="Insira seu nome aqui... Ex: Camila Matias" />
            <label className="sup-text" htmlFor="">Seu e-mail</label>
            <input required type="email" id="email" name="email" placeholder="Insira seu email aqui... Ex: seunome@email.com"/>
            <label className="sup-text" htmlFor="message">Mensagem</label>
            <textarea required name="message" id="message" cols="30" rows="10" placeholder="Insira sua mensagem, comentário ou sugestão aqui..."></textarea>
            <a className="send" href="mailto:`{camilabarbosasm@gmail.com}`?body={message}">Enviar</a>
        </div>
    );
}

export default ContactForm;