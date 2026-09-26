import React from "react";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  MonitorPlay,
  TicketCheck,
} from "lucide-react";
import { eventDetails } from "../../data/webinarData";

const eventDetail = (label) =>
  eventDetails.find((detail) => detail.label === label);

function FinalCTASection({ onRegister }) {
  const date = eventDetail("Date");
  const time = eventDetail("Time");
  const format = eventDetail("Format");
  const price = eventDetail("Price");

  return (
    <section className="final-cta" aria-labelledby="final-cta-title">
      <div className="container final-cta__panel">
        <div className="final-cta__copy">
          <h2 id="final-cta-title">Build a More Future-Ready Hiring Strategy</h2>
          <p>
            Join industry leaders for an engaging conversation on the future of
            remote hiring and how you can stay ahead.
          </p>
        </div>

        <div className="final-cta__details">
          <div>
            <CalendarDays size={16} aria-hidden="true" />
            <span>
              {date?.value}
              {date?.note ? ` (${date.note})` : ""}
            </span>
          </div>
          <div>
            <Clock3 size={16} aria-hidden="true" />
            <span>
              {time?.value} {time?.note}
            </span>
          </div>
          <div>
            <MonitorPlay size={16} aria-hidden="true" />
            <span>
              {format?.value}
              {format?.note ? ` (${format.note})` : ""}
            </span>
          </div>
          <div>
            <TicketCheck size={16} aria-hidden="true" />
            <span>{price?.value} Registration</span>
          </div>
          <button
            className="button button--accent"
            type="button"
            onClick={onRegister}
          >
            Register for the Live Webinar
            <ArrowRight size={16} aria-hidden="true" />
          </button>
        </div>

        <div className="final-cta__image">
          <img
            src="/images/registration-illustration.webp"
            alt="Remote hiring registration illustration"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default FinalCTASection;
