import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sj975ya",
        "template_4ebn745",
        form.current,
        {
          publicKey: "9ynEPhoxF7tfvqx-s",
        }
      )
      .then(() => {
        alert("Mensagem enviada com sucesso!");
        form.current.reset();
      })
      .catch((error) => {
        console.log("Erro:", error);
        alert("Erro ao enviar.");
      });
  };

  return (
    <section
      id="contact"
      className="max-w-xl mx-auto px-6 py-20 text-center"
    >
      <h2 className="text-2xl font-semibold mb-8">Contato</h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Nome"
          required
          className="input"
        />

        <input
          type="email"
          name="user_email"
          placeholder="E-mail"
          required
          className="input"
        />

        <textarea
          name="message"
          placeholder="Mensagem"
          required
          className="input md:col-span-2 textarea"
        />

        <button
          type="submit"
          className="btn md:col-span-2"
        >
          Enviar mensagem
        </button>
      </form>
    </section>
  );
}