import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_m5cbyhq",
      "template_vecd2i8",
      form.current,
      "wMQMLOgua1I6JIeP9"
    );

    e.target.reset();
    alert("Mensaje enviado correctamente");
  };

  return (
    <section className="contacto" id="contacto">
      <div className="contacto-container">

        <span className="contacto-tag">
          Contacto
        </span>

        <h2 id="contacto" >
          ¿Listo para conseguir más  <span className="highlight">clientes?</span>
        </h2>

        <p>
          Contanos sobre tu negocio y te mostraremos cómo una web profesional puede ayudarte a crecer.
        </p>

        <form ref={form} onSubmit={sendEmail}>

          <input
            type="text"
            name="user_name"
            placeholder="Tu nombre"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Tu email"
            required
          />

          <input
            type="text"
            name="user_phone"
            placeholder="Teléfono (opcional)"
          />

          <input
            type="text"
            name="company"
            placeholder="Empresa o emprendimiento"
          />

          <textarea
            name="message"
            placeholder="Contame qué necesitás..."
            rows="6"
            required
          />

          <button type="submit">
            Solicitar presupuesto →
          </button>

        </form>

      </div>
    </section>
  );
}