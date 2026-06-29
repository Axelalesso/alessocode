import './footer.css';
import { FaWhatsapp, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-glow"></div>
      
      <div className="footer-main">
        {/* Columna Marca */}
        <div className="footer-column footer-brand">
          <div className="logo-wrapper">
            <img 
              src="/public/img/logo-alessocode.png" 
              alt="Alesso Code Logo" 
              className="footer-logo"
            />
          </div>
          <p className="footer-description">
            Elevamos tu presencia digital con desarrollo web de calidad.
          </p>
        </div>

        {/* Columna Navegación */}
        <div className="footer-column">
          <span className="footer-tag">SECCIONES</span>
          <ul className="footer-links">
            <li>Inicio</li>
            <li>Clientes</li>
            <li>Nosotros</li>
            <li>Contacto</li>
          </ul>
        </div>

        {/* Columna Contacto y Redes */}
        <div className="footer-column">
          <span className="footer-tag">CONTACTO</span>
          <div className="footer-contact-details">
            <div className="whatsapp-details">
              <FaWhatsapp className="whatsapp-icon-main" />
              <span className="footer-number text-glow">+54 9 11 5972-6639</span>
            </div>
            
            <div className="social-links-container">
              <a href="https://www.instagram.com/alessocode/" target="_blank" rel="noreferrer" className="social-btn">
                <FaInstagram />
              </a>
              <a href="mailto:alessoaxel@gmail.com" className="social-btn">
                <MdOutlineEmail />
              </a>
              <a href="https://www.linkedin.com/in/axel-leonel-alesso-7411612ab/" target="_blank" rel="noreferrer" className="social-btn">
                <FaLinkedinIn />
              </a>
            </div>
            <p className="contact-location">Buenos Aires, Argentina</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copyright">
          © 2026 ALESSOCODE · ESTRATEGIA DIGITAL Y DISEÑO WEB
        </div>
      </div>
    </footer>
  );
}