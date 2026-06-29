import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import './navbar.css';
import { FaInstagram, FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efecto para cambiar el fondo al hacer scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/" onClick={closeMenu}>
            <img src="/img/logo-alessocode.png" alt="Alesso Code" className="logo-img" />
          </Link>
        </div>

        <div className="menu-hamburguesa" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <div className={`nav-items ${isOpen ? "open" : ""}`}>
          <a href="/" onClick={closeMenu}>Inicio</a>
          <a href="#servicios" onClick={closeMenu}>Servicios</a>
          <a href="#clientes" onClick={closeMenu}>Clientes</a>
          <a href="#preguntas" onClick={closeMenu}>Preguntas</a>
          <a href="#contacto" className="nav-cta" onClick={closeMenu}>Contacto</a>
          
          <div className="nav-social-mobile">
            <a href="https://www.instagram.com/alessocode/" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://wa.me/5491159726639?text=Hola!%20Quiero%20empezar%20a%20desarrollar%20mi%20web" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
          </div>
        </div>

        <div className="nav-social">
          <a href="https://www.instagram.com/alessocode/" target="_blank" rel="noreferrer" className="social-icon-link">
            <FaInstagram />
          </a>
          <a href="https://wa.me/5491159726639?text=Hola!%20Quiero%20empezar%20a%20desarrollar%20mi%20web" target="_blank" rel="noreferrer" className="social-icon-link">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </nav>
  );
}