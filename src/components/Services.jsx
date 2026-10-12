import React from "react";
import {
  Globe,
  ShoppingCart,
  Smartphone,
  Cpu,
  Bot,
  Layers,
  Database,
  Cloud,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { services, companyInfo } from "../data/content";

const iconMap = {
  Globe,
  ShoppingCart,
  Smartphone,
  Cpu,
  Bot,
  Layers,
  Database,
  Cloud,
  ShieldCheck,
};

export const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-title">
          <span className="section-label">Qué Hacemos</span>
          <h2>
            Servicios <span>Especializados</span>
          </h2>
          <p>
            Soluciones tecnológicas robustas diseñadas a medida para acelerar y
            escalar la competitividad digital de tu empresa.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Globe;
            const waUrl = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(
              `Hola Edutech, me interesa cotizar el servicio de ${service.whatsappTopic}.`
            )}`;

            return (
              <div className="service-card" key={service.id}>
                <div className="service-card-top">
                  <div className="service-icon-wrap">
                    <IconComponent size={24} />
                  </div>
                  <span className="service-tag">{service.tag}</span>
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="service-link"
                >
                  <span>Consultar Solución</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
