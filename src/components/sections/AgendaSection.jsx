import React from "react";
import { MessageSquare } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { agendaItems } from "../../data/webinarData";

function AgendaSection() {
  return (
    <section className="section agenda" id="agenda">
      <div className="container agenda__grid">
        <div className="agenda__intro">
          <SectionHeading
            eyebrow="Webinar agenda"
            title="A focused 90-minute leadership session"
            description="From context and lessons to practical frameworks, live questions and next steps."
            align="left"
            light
          />
          <div className="agenda__interactive">
            <MessageSquare size={22} aria-hidden="true" />
            <div>
              <strong>Live and interactive</strong>
              <p>Submit your question during registration or ask it in the session.</p>
            </div>
          </div>
        </div>

        <ol className="agenda__timeline">
          {agendaItems.map((item) => (
            <li key={item.number}>
              <span className="agenda__marker" aria-hidden="true">{item.number}</span>
              <div className="agenda__item">
                <span className="agenda__time">{item.time}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default AgendaSection;
