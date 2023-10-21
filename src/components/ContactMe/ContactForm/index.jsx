import "./ContactForm.css"
import { useRef } from "react";
import emailjs from '@emailjs/browser'

const ContactForm = () => {
    const form = useRef()

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_30kw4hn', 'template_80t1rgu', form.current, 'db6fHAIqOnGdHyal5')
        .then((result) => {
            console.log(result.text);
            form.current.reset();
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <label className="sup-text" htmlFor="name">Seu nome</label>
            <input autoComplete="on" required type="text" id="name" name="name" placeholder="Insira seu nome aqui... Ex: Camila Matias" />
            <label className="sup-text" htmlFor="email">Seu e-mail</label>
            <input autoComplete="on" required type="email" id="email" name="email" placeholder="Insira seu email aqui... Ex: seunome@email.com" />
            <label className="sup-text" htmlFor="message">Mensagem</label>
            <textarea required name="message" id="message" cols="30" rows="10" placeholder="Insira sua mensagem, comentário ou sugestão aqui..."></textarea>
            <button type="submit" className="send">Enviar</button>
        </form>
    );
}

export default ContactForm;