import React from "react";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  MonitorPlay,
  TicketCheck,
  Users,
} from "lucide-react";

import { eventDetails } from "../../data/webinarData";

const detailIcons = [
  CalendarDays,
  Clock3,
  MonitorPlay,
  TicketCheck,
];

const registeredProfessionals = [
  "/images/alternatives/panelist-alternative-1.webp",
  "/images/alternatives/panelist-alternative-2.webp",
  "/images/alternatives/panelist-alternative-3.webp",
];

function HeroSection({ onRegister }) {
  return (
    <section className="hero" id="home">
      <div className="hero__texture" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="hero__kicker">
            Live leadership webinar for HR professionals
          </p>

          <h1>
            The Future of <span>Remote Hiring</span>
          </h1>

          <p className="hero__description">
            Discover the insights, strategies and leadership practices
            needed to build future-ready, scalable and human-centred hiring
            in a distributed world.
          </p>

          <div
            className="hero__details"
            aria-label="Webinar details"
          >
            {eventDetails.map((item, index) => {
              const Icon = detailIcons[index];

              return (
                <div className="hero-detail" key={item.label}>
                  <span className="hero-detail__icon">
                    {Icon && (
                      <Icon
                        size={17}
                        aria-hidden="true"
                      />
                    )}
                  </span>

                  <div>
                    <strong>{item.value}</strong>
                    <span>{item.note}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="hero__actions">
            <button
              className="button button--accent"
              type="button"
              onClick={onRegister}
            >
              Reserve Your Seat
              <ArrowRight size={18} aria-hidden="true" />
            </button>

            <div className="hero__registrations">
              <span
                className="avatar-stack"
                aria-hidden="true"
              >
                {registeredProfessionals.map((image, index) => (
                  <span
                    className="avatar-stack__item"
                    key={image}
                  >
                    <img
                      src={image}
                      alt=""
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                  </span>
                ))}
              </span>

              <span className="hero__registration-copy">
                <strong>1200+</strong>
                HR professionals registered
              </span>
            </div>
          </div>

          <p className="hero__notice">
            Limited seats available • Registration closes soon
          </p>
        </div>

        <div
          className="hero__media"
          aria-label="Remote hiring illustration"
        >
          <span
            className="hero__glow"
            aria-hidden="true"
          />

          <img
            src="/images/hero-illustration.webp"
            alt="Remote hiring profiles and recruitment dashboard"
            fetchPriority="high"
          />

          <div className="hero__media-badge">
            <Users size={18} aria-hidden="true" />
            <span>People-first hiring at scale</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;