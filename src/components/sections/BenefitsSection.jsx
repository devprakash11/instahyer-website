import React from "react";
import { benefits } from "../../data/webinarData";

function BenefitsSection() {
  return (
    <section className="benefits" aria-label="Webinar benefits">
      <div className="container benefits__grid">
        {benefits.map((item, index) => {
          const Icon = item.icon;
          return (
            <article className="benefit-card" key={item.title}>
              <span className={`icon-chip icon-chip--${index + 1}`}>
                <Icon size={22} />
              </span>
              <div>
                <h2>{item.title}</h2>
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
