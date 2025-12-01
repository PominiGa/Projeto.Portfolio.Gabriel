import React from 'react'

export default function Contact(){
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contato</h2>
        <form className="contact-form" onSubmit={e => { e.preventDefault(); alert('Mensagem enviada (simulada)')}}>
          <input aria-label="Nome" placeholder="Seu nome" />
          <input aria-label="Email" placeholder="seu@exemplo.com" type="email" />
          <textarea aria-label="Mensagem" placeholder="Escreva sua mensagem"></textarea>
          <button className="cta" type="submit">Enviar</button>
        </form>
      </div>
    </section>
  )
}
