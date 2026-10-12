import React, { useState } from "react";
import { Eye, ExternalLink, X, Tag, CheckCircle2, MessageSquare, Layers, Building } from "lucide-react";
import { projects, companyInfo } from "../data/content";
import { getAssetUrl } from "../utils/assets";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "Todos los Proyectos" },
    { id: "empresarial", label: "Gestión & Empresas" },
    { id: "comercial", label: "Arquitectura & Eventos" },
    { id: "industrial", label: "Suministros B2B" },
    { id: "fitness", label: "Fitness & Bienestar" },
    { id: "ecommerce", label: "E-Commerce" },
    { id: "software", label: "Software & POS" },
  ];

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter((p) => {
        const cat = p.category.toLowerCase();
        if (activeCategory === "empresarial") return cat.includes("empresarial") || cat.includes("financiera");
        if (activeCategory === "comercial") return cat.includes("comercial") || cat.includes("eventos");
        if (activeCategory === "industrial") return cat.includes("industrial") || cat.includes("b2b");
        if (activeCategory === "fitness") return cat.includes("fitness");
        if (activeCategory === "ecommerce") return cat.includes("e-commerce");
        if (activeCategory === "software") return cat.includes("software") || cat.includes("pos") || cat.includes("logístico");
        return true;
      });

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-title">
          <span className="section-label">Casos de Éxito & Portafolio</span>
          <h2>
            Proyectos <span>Realizados</span>
          </h2>
          <p>
            Plataformas web de alto rendimiento, sistemas empresariales y
            soluciones digitales a medida creadas para impulsar negocios reales.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="projects-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn ${activeCategory === cat.id ? "active" : ""}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-img">
                <img
                  src={getAssetUrl(project.image)}
                  alt={project.title}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = getAssetUrl("/images/homeNuevo.png");
                  }}
                />
                <div className="project-overlay">
                  <button
                    className="overlay-btn"
                    onClick={() => setSelectedProject(project)}
                    aria-label={`Ver detalles de ${project.title}`}
                  >
                    <Eye size={18} />
                    <span>Ver Proyecto</span>
                  </button>
                </div>
              </div>

              <div className="project-info">
                <span className="project-category-badge">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.shortDesc}</p>

                <div className="project-tags">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span className="project-tag" key={i}>
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  className="btn-sm view-project"
                  onClick={() => setSelectedProject(project)}
                >
                  <Eye size={15} /> Ver Detalles
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modern High-End Project Modal */}
      {selectedProject && (
        <div
          className="project-modal active"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              className="close-modal"
              onClick={() => setSelectedProject(null)}
              aria-label="Cerrar modal"
            >
              <X size={20} />
            </button>

            <div className="modal-image-container">
              <img
                src={getAssetUrl(selectedProject.image)}
                alt={selectedProject.title}
                onError={(e) => {
                  e.currentTarget.src = getAssetUrl("/images/homeNuevo.png");
                }}
              />
              <div className="modal-img-badge">
                <span>{selectedProject.category}</span>
              </div>
            </div>

            <div className="modal-details">
              <div className="modal-header-meta">
                <span className="modal-client-name">
                  <Building size={15} /> {selectedProject.client || selectedProject.title}
                </span>
              </div>

              <h2>{selectedProject.title}</h2>
              <p className="modal-description-text">{selectedProject.fullDesc}</p>

              {/* Key Features */}
              {selectedProject.features && (
                <div className="modal-features-section">
                  <h4>
                    <CheckCircle2 size={16} className="modal-icon-accent" />
                    Alcance & Características Clave:
                  </h4>
                  <ul className="modal-features-list">
                    {selectedProject.features.map((feat, idx) => (
                      <li key={idx}>
                        <span className="feature-bullet" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack */}
              <div className="modal-tech-stack">
                <h4>
                  <Layers size={16} className="modal-icon-accent" />
                  Stack Tecnológico Implementado:
                </h4>
                <div className="project-tags">
                  {selectedProject.technologies.map((t, idx) => (
                    <span className="project-tag modal-tech-pill" key={idx}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="modal-actions">
                <a
                  href={`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(
                    `Hola Edutech, vi el proyecto de ${selectedProject.title} y me interesa cotizar una solución para mi empresa.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary modal-action-btn"
                >
                  <MessageSquare size={18} />
                  <span>Cotizar Proyecto Similar</span>
                </a>
                <button
                  type="button"
                  className="btn btn-outline modal-close-btn"
                  onClick={() => setSelectedProject(null)}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
