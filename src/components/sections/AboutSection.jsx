import React from "react";
import { Trophy } from "lucide-react";
import ResponsiveImage from "../common/ResponsiveImage";
import SectionHeading from "../common/SectionHeading";

function AboutSection() {
  return (
    <section className="section about" id="about">
      <div className="container about__grid">
        <div className="about__content">
          <SectionHeading
            eyebrow="About the Webinar"
            title="Recruitment changed. Your strategy should too."
            align="left"
          />
          <div className="about__body">
            <p>
              2020 was an unprecedented year for recruiters. It completely redefined how we operate. There is so much the year taught us that can help shape the future of remote hiring.
            </p>
            <p>
              In this live session, our panelists will discuss their key learnings from the year gone by and how HR professionals can apply them today to drive growth, build strong teams and prepare for what is next.
            </p>
          </div>
          <aside className="contest-note">
            <span aria-hidden="true">
              <Trophy size={20} />
            </span>
            <p>
              Enter the <strong>#FutureOfHR Contest</strong> by submitting your question for the panel. The most interesting entries stand a chance to win exciting prizes.
            </p>
          </aside>
        </div>

        <ResponsiveImage
          className="about__image"
          src="/images/about-illustration.webp"
          alt="Laptop with a virtual meeting and global remote-work graphics"
        />
      </div>
    </section>
  );
}

export default AboutSection;
