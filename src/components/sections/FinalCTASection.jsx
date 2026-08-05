import React from "react";
import { ArrowRight, CalendarDays, Clock3, MonitorPlay, TicketCheck } from "lucide-react";

function FinalCTASection({ onRegister }) {
  return (
    <section className="final-cta" aria-labelledby="final-cta-title">
      <div className="container final-cta__panel">
        <div className="final-cta__copy">
          <h2 id="final-cta-title">Build a More Future-Ready Hiring Strategy</h2>
          <p>
            Join industry leaders for an engaging conversation on the future of remote hiring and how you can stay ahead.
          </p>
        </div>

        <div className="final-cta__details">
          <div><CalendarDays size={16} /><span>22 August, 2026 (Sunday)</span></div>
          <div><Clock3 size={16} /><span>4:00 PM - 5:30 PM IST</span></div>
          <div><MonitorPlay size={16} /><span>Live Online (Google Meet)</span></div>
          <div><TicketCheck size={16} /><span>Free Registration</span></div>
          <button className="button button--accent" type="button" onClick={onRegister}>
            Register for the Live Webinar <ArrowRight size={16} />
          </button>
        </div>

        <div className="final-cta__image">
          <img src="/images/registration-illustration.webp" alt="Remote hiring registration illustration" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

export default FinalCTASection;
