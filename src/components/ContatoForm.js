import React from 'react'
import '../styles/Global.css';
import '../styles/ContatoForm.css';

function ContatoForm() {
  return (
    <div className='contactForm'>
      <h1 className='titulo'>Fale comigo</h1>
      <form action="https://formsubmit.co/bruno.arrm@gmail.com" method='POST' className='formulario'>
        <input type="text" name="Nome" placeholder="Seu nome" className="input" required></input>
        <input type="email" name="Email" placeholder="Seu email" className="input" required></input>
        <select name="tipo" className="input">
          <option>Eu sou um Recrutador</option>
          <option>Eu sou um Estudante</option>
        </select>
        <textarea name="Mensagem" placeholder='Deixe sua mensagem aqui'className="input" id='mensagem' required></textarea>
        <button type='submit'className="input" id="botao">Enviar</button>
      </form>
    </div>
  )
}

export default ContatoForm