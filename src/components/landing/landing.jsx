import React from "react";
import "./landing.css";
import { FaWhatsapp } from "react-icons/fa";
import Servicios from "../servicios/servicios";
import FAQ from "../faq/faq";
import Trabajos from "../trabajos/trabajos";
import Hero from "../hero/hero";
import Contact from "../contact/contact";

export default function Home() {
  return (
    <div>
      <a
        href="https://wa.me/5491159726639?text=Hola!%20Quiero%20empezar%20a%20desarrollar%20mi%20web"
        className="whatsapp-float"
        target="_blank"
      >
        <FaWhatsapp />
      </a>
    
      <Hero/>

      <Servicios/>

      <Trabajos/>
      
      <FAQ/>
  

  <section className="comparacion">
      <div className="container">

        <h2>¿Por qué <span className="highlight">AlessoCode?</span></h2>

        <div className="comparacion-grid">

          {/* IZQUIERDA */}
          <div className="box left">
            <h3>Hacerlo por tu cuenta / Tienda Nube</h3>

            <ul>
              <li>❌ Plantillas limitadas y poco personalizables</li>
              <li>❌ Pagos mensuales + comisiones</li>
              <li>❌ Diseño genérico (igual a todos)</li>
              <li>❌ Configuración técnica complicada</li>
              <li>❌ Difícil destacar frente a la competencia</li>
              <li>❌ Dependés de la plataforma</li>
              <li>❌ Resultados inciertos</li>
            </ul>
          </div>

          {/* DERECHA */}
          <div className="box right">
            <h3 className="alessocode">Con AlessoCode</h3>

            <ul>
              <li>✅ Web 100% personalizada para tu negocio</li>
              <li>✅ Sin comisiones ni limitaciones</li>
              <li>✅ Diseño profesional que te diferencia</li>
              <li>✅ Nos encargamos de todo (dominio, hosting, etc.)</li>
              <li>✅ Optimizada para generar clientes</li>
              <li>✅ Total libertad sobre tu web</li>
              <li>✅ Soporte directo por WhatsApp</li>
            </ul>
          </div>

        </div>

      </div>
    </section>

<Contact/>


</div>
    
  );
}
