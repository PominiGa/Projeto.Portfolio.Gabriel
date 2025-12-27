import "../../styles/footer.css";

import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        {/* COLUNA 1 - CONTATO */}
        <div className="footer-col">
          <h4>Contato</h4>

          <a href="mailto:gabriel.souza53@hotmail.com" className="footer-link">
            <Mail size={16} />
            gabriel.souza53@hotmail.com
          </a>

          <a href="tel:+5514998604950" className="footer-link">
            <Phone size={16} />
            +55 (14) 99860-4950
          </a>

          <div className="footer-link no-hover">
            <MapPin size={16} />
            Lençóis Paulista • Brasil
          </div>
        </div>

        {/* COLUNA 2 - REDES */}
        <div className="footer-col">
          <h4>Redes</h4>

          <a
            href="https://github.com/PominiGa"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            <Github size={16} />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/gabriel-pomini-43aa731ba/"
            target="_blank"
            rel="noreferrer"
            className="footer-link linkedin"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>

          <a
            href="../assets/Gabriel_Pomini_Curriculo.pdf"
            download
            className="footer-link download"
          >
            <Download size={16} />
            Baixar Currículo
          </a>
        </div>
      </div>

      {/* BASE */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Gabriel Pomini. Todos os direitos reservados.
      </div>
    </footer>
  );
}
