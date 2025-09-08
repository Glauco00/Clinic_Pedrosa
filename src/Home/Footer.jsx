import React from "react";
import "./App.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-contact">
        <h3>Contato</h3>
        <div className="footer-contact-list">
          <div
            className="footer-contact-item"
          >
            <span className="footer-icon">
              <i className="pi pi-phone"></i>
            </span>
            <a
              href="tel:+5511999999999"
            >
              Telefone: (21) 99969-2539
            </a>
          </div>
          <div
            className="footer-contact-item"

          >
            <span className="footer-icon">
              <i className="pi pi-envelope"></i>
            </span>
            <a
              href="mailto:deuzapedrosa15@gmail.com"
            >
              Email: deuzapedrosa15@gmail.com
            </a>
          </div>
          <div
            className="footer-contact-item"
          >
            <span className="footer-icon">
              <i className="pi pi-instagram"></i>
            </span>
            <a
              href="https://www.instagram.com/dra.deuzapedrosa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram: @dra.deuzapedrosa
            </a>
          </div>
        </div>
      </div>
      <div className="footer-maps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14701.033736434794!2d-43.69113880169335!3d-22.90383680372831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bfbacf3d873f7%3A0x8f3e0dd597e28740!2sR.%20M%C3%A9dico%20Mariano%20Augusto%2C%20180%20-%20Santa%20Cruz%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2023575-024!5e0!3m2!1spt-BR!2sbr!4v1757129659320!5m2!1spt-BR!2sbr"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="footer-bottom">
        @ Site desenvolvido por{" "}
        <a
          href="https://www.linkedin.com/in/glauco-pedrosa-85b8971a4/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Glauco Pedrosa
        </a>
      </div>
    </footer>
  );
}
