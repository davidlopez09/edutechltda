import React from "react";
import { Star, Quote, CheckCircle } from "lucide-react";
import { clients, testimonials } from "../data/content";

export const ClientsAndTestimonials = () => {
  // Duplicar listas para animación de carrusel continuo fluido
  const duplicatedClients = [...clients, ...clients, ...clients];
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <>
      {/* Logos de Clientes */}
      <section className="clients" id="clients">
        <div className="container">
          <div className="section-title">
            <span className="section-label">Empresas Aliadas</span>
            <h2>
              Confían en <span>Nosotros</span>
            </h2>
            <p>
              Marcas y organizaciones que han confiado en el equipo de Edutech
              para digitalizar y transformar sus operaciones.
            </p>
          </div>
        </div>

        <div className="clients-track-wrapper">
          <div className="clients-track" id="clientsTrack">
            {duplicatedClients.map((client, index) => (
              <div className="client-logo" key={index} title={client.name}>
                <img
                  src={client.logo}
                  alt={client.name}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="testimonials" id="testimonials">
        <div className="container">
          <div className="section-title">
            <span className="section-label">Testimonios de Éxito</span>
            <h2>
              Lo Que Opinan <span>Nuestros Clientes</span>
            </h2>
            <p>
              La confianza y satisfacción de quienes eligen a Edutech es nuestro
              mayor respaldo y motivación diaria.
            </p>
          </div>
        </div>

        <div className="testimonials-track-wrapper">
          <div className="testimonials-track">
            {duplicatedTestimonials.map((t, index) => (
              <div className="testimonial-card" key={index}>
                <div className="testimonial-top">
                  <div className="testimonial-avatar">
                    <Quote size={20} className="quote-icon" />
                  </div>
                  <div className="testimonial-rating">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={15} className="star-filled" fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>
                </div>

                <p className="testimonial-text">"{t.quote}"</p>

                <div className="testimonial-meta">
                  <div className="testimonial-author">{t.author}</div>
                  <div className="testimonial-position">{t.position}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
