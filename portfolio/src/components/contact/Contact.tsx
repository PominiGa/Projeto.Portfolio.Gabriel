import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs.sendForm(
      "service_sj975ya",
      "template_4ebn745",
      form.current,
      {
        publicKey: "9ynEPhoxF7tfvqx-s",
      }
    )
    .then(() => {
      alert("Mensagem enviada com sucesso!");
      form.current?.reset();
    })
    .catch((error) => {
      console.log("Erro:", error);
      alert("Erro ao enviar.");
    });
  };

  return (
    <section id="contact">
      <h2>Contato</h2>

      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" required placeholder="Nome" />
        <input type="email" name="user_email" required placeholder="Email" />
        <textarea name="message" required placeholder="Mensagem" />

        <button type="submit">Enviar mensagem</button>
      </form>
    </section>
  );
}