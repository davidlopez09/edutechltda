import React from "react";
import { processSteps } from "../data/content";

export const Process = () => {
  return (
    <section className="process" id="process">
      <div className="container">
        <div className="section-title">
          <span className="section-label">Metodología de Trabajo</span>
          <h2>
            Nuestro <span>Proceso Ágil</span>
          </h2>
          <p>
            Un flujo transparente y metódico que garantiza entregas a tiempo, código
            de alta calidad y resultados comerciales tangibles.
          </p>
        </div>

        <div className="process-steps">
          {processSteps.map((step, index) => (
            <div className="process-step" key={index}>
              <div className="step-num">{step.num}</div>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
