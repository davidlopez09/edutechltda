import React from "react";
import { Calendar, ArrowRight } from "lucide-react";
import { blogPosts } from "../data/content";

export const Blog = () => {
  return (
    <section className="blog" id="blog">
      <div className="container">
        <div className="section-title">
          <span className="section-label">Artículos & Recursos</span>
          <h2>
            Blog de <span>Innovación Digital</span>
          </h2>
          <p>
            Análisis, tendencias y recomendaciones prácticas sobre desarrollo web,
            estrategia digital y tecnologías de vanguardia.
          </p>
        </div>

        <div className="blogs-grid">
          {blogPosts.map((post) => (
            <article className="blog-card" key={post.id}>
              <div className="blog-img">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "/images/homeNuevo.png";
                  }}
                />
              </div>

              <div className="blog-content">
                <p className="blog-date">
                  <Calendar size={14} />
                  <span>{post.date}</span>
                </p>

                <h3>{post.title}</h3>
                <p>{post.summary}</p>

                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="read-more"
                >
                  <span>Leer Artículo</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
