import "./servicios.css";
import { SiHtmx } from "react-icons/si";
import { IoGlobeOutline } from "react-icons/io5";
import { IoIosPhonePortrait } from "react-icons/io";

const servicios = [
  {
    icon: <SiHtmx />,
    title: "Desarrollo Web",
    desc: "Creamos páginas web modernas, rápidas y optimizadas para convertir visitas en clientes.",
  },
  {
    icon: <IoGlobeOutline />,
    title: "Optimización & SEO",
    desc: "Mejoramos tu presencia online para que te encuentren en Google y generes más consultas.",
  },
  {
    icon: <IoIosPhonePortrait />,
    title: "Diseño Responsive",
    desc: "Tu web se adapta perfectamente a celulares, tablets y computadoras para maximizar resultados.",
  }
];

export default function Servicios() {
  return (
    <section className="servicios" id="servicios">
      <div className="container">
        
        <span className="tag">Servicios</span>

        <h2>
          Webs diseñadas para <br />
          <span className="highlight">generar clientes</span>
        </h2>

        <p className="intro">
          No solo diseñamos páginas web. Creamos herramientas digitales pensadas 
          para hacer crecer tu negocio.
        </p>

        <div className="servicios-grid">
          {servicios.map((servicio, index) => (
            <div className="card" key={index}>
              
              <div className="icon">{servicio.icon}</div>

              <h3>{servicio.title}</h3>
              <p>{servicio.desc}</p>

              <span className="line"></span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}