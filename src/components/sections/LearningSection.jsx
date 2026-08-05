import React from "react";
import SectionHeading from "../common/SectionHeading";
import { learningOutcomes } from "../../data/webinarData";

function LearningSection() {
  return (
    <section className="section learning" id="learning">
      <div className="container">
        <SectionHeading
          eyebrow="Learning Outcomes"
          title="What you will learn"
          description="A practical session designed to help HR teams make better hiring decisions in distributed and fast-changing environments."
        />

        <div className="learning__grid">
          {learningOutcomes.map((item) => {
            const Icon = item.icon;
            return (
              <article className="learning-card" key={item.title}>
                <span><Icon size={25} /></span>
                <h3>{item.title}</h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default LearningSection;
