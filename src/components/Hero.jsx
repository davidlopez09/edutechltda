import React, { useEffect, useState, useRef } from "react";
import { Rocket, ArrowRight, Code, Sparkles, CheckCircle2 } from "lucide-react";
import { stats } from "../data/content";
import { getAssetUrl } from "../utils/assets";

const codeSnippets = [
  "<div>",
  "</div>",
  "const app = new App()",
  "import React from 'react'",
  ".map((item) => ...)",
  "async / await",
  "API.get('/v1/data')",
  "useState()",
  "export default",
  "border-radius: 16px",
  "display: flex",
  "npm install",
  "Cloud CI/CD",
  "PostgreSQL",
  "REST API 200 OK",
];

export const Hero = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            stats.forEach((item, index) => {
              const target = item.value;
              let current = 0;
              const duration = 1800;
              const stepTime = 20;
              const totalSteps = duration / stepTime;
              const stepIncrement = target / totalSteps;

              const timer = setInterval(() => {
                current += stepIncrement;
                if (current >= target) {
                  current = target;
                  clearInterval(timer);
                }
                setCounts((prev) => {
                  const updated = [...prev];
                  updated[index] = Math.floor(current);
                  return updated;
                });
              }, stepTime);
            });
          }
        });
      },
      { threshold: 0.25 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-mesh">
        <div className="mesh-circle mesh-1" />
        <div className="mesh-circle mesh-2" />
        <div className="mesh-circle mesh-3" />
      </div>

      <div className="code-particles" id="codeParticles">
        {codeSnippets.map((snippet, i) => (
          <div
            key={i}
            className="code-particle"
            style={{
              left: `${(i * 19) % 95}%`,
              animationDuration: `${10 + (i % 5) * 2.5}s`,
              animationDelay: `${(i * 0.7) % 6}s`,
            }}
          >
            {snippet}
          </div>
        ))}
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <Sparkles size={14} className="badge-icon" />
              <span>Desarrollo Digital de Alto Nivel</span>
            </div>

            <h1>
              Transformamos Ideas en{" "}
              <span className="highlight">Soluciones Digitales</span> Extraordinarias
            </h1>

            <p>
              En <strong>Edutech Ltda</strong> construimos páginas web de alta conversión,
              aplicaciones móviles y software a medida que escalan tu negocio con tecnología
              de vanguardia, código limpio y rendimiento insuperable.
            </p>

            <div className="hero-btns">
              <button
                onClick={() => scrollTo("services")}
                className="btn btn-primary"
              >
                <Rocket size={18} /> Ver Servicios
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="btn btn-outline"
              >
                Hablemos <ArrowRight size={18} />
              </button>
            </div>

            <div className="hero-stats" ref={statsRef}>
              {stats.map((stat, i) => (
                <div className="stat" key={i}>
                  <span className="stat-num">
                    {counts[i]}
                    {stat.suffix}
                  </span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card-stack">
              <div className="floating-card card-main">
                <img
                  src={getAssetUrl("/images/homeNuevo.png")}
                  alt="Desarrollo Web Edutech"
                  loading="eager"
                />
              </div>

              <div className="floating-card card-code">
                <div className="code-header">
                  <div className="code-dots">
                    <span className="dot dot-red" />
                    <span className="dot dot-yellow" />
                    <span className="dot dot-green" />
                  </div>
                  <span className="code-filename">App.jsx</span>
                </div>
                <div className="code-line">
                  <span className="code-keyword">const</span>{" "}
                  <span style={{ color: "#e5c07b" }}>project</span> ={" "}
                  <span className="code-keyword">new</span>{" "}
                  <span className="code-func">Edutech</span>();
                </div>
                <div className="code-line">
                  <span className="code-func">project</span>.
                  <span className="code-func">design</span>(
                  <span className="code-string">'premium_ux'</span>);
                </div>
                <div className="code-line">
                  <span className="code-func">project</span>.
                  <span className="code-func">build</span>(
                  <span className="code-string">'react_vite'</span>);
                </div>
                <div className="code-line">
                  <span className="code-comment">// ✓ Rendimiento 100% optimizado</span>
                </div>
                <div className="code-line">
                  <span className="code-func">project</span>.
                  <span className="code-func">launch</span>(
                  <span className="code-string">'production'</span>);
                </div>
              </div>

              <div className="floating-card card-stat-widget">
                <div className="stat-widget-title">Métricas de Calidad</div>
                <div className="stat-bar-label">
                  <span>Velocidad de Carga</span>
                  <span>99%</span>
                </div>
                <div className="stat-bar">
                  <div className="stat-bar-fill" style={{ width: "99%" }} />
                </div>
                <div className="stat-bar-label">
                  <span>Diseño & Usabilidad</span>
                  <span>100%</span>
                </div>
                <div className="stat-bar">
                  <div className="stat-bar-fill" style={{ width: "100%" }} />
                </div>
                <div className="stat-bar-label">
                  <span>Optimización SEO</span>
                  <span>96%</span>
                </div>
                <div className="stat-bar">
                  <div className="stat-bar-fill" style={{ width: "96%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
