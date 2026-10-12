import {
  Mail,
  Phone,
  Clock,
  ArrowUp,
  ExternalLink,
} from "lucide-react";
import { companyInfo } from "../data/content";
import { WhatsAppIcon } from "./WhatsAppButton";
import { getAssetUrl } from "../utils/assets";

export const Footer = () => {
  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img
                src={getAssetUrl("/images/edutechlogo-white.png")}
                alt="Edutech Ltda"
                style={{ maxHeight: "46px" }}
              />
            </div>
            <p>
              Empresa colombiana especializada en ingeniería de software,
              desarrollo de plataformas web escalables y soluciones digitales
              empresariales.
            </p>
            <div className="footer-social">
              <a
                href={companyInfo.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon size={18} />
              </a>
              <a
                href={`mailto:${companyInfo.email}`}
                aria-label="Correo"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Navegación */}
          <div className="footer-col">
            <h3>Navegación</h3>
            <ul>
              <li>
                <a href="#home" onClick={(e) => scrollTo(e, "home")}>
                  Inicio
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => scrollTo(e, "services")}>
                  Servicios
                </a>
              </li>
              <li>
                <a href="#process" onClick={(e) => scrollTo(e, "process")}>
                  Proceso Ágil
                </a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => scrollTo(e, "projects")}>
                  Portafolio
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => scrollTo(e, "about")}>
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#clients" onClick={(e) => scrollTo(e, "clients")}>
                  Clientes
                </a>
              </li>
              <li>
                <a href="#blog" onClick={(e) => scrollTo(e, "blog")}>
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Servicios */}
          <div className="footer-col">
            <h3>Soluciones</h3>
            <ul>
              <li>
                <a href="#services" onClick={(e) => scrollTo(e, "services")}>
                  Desarrollo Web & Portales
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => scrollTo(e, "services")}>
                  Tiendas Virtuales (E-commerce)
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => scrollTo(e, "services")}>
                  Aplicaciones Móviles
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => scrollTo(e, "services")}>
                  Software a Medida & ERP
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => scrollTo(e, "services")}>
                  Inteligencia Artificial
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => scrollTo(e, "services")}>
                  Mantenimiento & Cloud
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="footer-col">
            <h3>Contacto</h3>
            <div className="footer-contact-item">
              <Mail size={16} />
              <span>{companyInfo.email}</span>
            </div>
            <div className="footer-contact-item">
              <Phone size={16} />
              <span>{companyInfo.phones.join(" / ")}</span>
            </div>
            <div className="footer-contact-item">
              <Clock size={16} />
              <span>{companyInfo.schedule.weekdays}</span>
            </div>
            <div className="footer-contact-item">
              <Clock size={16} />
              <span>{companyInfo.schedule.saturdays}</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {currentYear} <strong>{companyInfo.name}</strong>. Todos los
            derechos reservados. Desarrollado con tecnología de alta velocidad.
          </p>
          <button
            className="back-to-top"
            onClick={(e) => scrollTo(e, "home")}
            aria-label="Volver arriba"
          >
            <span>Subir</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};
