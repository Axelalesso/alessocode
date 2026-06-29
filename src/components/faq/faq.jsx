import { useState } from "react";
import "./faq.css";

const faqs = [
  {
    question: "¿Cuánto tarda en estar lista mi página web?",
    answer: "El tiempo promedio es de 7 a 15 días dependiendo del proyecto. Trabajamos rápido sin sacrificar calidad."
  },
  {
    question: "¿La web me va a traer clientes?",
    answer: "Sí. Diseñamos cada página enfocada en conversión: estructura, llamados a la acción y velocidad optimizada."
  },
  {
    question: "¿Incluye hosting y dominio?",
    answer: "Podemos encargarnos de todo: dominio, hosting y configuración para que no tengas que preocuparte por nada."
  },
  {
    question: "¿Puedo editar la web después?",
    answer: "Sí. Te damos acceso o nos encargamos nosotros de los cambios según el plan que elijas."
  },
  {
    question: "¿La web funciona bien en celular?",
    answer: "Totalmente. Todas nuestras webs son 100% responsive y optimizadas para móviles."
  },
  {
    question: "¿Qué pasa después de que la web esté online?",
    answer: "Podés seguir trabajando con nosotros en mantenimiento, mejoras o marketing digital para escalar resultados."
  }
];

export default function FAQ() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="container">

        <h2 id="preguntas"  className="faq-tag">Preguntas frecuentes</h2>
        <p className="subtitle">
          Todo lo que necesitás saber antes de empezar
        </p>

        <div className="faq-list">
          {faqs.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${active === index ? "active" : ""}`}
              onClick={() => toggle(index)}
            >
              <div className="faq-question">
                {item.question}
                <span className="icon">{active === index ? "−" : "+"}</span>
              </div>

              <div className="faq-answer">
                {item.answer}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}