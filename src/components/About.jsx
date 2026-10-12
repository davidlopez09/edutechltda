import React from "react";
import { Target, Compass, Award, CheckCircle } from "lucide-react";

export const About = () => {
  return (
    <section className="mission-vision" id="about">
      <div className="container">
        <div className="section-title">
          <span className="section-label">Quiénes Somos</span>
          <h2>
            Nuestra <span>Filosofía & ADN</span>
          </h2>
          <p>
            Somos una empresa de ingeniería de software enfocada en elevar la
            capacidad competitiva de negocios y organizaciones a través de la
            tecnología.
          </p>
        </div>

        <div className="mv-grid">
          <div className="mv-card">
            <div className="mv-icon">
              <Target size={28} />
            </div>
            <h3>Misión</h3>
            <p>
              Transformar ideas y modelos de negocio en soluciones digitales
              innovadoras, eficientes y seguras. Nos comprometemos a entregar
              desarrollo de software de alta calidad, enfocado rigurosamente en
              generar retornos de inversión y una experiencia de usuario memorable.
            </p>
            <p>
              Trabajamos mano a mano con cada cliente, construyendo herramientas que
              optimizan operaciones, automatizan tareas repetitivas y aceleran la
              adopción digital en toda la organización.
            </p>
          </div>

          <div className="mv-card">
            <div className="mv-icon">
              <Compass size={28} />
            </div>
            <h3>Visión</h3>
            <p>
              Consolidarnos como un referente líder en ingeniería de software y
              soluciones digitales a nivel nacional e internacional, destacándonos
              por la excelencia técnica, la transparencia y el trato humano.
            </p>
            <p>
              Aspiramos a ser el socio tecnológico estratégico de cabecera para
              empresas que buscan transformar radicalmente sus procesos e innovar
              continuamente en un ecosistema digital dinámico.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
