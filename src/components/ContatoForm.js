import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import '../styles/ContatoForm.css';

const ContatoForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7md0kwf",
        "template_25rxxds",
        form.current,
        "0_JlZr9Qf1JtZ0vbx"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contactForm">
      <h1>Contato</h1>
      <form ref={form} onSubmit={sendEmail}>
        <label>Nome</label>
        <input type="text" name="user_name" />
        <label>E-mail</label>
        <input type="email" name="user_email" />
        <label>Mensagem</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default ContatoForm;