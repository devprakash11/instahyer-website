import React from "react";
import SectionHeading from "../common/SectionHeading";
import { whyAttend } from "../../data/webinarData";

function WhyAttendSection() {
  return (
    <section className="section why-attend" id="why-attend">
      <div className="container">
        <SectionHeading
          eyebrow="Why attend"
          title="Built for future-of-work leaders."
          description="This webinar goes beyond trends to focus on practical decisions, systems and leadership actions."
        />

        <div className="why-attend__grid">
          {whyAttend.map((item) => {
            const Icon = item.icon;
            return (
              <article className="why-card" key={item.title}>
                <span><Icon size={24} /></span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyAttendSection;
