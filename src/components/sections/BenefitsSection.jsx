import React from "react";
import { benefits } from "../../data/webinarData";

function BenefitsSection() {
  return (
    <section className="benefits" aria-labelledby="benefits-title">
      <h2 id="benefits-title" className="sr-only">
        Webinar benefits
      </h2>
      <div className="container benefits__grid">
        {benefits.map((item, index) => {
          const Icon = item.icon;
          return (
            <article className="benefit-card" key={item.title}>
              <span className={`icon-chip icon-chip--${index + 1}`}>
                <Icon size={22} aria-hidden="true" />
              </span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default BenefitsSection;
